




// ======================================================
// RACK 2 — ADVANCED SYSTEMS (FULL DELUXE VERSION)
// ======================================================
const SystemsRack = (() => {

  // ======================================================
  // FACTIONS — FULL SYSTEM
  // ======================================================
  const FactionSystem = {
    standings: {},

    adjust(node) {
      if (!node.factionAdjust) return;
      const { f, d } = node.factionAdjust;
      this.standings[f] = (this.standings[f] || 0) + d;
      LogRack.world(`Faction '${f}' shifts by ${d}. Standing: ${this.standings[f]}`);
    },

    getStanding(f) {
      return this.standings[f] || 0;
    },

    getBias(f) {
      const s = this.getStanding(f);
      return s * 0.05; // 5% per standing point
    }
  };

  // ======================================================
  // QUESTS — FULL SYSTEM
  // ======================================================
  const QuestSystem = {
    active: new Set(),
    completed: new Set(),

    start(node) {
      if (!node.startQuest) return;
      if (!this.active.has(node.startQuest)) {
        this.active.add(node.startQuest);
        LogRack.world(`Quest started: ${node.startQuest}`);
      }
    },

    complete(id) {
      if (this.active.has(id)) {
        this.active.delete(id);
        this.completed.add(id);
        LogRack.world(`Quest completed: ${id}`);
      }
    }
  };

  // ======================================================
  // MERCHANTS — FULL ADVANCED SYSTEM
  // ======================================================
  const merchantsSeen = new Set();

  const MerchantSystem = {
    inventories: {},
    restockInterval: 60000,
    priceVariance: 0.15, // ±15%

    generateInventory(node) {
      const base = node.merchant?.inventory || [];
      const inv = base.map(item => ({
        name: item.name,
        type: item.type,
        basePrice: item.basePrice,
        price: this.calculatePrice(item, node),
        qty: Math.floor(Math.random() * 4) + 1
      }));
      this.inventories[node.id] = inv;
    },

    calculatePrice(item, node) {
      let price = item.basePrice;

      // faction discount
      if (node.factionAdjust) {
        const f = node.factionAdjust.f;
        const standing = FactionSystem.getStanding(f);
        price -= Math.floor(standing * 0.1 * price);
      }

      // random variance
      const variance = price * this.priceVariance;
      price += Math.floor((Math.random() * variance) - (variance / 2));

      return Math.max(1, price);
    },

    spawn(node) {
      if (!node.merchant) return;
      if (!merchantsSeen.has(node.id)) {
        merchantsSeen.add(node.id);
        this.generateInventory(node);
        LogRack.world(`Merchant '${node.merchant.name}' sets up shop.`);
      }
    },

    restock(node) {
      if (!node?.merchant) return;
      this.generateInventory(node);
      LogRack.world(`Merchant '${node.merchant.name}' restocks.`);
    },

    buy(node, itemName) {
      const inv = this.inventories[node.id];
      if (!inv) return LogRack.world("Merchant has no inventory.");

      const item = inv.find(i => i.name === itemName);
      if (!item) return LogRack.world("Item not found.");

      if (item.qty <= 0) return LogRack.world("Item is sold out.");

      item.qty--;
      LogRack.world(`You bought ${item.name} for ${item.price}.`);
    },

    sell(node, itemName) {
      const inv = this.inventories[node.id];
      if (!inv) return LogRack.world("Merchant has no inventory.");

      const price = Math.floor(Math.random() * 5) + 1;
      LogRack.world(`You sold ${itemName} for ${price}.`);
    }
  };

  setInterval(() => {
    const node = StoryEngine.getCurrentNode();
    MerchantSystem.restock(node);
  }, MerchantSystem.restockInterval);

  // ======================================================
  // ENCOUNTERS — FULL ADVANCED SYSTEM
  // ======================================================
  const encountersSeen = new Set();

  const EncounterSystem = {
    dangerLevel: 0,

    roll(node) {
      if (!node.encounter) return;
      if (encountersSeen.has(node.id)) return;

      const { chance, table } = node.encounter;

      const modifiedChance =
        chance +
        this.dangerLevel * 0.05 +
        FactionSystem.getBias(node.factionAdjust?.f || "");

      if (Math.random() < modifiedChance) {
        encountersSeen.add(node.id);
        const encounter = this.generateEncounter(table);
        LogRack.world(`Encounter triggered: ${encounter.name}`);
        CombatSystem.start(encounter);
      }
    },

    generateEncounter(table) {
      const tables = {
        forest_low: [
          { name: "Whisper Wisp", hp: 4, atk: 1, type: "spirit" },
          { name: "Shadow Moth", hp: 3, atk: 2, type: "beast" }
        ],
        forest_mid: [
          { name: "Memory Wolf", hp: 8, atk: 3, type: "beast" },
          { name: "Echo Stalker", hp: 10, atk: 4, type: "spirit" }
        ]
      };

      const list = tables[table] || [];
      return list[Math.floor(Math.random() * list.length)];
    },

    increaseDanger() {
      this.dangerLevel++;
    }
  };

  // ======================================================
  // COMBAT — FULL ADVANCED SYSTEM
  // ======================================================
  const CombatSystem = {
    inCombat: false,
    enemy: null,

    start(enemy) {
      this.inCombat = true;
      this.enemy = { ...enemy };
      LogRack.world(`Combat begins with ${enemy.name}!`);
      this.round();
    },

    round() {
      if (!this.inCombat) return;

      const player = State.get().stats;

      // Player attack
      const playerHit = this.rollHit(player.insight);
      if (playerHit) {
        const dmg = this.rollDamage(player.insight);
        this.enemy.hp -= dmg;
        LogRack.world(`You hit ${this.enemy.name} for ${dmg} damage.`);
      } else {
        LogRack.world(`You miss your attack.`);
      }

      if (this.enemy.hp <= 0) {
        this.endCombat(true);
        return;
      }

      // Enemy attack
      const enemyHit = this.rollHit(this.enemy.atk);
      if (enemyHit) {
        const dmg = this.rollDamage(this.enemy.atk);
        player.health -= dmg;
        LogRack.world(`${this.enemy.name} hits you for ${dmg}.`);
      } else {
        LogRack.world(`${this.enemy.name} misses.`);
      }

      if (player.health <= 0) {
        this.endCombat(false);
        return;
      }

      setTimeout(() => this.round(), 1500);
    },

    rollHit(stat) {
      return Math.random() < (0.5 + stat * 0.05);
    },

    rollDamage(stat) {
      return Math.floor(Math.random() * stat) + 1;
    },

    endCombat(playerWon) {
      this.inCombat = false;
      if (playerWon) {
        LogRack.world(`You defeated ${this.enemy.name}!`);
        EncounterSystem.increaseDanger();
      } else {
        LogRack.world(`You were defeated by ${this.enemy.name}...`);
      }
    }
  };

  // ======================================================
  // TRIGGERS — FULL SYSTEM
  // ======================================================
  function handleTrigger(word, node) {
    if (!node) return;
    const tw = node.triggerWords || [];
    if (tw.includes(word)) {
      LogRack.world(`Trigger activated: "${word}"`);
    }
  }

  // ======================================================
  // NODE ENTRY — MASTER SWITCH
  // ======================================================
  function onNodeEntry(node) {
    QuestSystem.start(node);
    FactionSystem.adjust(node);
    MerchantSystem.spawn(node);
    EncounterSystem.roll(node);
  }

  // ======================================================
  // PUBLIC API
  // ======================================================
  return {
    onNodeEntry,
    onTrigger: handleTrigger,
    MerchantSystem,
    EncounterSystem,
    CombatSystem,
    FactionSystem,
    QuestSystem
  };

})();

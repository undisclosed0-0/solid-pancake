


// ======================================================
// RACK 5 — ADMIN / DEBUG / MASTER TOOLS (FULL DELUXE)
// ======================================================
const AdminRack = (() => {

  // ======================================================
  // INTERNAL STATE
  // ======================================================
  let adminEnabled = true;     // toggle if needed
  let debugOverlayEnabled = false;

  // ======================================================
  // DEBUG OVERLAY (live info)
  // ======================================================
  function renderDebugOverlay() {
    if (!debugOverlayEnabled) return;

    const node = StoryEngine.getCurrentNode();
    const s = State.get();

    const el = document.querySelector("#debug-overlay");
    if (!el) return;

    el.innerHTML = `
      <div class="debug-block">
        <h3>Node</h3>
        <pre>${JSON.stringify(node, null, 2)}</pre>
      </div>

      <div class="debug-block">
        <h3>State</h3>
        <pre>${JSON.stringify(s, null, 2)}</pre>
      </div>

      <div class="debug-block">
        <h3>Systems</h3>
        <pre>${JSON.stringify({
          quests: [...SystemsRack.QuestSystem.active],
          factions: SystemsRack.FactionSystem.standings,
          danger: SystemsRack.EncounterSystem.dangerLevel
        }, null, 2)}</pre>
      </div>
    `;
  }

  setInterval(renderDebugOverlay, 500);

  // ======================================================
  // MASTER COMMANDS (admin-only)
  // ======================================================
  const MasterCommands = {

    teleport(nodeId) {
      const node = StoryEngine.getNode(nodeId);
      if (!node) return LogRack.world(`[Admin] Node '${nodeId}' not found.`);
      State.setCurrentNode(nodeId);
      DisplayRack.renderNode(node);
      LogRack.world(`[Admin] Teleported to '${nodeId}'.`);
    },

    heal(amount = 999) {
      State.adjustStat("health", amount);
      LogRack.world(`[Admin] Healed +${amount}.`);
      DisplayRack.renderVitals();
    },

    damage(amount = 1) {
      State.adjustStat("health", -amount);
      LogRack.world(`[Admin] Damage -${amount}.`);
      DisplayRack.renderVitals();
    },

    forceEncounter(table) {
      const enc = SystemsRack.EncounterSystem.generateEncounter(table);
      LogRack.world(`[Admin] Forced encounter: ${enc.name}`);
      SystemsRack.CombatSystem.start(enc);
    },

    forceCutscene(id) {
      LogRack.world(`[Admin] Forced cutscene: ${id}`);
      FXRack.playCutscene(id);
    },

    togglePvP() {
      const node = StoryEngine.getCurrentNode();
      node.pvpToggle = !node.pvpToggle;
      LogRack.world(`[Admin] PvP toggled: ${node.pvpToggle}`);
    },

    spawnMerchant(name = "Debug Merchant") {
      const node = StoryEngine.getCurrentNode();
      node.merchant = { name, inventory: [] };
      LogRack.world(`[Admin] Merchant '${name}' spawned.`);
      SystemsRack.MerchantSystem.spawn(node);
    },

    addFlag(key, value) {
      State.setFlag(key, value);
      LogRack.world(`[Admin] Flag set: ${key} = ${value}`);
      DisplayRack.renderStatmap();
    },

    dumpNode() {
      const node = StoryEngine.getCurrentNode();
      LogRack.world(`[Admin Dump] Node:\n${JSON.stringify(node, null, 2)}`);
    },

    dumpState() {
      LogRack.world(`[Admin Dump] State:\n${JSON.stringify(State.get(), null, 2)}`);
    },

    dumpSystems() {
      LogRack.world(`[Admin Dump] Systems:\n${JSON.stringify({
        quests: [...SystemsRack.QuestSystem.active],
        factions: SystemsRack.FactionSystem.standings,
        danger: SystemsRack.EncounterSystem.dangerLevel
      }, null, 2)}`);
    }
  };

  // ======================================================
  // ADMIN COMMAND PARSER
  // ======================================================
  function handleAdminCommand(raw) {
    if (!adminEnabled) return;

    const parts = raw.split(" ");
    const cmd = parts[0];
    const arg = parts.slice(1).join(" ");

    switch (cmd) {
      case "/tp":
        MasterCommands.teleport(arg);
        break;

      case "/heal":
        MasterCommands.heal(Number(arg) || 999);
        break;

      case "/dmg":
        MasterCommands.damage(Number(arg) || 1);
        break;

      case "/enc":
        MasterCommands.forceEncounter(arg || "forest_low");
        break;

      case "/cut":
        MasterCommands.forceCutscene(arg);
        break;

      case "/pvp":
        MasterCommands.togglePvP();
        break;

      case "/merchant":
        MasterCommands.spawnMerchant(arg || "Debug Merchant");
        break;

      case "/flag":
        const [key, value] = arg.split("=");
        MasterCommands.addFlag(key, value);
        break;

      case "/dumpnode":
        MasterCommands.dumpNode();
        break;

      case "/dumpstate":
        MasterCommands.dumpState();
        break;

      case "/dumpsys":
        MasterCommands.dumpSystems();
        break;

      case "/debug":
        debugOverlayEnabled = !debugOverlayEnabled;
        LogRack.world(`[Admin] Debug overlay: ${debugOverlayEnabled}`);
        break;

      default:
        LogRack.world(`[Admin] Unknown command: ${cmd}`);
    }
  }

  // ======================================================
  // PUBLIC API
  // ======================================================
  return {
    handleAdminCommand,
    MasterCommands
  };

})();

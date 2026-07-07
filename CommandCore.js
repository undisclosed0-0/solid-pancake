// ============================================================
// GLOBAL COMMAND CORE (MODULE)
// ============================================================

const CommandCore = {

  // ------------------------------------------------------------
  // 1. MASTER PARSER
  // ------------------------------------------------------------
  parse(raw) {
    if (!raw) return null;

    const cmd = raw.trim().toLowerCase();
    const parts = cmd.split(" ");
    const verb = parts[0];
    const args = parts.slice(1);

    return { raw, cmd, verb, args };
  },

  // ------------------------------------------------------------
  // 2. MASTER ROUTER
  // ------------------------------------------------------------
  route(parsed) {
    if (!parsed) return;

    const { verb, args } = parsed;

    // MOVEMENT
    if (["north","south","east","west","up","down","n","s","e","w","u","d"].includes(verb)) {
      return this.routeMovement(verb);
    }

    // COMBAT / PVP
    if (["attack","strike","hit","bash","pvp","duel"].includes(verb)) {
      return this.routeCombat(verb, args);
    }

    // ACTIONS
    if (["look","inspect","examine","search"].includes(verb)) {
      return this.routeAction(verb, args);
    }

    // STORY
    if (verb === "story") {
      return this.routeStory(args[0]);
    }

    // CUTSCENE / FX
    if (verb === "cutscene" || verb === "fx" || verb === "snd-fx") {
      return this.routeCutscene(args[0]);
    }

    // INVENTORY
    if (["inv","inventory","bag"].includes(verb)) {
      return this.routeInventory();
    }

    // EQUIPMENT
    if (["equip","unequip","wear","remove"].includes(verb)) {
      return this.routeEquipment(verb, args);
    }

    // MAGIC / SKILLS
    if (["cast","skill","use"].includes(verb)) {
      return this.routeMagic(verb, args);
    }

    // EMOTES
    if (["whisper","shout","yell","talk"].includes(verb)) {
      return this.routeEmote(verb, args);
    }

    // ADMIN
    if (verb === "admin") {
      return this.routeAdmin(args);
    }

    // FALLBACK
    RPG.Log.write("Unknown command: " + parsed.raw);
  },

  // ------------------------------------------------------------
  // 3. ROUTERS → RACKS
  // ------------------------------------------------------------

  routeMovement(dir) {
    const mapDir = this.normalizeDirection(dir);
    RPG.Rack.movement.go(mapDir);
  },

  normalizeDirection(d) {
    const map = { n:"north", s:"south", e:"east", w:"west", u:"up", d:"down" };
    return map[d] || d;
  },

  routeCombat(verb, args) {
    RPG.Rack.action.run("combat:" + verb);
  },

  routeAction(verb, args) {
    RPG.Rack.action.run(verb);
  },

  routeStory(id) {
    RPG.Rack.story.start(id);
  },

  routeCutscene(id) {
    RPG.Rack.cutscene.play(id);
  },

  routeInventory() {
    RPG.Rack.action.run("inventory");
  },

  routeEquipment(verb, args) {
    RPG.Rack.action.run("equip:" + verb + ":" + args.join(" "));
  },

  routeMagic(verb, args) {
    RPG.Rack.action.run("magic:" + verb + ":" + args.join(" "));
  },

  routeEmote(verb, args) {
    RPG.Rack.action.run("emote:" + verb + ":" + args.join(" "));
  },

  routeAdmin(args) {
    RPG.Rack.action.run("admin:" + args.join(" "));
  },

  // ------------------------------------------------------------
  // 4. ENTRY POINT
  // ------------------------------------------------------------
  run(raw) {
    const parsed = this.parse(raw);
    this.route(parsed);
  }
};

// EXPOSE TO GLOBAL
window.CommandCore = CommandCore;

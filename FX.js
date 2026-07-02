



// ======================================================
// RACK 3 — FX / EVENTS (CUTSCENES, AMBIENT, CINEMATIC)
// ======================================================
const FXRack = (() => {

  // ======================================================
  // AMBIENT FX — PER NODE
  // ======================================================
  const AMBIENT_FX = {
    start: {
      sound: "soft_wind",
      visual: "mist_low",
      text: "The mist curls around your boots, carrying distant whispers."
    },
    forest_path: {
      sound: "forest_whispers",
      visual: "branches_close",
      text: "Branches knit overhead, and the forest seems to lean in to listen."
    }
    // extend per node id...
  };

  function playAmbientForNode(node) {
    const fx = AMBIENT_FX[node.id];
    if (!fx) return;

    LogRack.world(`[Ambient] ${fx.text}`);
    // hook: playSound(fx.sound), playVisual(fx.visual) if you add real audio/visual later
  }

  // ======================================================
  // CUTSCENES — SCRIPTED SEQUENCES
  // ======================================================
  const CUTSCENES = {
    "echo_mark_intro": [
      "The world pauses. The mist thickens, and a single echo hangs in the air.",
      "You feel a mark etching itself into your memory, invisible but permanent.",
      "Somewhere deeper in the forest, something acknowledges you."
    ],
    "forest_whisper": [
      "A whisper brushes your ear: 'Not all paths are seen. Some are remembered.'",
      "The path ahead seems to shimmer, as if waiting for you to choose."
    ]
    // add more cutscenes keyed by id...
  };

  function playCutscene(id) {
    const script = CUTSCENES[id];
    if (!script) {
      LogRack.world(`[Cutscene] Missing script: ${id}`);
      return;
    }

    LogRack.world(`[Cutscene] ${id} begins.`);
    let i = 0;

    function step() {
      if (i >= script.length) {
        LogRack.world(`[Cutscene] ${id} ends.`);
        return;
      }
      LogRack.world(script[i]);
      i++;
      setTimeout(step, 1500);
    }

    step();
  }

  // ======================================================
  // TRIGGER → FX / CUTSCENE MAP
  // ======================================================
  const TRIGGER_FX = {
    // word → { cutsceneId?, ambientBoost?, log? }
    "whisper": {
      cutsceneId: "forest_whisper",
      log: "The whisper in the trees sharpens into a voice."
    },
    "memory": {
      cutsceneId: "echo_mark_intro",
      log: "Your memory stirs, and the forest responds."
    }
    // add more trigger words...
  };

  function handleTriggerFX(word, node) {
    const fx = TRIGGER_FX[word];
    if (!fx) return;

    if (fx.log) LogRack.world(`[FX] ${fx.log}`);
    if (fx.cutsceneId) playCutscene(fx.cutsceneId);
  }

  // ======================================================
  // NODE-BASED EVENTS (ENTRY HOOKS)
  // ======================================================
  const NODE_EVENTS = {
    start: {
      onFirstEnter: ["echo_mark_intro"],
      onRevisit: []
    },
    forest_path: {
      onFirstEnter: [],
      onRevisit: ["forest_whisper"]
    }
    // extend per node...
  };

  const nodeVisitCounts = {};

  function handleNodeEvents(node) {
    const cfg = NODE_EVENTS[node.id];
    if (!cfg) return;

    const count = (nodeVisitCounts[node.id] || 0) + 1;
    nodeVisitCounts[node.id] = count;

    const list = count === 1 ? cfg.onFirstEnter : cfg.onRevisit;
    list.forEach(id => playCutscene(id));
  }

  // ======================================================
  // PUBLIC ENTRY POINTS
  // ======================================================
  function onNodeEntry(node) {
    if (!node) return;
    playAmbientForNode(node);
    handleNodeEvents(node);
  }

  function onTrigger(word, node) {
    handleTriggerFX(word, node);
  }

  return {
    onNodeEntry,
    onTrigger,
    playCutscene,
    playAmbientForNode
  };

})();

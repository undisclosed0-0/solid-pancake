/* ======================================================
   RPG CONDUCTOR BLOCK
   StoryNodes + State + StoryEngine
   (Combined into one file, but NOT merged)
   ====================================================== */

/* ---------- STORY NODES (wire 1) ---------- */
const STORY_NODES = {
  start: {
    id: "start",
    title: "The Forest at the Edge of Memory",
    text: [
      "Mist curls around your boots as you stand at the edge of a forest older than memory.",
      "Every tree leans inward, listening."
    ],
    exits: { n: "forest_path" },
    coords: { x: 0, y: 0 },
    startQuest: "echo_mark",
    factionAdjust: { f: "forest", d: +1 },
    triggerWords: ["whisper", "memory", "echo"],
    merchant: null,
    pvpToggle: false,
    encounter: null
  },

  forest_path: {
    id: "forest_path",
    title: "Whispering Path",
    text: [
      "The path narrows, branches knitting overhead.",
      "A wisp brushes your ear, but no one is there."
    ],
    exits: { s: "start" },
    coords: { x: 0, y: -1 },
    triggerWords: ["whisper"],
    encounter: { table: "forest_low", chance: 0.3 }
  }
};

/* ---------- STATE (wire 2) ---------- */
const State = (() => {
  let _s = {
    currentNodeId: "start",
    coords: { x: 0, y: 0 },
    flags: { conditions: [] },
    stats: { health: 10, insight: 0 }
  };

  return {
    get: () => _s,
    setCurrentNode(id) { _s.currentNodeId = id; },
    setCoords(x, y) { _s.coords = { x, y }; },
    setFlag(k, v) { _s.flags[k] = v; },
    adjustStat(k, d) { _s.stats[k] = (_s.stats[k] || 0) + d; }
  };
})();

/* ---------- STORY ENGINE (wire 3) ---------- */
const StoryEngine = (() => {

  const DIR = {
    n: { x: 0, y: -1 },
    s: { x: 0, y: 1 },
    e: { x: 1, y: 0 },
    w: { x: -1, y: 0 }
  };

  function getNode(id) {
    return STORY_NODES[id];
  }

  function getCurrentNode() {
    return getNode(State.get().currentNodeId);
  }

  function move(dir) {
    const node = getCurrentNode();
    const destId = node.exits[dir];

    if (!destId) {
      DisplayRack.LogRack.world(`You cannot go ${dir} from here.`);
      return;
    }

    // update state
    State.setCurrentNode(destId);

    const v = DIR[dir];
    const c = State.get().coords;
    State.setCoords(c.x + v.x, c.y + v.y);

    const newNode = getNode(destId);

    // RACK 2 — Systems
    SystemsRack.onNodeEntry(newNode);

    // RACK 3 — FX / Events
    FXRack.onNodeEntry(newNode);

    // RACK 4 — Display
    DisplayRack.renderNode(newNode);

    DisplayRack.LogRack.world(`You move ${dir} into ${newNode.title}.`);
  }

  function trigger(word) {
    const node = getCurrentNode();

    SystemsRack.onTrigger(word, node);
    FXRack.onTrigger(word, node);
  }

  return {
    getNode,
    getCurrentNode,
    move,
    trigger
  };

})();

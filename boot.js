// ======================================================
//BOOT SEQUENCE — THE MASTER ORCHESTRATOR
// ======================================================
const RPG = (() => {

  // ------------------------------------------------------
  // BOOT SEQUENCE
  // ------------------------------------------------------
  function boot() {
    LogRack.world("RPG booting…");

    // 1. Load initial node
    const node = StoryEngine.getCurrentNode();

    // 2. Systems Rack (Rack 2)
    SystemsRack.onNodeEntry(node);

    // 3. FX Rack (Rack 3)
    FXRack.onNodeEntry(node);

    // 4. Display Rack (Rack 4)
    DisplayRack.renderNode(node);

    // 5. Input Rack (Rack 1)
    InputRack.init();

    LogRack.world(`You awaken in ${node.title}.`);
  }

  // ------------------------------------------------------
  // MAIN LOOP (optional future expansion)
  // ------------------------------------------------------
  function loop() {
    // If you ever want real-time systems (weather, time, AI),
    // this is where they will go.
  }

  // ------------------------------------------------------
  // HARD RESET (admin only)
  // ------------------------------------------------------
  function reset() {
    LogRack.world("[RPG] Resetting game…");

    State.setCurrentNode("start");
    State.setCoords(0, 0);
    State.setFlag("conditions", []);

    const node = StoryEngine.getCurrentNode();

    SystemsRack.onNodeEntry(node);
    FXRack.onNodeEntry(node);
    DisplayRack.renderNode(node);

    LogRack.world("[RPG] Reset complete.");
  }

  // ------------------------------------------------------
  // PUBLIC API
  // ------------------------------------------------------
  return {
    boot,
    loop,
    reset
  };

})();

// ======================================================
// AUTO-START RPG
// ======================================================
window.addEventListener("DOMContentLoaded", () => {
  RPG.boot();
});





// ======================================================
// RACK 1 — INPUT (FULL DELUXE VERSION)
// ======================================================
const InputRack = (() => {

  // ======================================================
  // NORMALIZATION
  // ======================================================
  function normalize(raw) {
    return raw.trim().toLowerCase();
  }

  // ======================================================
  // MOVEMENT COMMANDS
  // ======================================================
  const MOVE_MAP = {
    "n": "n", "north": "n", "up": "n",
    "s": "s", "south": "s", "down": "s",
    "e": "e", "east": "e", "right": "e",
    "w": "w", "west": "w", "left": "w"
  };

  function handleMovement(cmd) {
    const dir = MOVE_MAP[cmd];
    if (!dir) return false;

    StoryEngine.move(dir);
    return true;
  }

  // ======================================================
  // TRIGGER WORDS
  // ======================================================
  function handleTriggerWord(cmd) {
    const node = StoryEngine.getCurrentNode();
    const triggers = node.triggerWords || [];

    if (triggers.includes(cmd)) {
      StoryEngine.trigger(cmd);
      SystemsRack.onTrigger(cmd, node);
      FXRack.onTrigger(cmd, node);
      return true;
    }

    return false;
  }

  // ======================================================
  // ACTION BUTTON COMMANDS
  // ======================================================
  function handleActionCommand(cmd) {
    const node = StoryEngine.getCurrentNode();
    const actions = node.actions || [];

    const found = actions.find(a => a.id === cmd);
    if (!found) return false;

    LogRack.world(`Action executed: ${cmd}`);
    StoryEngine.trigger(cmd);
    return true;
  }

  // ======================================================
  // ADMIN COMMANDS
  // ======================================================
  function handleAdmin(cmd) {
    if (!cmd.startsWith("/")) return false;

    AdminRack.handleAdminCommand(cmd);
    return true;
  }

  // ======================================================
  // COMPASS CLICKS
  // ======================================================
  function initCompass() {
    const el = document.querySelector("#compass");
    if (!el) return;

    el.addEventListener("click", e => {
      const dir = e.target.dataset.dir;
      if (!dir) return;
      StoryEngine.move(dir);
    });
  }

  // ======================================================
  // HOTKEYS (WASD + ARROWS)
  // ======================================================
  function initHotkeys() {
    window.addEventListener("keydown", e => {
      const key = e.key.toLowerCase();

      if (key === "w" || key === "arrowup") return StoryEngine.move("n");
      if (key === "s" || key === "arrowdown") return StoryEngine.move("s");
      if (key === "a" || key === "arrowleft") return StoryEngine.move("w");
      if (key === "d" || key === "arrowright") return StoryEngine.move("e");
    });
  }

  // ======================================================
  // MAIN INPUT HANDLER
  // ======================================================
  function handle(raw) {
    const cmd = normalize(raw);

    // admin commands
    if (handleAdmin(cmd)) return;

    // movement
    if (handleMovement(cmd)) return;

    // action buttons
    if (handleActionCommand(cmd)) return;

    // trigger words
    if (handleTriggerWord(cmd)) return;

    // fallback
    LogRack.world(`Unknown command: "${cmd}"`);
  }

  // ======================================================
  // INPUT FIELD INIT
  // ======================================================
  function initInputField() {
    const input = document.querySelector("#cmd-input");
    if (!input) return;

    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        handle(input.value);
        input.value = "";
      }
    });
  }

  // ======================================================
  // PUBLIC INIT
  // ======================================================
  function init() {
    initInputField();
    initCompass();
    initHotkeys();
  }

  // ======================================================
  // PUBLIC API
  // ======================================================
  return {
    init,
    handle
  };

})();

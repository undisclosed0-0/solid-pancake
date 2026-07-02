

// ======================================================
// RACK 4 — DISPLAY / MINI‑MAP / STATMAP (FULL DELUXE)
// ======================================================
const DisplayRack = (() => {

  // ======================================================
  // STORY PANEL
  // ======================================================
  function renderStory(node) {
    const el = document.querySelector("#story");
    if (!el || !node) return;

    const paragraphs = node.text.map(t => `<p>${t}</p>`).join("");

    el.innerHTML = `
      <h2>${node.title}</h2>
      ${paragraphs}
    `;
  }

  // ======================================================
  // VITALS PANEL
  // ======================================================
  function renderVitals() {
    const el = document.querySelector("#vitals");
    if (!el) return;

    const s = State.get().stats;
    const conditions = State.get().flags.conditions || [];

    el.innerHTML = `
      <div class="vital">HP: ${s.health}</div>
      <div class="vital">Insight: ${s.insight}</div>
      <div class="vital">Conditions: ${conditions.join(", ") || "None"}</div>
    `;
  }

  // ======================================================
  // STATMAP PANEL (flags, quests, factions)
  // ======================================================
  function renderStatmap() {
    const el = document.querySelector("#statmap");
    if (!el) return;

    const flags = State.get().flags;
    const quests = SystemsRack.QuestSystem.active;
    const factions = SystemsRack.FactionSystem.standings;

    const questList = [...quests].map(q => `<li>${q}</li>`).join("");
    const factionList = Object.entries(factions)
      .map(([f, s]) => `<li>${f}: ${s}</li>`)
      .join("");

    el.innerHTML = `
      <h3>Flags</h3>
      <pre>${JSON.stringify(flags, null, 2)}</pre>

      <h3>Active Quests</h3>
      <ul>${questList || "<li>None</li>"}</ul>

      <h3>Factions</h3>
      <ul>${factionList || "<li>No faction data</li>"}</ul>
    `;
  }

  // ======================================================
  // MINI‑MAP (SVG GRID)
  // ======================================================
  const visitedNodes = new Set();

  function renderMiniMap(node) {
    const el = document.querySelector("#minimap");
    if (!el || !node) return;

    visitedNodes.add(node.id);

    const { x, y } = node.coords || { x: 0, y: 0 };

    // Build a simple SVG grid
    const size = 20;
    const grid = [];

    for (let gy = -5; gy <= 5; gy++) {
      for (let gx = -5; gx <= 5; gx++) {
        const isPlayer = gx === x && gy === y;
        const isVisited = [...visitedNodes].some(id => {
          const n = StoryEngine.getNode(id);
          return n.coords.x === gx && n.coords.y === gy;
        });

        grid.push(`
          <rect x="${(gx + 5) * size}" 
                y="${(gy + 5) * size}" 
                width="${size}" height="${size}"
                fill="${isPlayer ? '#00ff00' : isVisited ? '#555' : '#222'}"
                stroke="#111" />
        `);
      }
    }

    el.innerHTML = `
      <svg width="240" height="240" viewBox="0 0 240 240">
        ${grid.join("")}
      </svg>
      <div class="minimap-label">(${x}, ${y}) — ${node.title}</div>
    `;
  }

  // ======================================================
  // ACTION BUTTONS (contextual)
  // ======================================================
  function renderActions(node) {
    const el = document.querySelector("#actions");
    if (!el || !node) return;

    const actions = node.actions || [];

    if (actions.length === 0) {
      el.innerHTML = `<div class="no-actions">No actions available</div>`;
      return;
    }

    el.innerHTML = actions
      .map(a => `<button class="action-btn" data-act="${a.id}">${a.label}</button>`)
      .join("");

    el.querySelectorAll(".action-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.act;
        LogRack.world(`Action: ${id}`);
        StoryEngine.trigger(id);
      });
    });
  }

  // ======================================================
  // WORLD LOG PANEL
  // ======================================================
  const LogRack = (() => {
    const lines = [];
    function world(msg) {
      lines.push(msg);
      const el = document.querySelector("#log");
      if (el) el.innerHTML = lines.map(l => `<div>${l}</div>`).join("");
    }
    return { world };
  })();

  // ======================================================
  // MASTER RENDER FUNCTION
  // ======================================================
  function renderNode(node) {
    renderStory(node);
    renderVitals();
    renderStatmap();
    renderMiniMap(node);
    renderActions(node);
  }

  // ======================================================
  // PUBLIC API
  // ======================================================
  return {
    renderNode,
    renderStory,
    renderVitals,
    renderStatmap,
    renderMiniMap,
    renderActions,
    LogRack
  };

})();

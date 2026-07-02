


  <!DOCTYPE html>



<html lang="en">




<head>
<script>
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.location.href = "https://4thworldwide.blogspot.com/2026/06/tutorial.html";
  }
</script>
<script>
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.location.href = "https://4thworldwide.blogspot.com/2026/06/tutorial.html";
  }
</script>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">


  <meta charset="UTF-8" />



  <title>RPG Control Center</title>



  <style>



    body {



      margin: 0;



     background: rgba(5, 3, 8, 0.2);




      color: #f5f0ff;



      font-family: "Georgia", serif;



      overflow-x: hidden;
  overflow-y: auto;



    }














   #app {
  position: relative;
  z-index: 1;

  /* Theatrical glass panel */
  background: rgba(8, 6, 16, 0.35);
backdrop-filter: blur(16px);
       /* ← glass effect */
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(190,160,255,0.35);
  border-radius: 12px;

  box-shadow: 0 0 60px rgba(0,0,0,0.8);


  padding: 1.5rem 2rem;
  max-width: 1100px;
  margin: 2rem auto;
     padding-bottom: 80px;
}








    #header {



      display: flex;



      justify-content: space-between;



      align-items: baseline;



    }







    #game-title {



      font-size: 1.4rem;



      letter-spacing: 0.12em;



      text-transform: uppercase;



    }







    #header-meta {



      font-size: 0.8rem;



      opacity: 0.8;



    }







    #header-meta span + span {



      margin-left: 0.75rem;



    }







    /* STORY / WORLD FEED */



    #story-feed {



      min-height: 150px;



      max-height: 220px;



      overflow-y: auto;



      padding: 0.75rem 0.9rem;



      border-radius: 8px;



      background: radial-gradient(circle at top left, rgba(40, 30, 70, 0.7), rgba(10, 8, 20, 0.95));



      box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.8);



      font-size: 0.95rem;



      line-height: 1.6;



    }







    #story-feed h2 {



      margin: 0 0 0.4rem;



      font-size: 1rem;



      letter-spacing: 0.08em;



      text-transform: uppercase;



      opacity: 0.9;



    }







    #story-feed p {



      margin: 0 0 0.4rem;



    }







    /* MID ROW: COMPASS + VITALS */



    #mid-row {



      display: grid;



      grid-template-columns: 1.1fr 1.2fr;



      gap: 0.75rem;



    }







    #compass-panel,



    #vitals-panel {



      padding: 0.6rem 0.75rem;



      border-radius: 8px;



      background: rgba(12, 10, 24, 0.95);



      font-size: 0.85rem;



    }







    #compass-title,



    #vitals-title {



      font-size: 0.8rem;



      letter-spacing: 0.12em;



      text-transform: uppercase;



      opacity: 0.8;



      margin-bottom: 0.35rem;



    }







    #compass-grid {



      display: grid;



      grid-template-columns: repeat(3, 1fr);



      gap: 0.1rem;



      margin-top: 0.25rem;



      font-family: "Courier New", monospace;



    }







    .compass-cell {



      height: 1.4rem;



      display: flex;



      align-items: center;



      justify-content: center;



      opacity: 0.7;



    }







    .compass-dir {



      font-weight: bold;



    }







    .compass-current {



      color: #c9b3ff;



      text-shadow: 0 0 6px rgba(200, 180, 255, 0.9);



      opacity: 1;



    }







    .compass-last {



      color: #7f6aa8;



      opacity: 0.9;



    }







    #compass-text {



      margin-top: 0.35rem;



      opacity: 0.8;



      min-height: 1.2rem;



    }







    #vitals-list {



      list-style: none;



      padding: 0;



      margin: 0.1rem 0 0;



    }







    #vitals-list li {



      margin-bottom: 0.15rem;



    }







    #vitals-list span.value {



      font-weight: bold;



      color: #e4d4ff;



    }







    /* ACTION LOG / BOARD */



    #log-panel {



      padding: 0.6rem 0.75rem;



      border-radius: 8px;



      background: rgba(10, 8, 20, 0.96);



      font-size: 0.85rem;



      display: flex;



      flex-direction: column;



      min-height: 160px;



      max-height: 260px;



    }







    #log-header {



      display: flex;



      justify-content: space-between;



      align-items: baseline;



      margin-bottom: 0.25rem;



    }







    #log-title {



      font-size: 0.8rem;



      letter-spacing: 0.12em;



      text-transform: uppercase;



      opacity: 0.8;



    }







    #log-tabs {



      font-size: 0.75rem;



      opacity: 0.7;



    }







    #log-tabs span {



      cursor: pointer;



      margin-left: 0.5rem;



    }







    #log-tabs span.active {



      color: #e4d4ff;



      text-decoration: underline;



      opacity: 1;



    }







    #log-body {



      flex: 1;



      overflow-y: auto;



      margin-top: 0.25rem;



      padding-right: 0.25rem;



    }







    .log-line {



      margin-bottom: 0.15rem;



      white-space: pre-wrap;



    }







    .log-line.system {



      color: #9b8ad8;



    }







    .log-line.command {



      color: #c0ffc0;



    }







    .log-line.world {



      color: #f0e4ff;



    }







    .log-line.board {



      color: #ffd9a0;



    }







    /* COMMAND CONSOLE */



    #console-panel {



      margin-top: 0.12rem;



      padding-top: 0.4rem;



      border-top: 1px solid rgba(120, 100, 190, 0.4);



      display: flex;



      align-items: center;



      gap: 0.3rem;



      font-family: "Courier New", monospace;



      font-size: 0.9rem;



    }







    #console-label {



      color: #9b8ad8;



    }







    #console-input {



      flex: 1;



      background: rgba(8, 6, 16, 0.95);



      border-radius: 4px;



      border: 1px solid rgba(150, 130, 230, 0.6);



      color: #f5f0ff;



      padding: 0.35rem 0.5rem;



      outline: none;



      box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);



    }







    #console-input:focus {



      box-shadow: 0 0 12px rgba(180, 150, 255, 0.8);



    }







    #console-hint {



      font-size: 0.75rem;



      opacity: 0.7;



      margin-left: 0.25rem;



    }







    /* OVERLAY (MASTER/ADMIN, EASTER EGGS) */



    #overlay {



      position: fixed;



      inset: 0;



      background: rgba(0, 0, 0, 0.7);



      z-index: 10;



    }







    .hidden {



      display: none;



    }







    .panel {



      position: absolute;



      background: rgba(10, 5, 25, 0.97);



      color: #fff;



      padding: 1rem;



      border-radius: 8px;



      box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);



      max-width: 480px;



      font-size: 0.9rem;



    }







    .panel h3 {



      margin-top: 0;



      margin-bottom: 0.4rem;



      font-size: 1rem;



      letter-spacing: 0.08em;



      text-transform: uppercase;



    }







    .panel button {



      margin-top: 0.4rem;



      display: inline-block;



      padding: 0.3rem 0.6rem;



      border-radius: 4px;



      border: none;



      background: #3b2b4f;



      color: #f5f0ff;



      cursor: pointer;



      font-size: 0.8rem;



    }







    .glow {



      animation: subtleGlow 2s infinite alternate;



    }







    @keyframes subtleGlow {



      from {



        box-shadow: 0 0 10px rgba(150, 120, 255, 0.3);



      }



      to {



        box-shadow: 0 0 25px rgba(150, 120, 255, 0.7);



      }



    }







    @keyframes floatParticle {



      from {



        transform: translateY(0px);



        opacity: 0.3;



      }



      to {



        transform: translateY(-20px);



        opacity: 0.8;



      }



    }







    @media (max-width: 900px) {



      #app {



        margin: 0.5rem;



        height: calc(100dvh - 1rem);



      }



      #mid-row {



        grid-template-columns: 1fr;



      }



    }



    
    /* FULL-PAGE CINEMATIC BACKGROUND */
#scene {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at center, #1a1128 0%, #05030a 50%, #000 100%);
  transition: filter 1.5s ease, transform 1.5s ease, background 1.5s ease;
}

/* fog */
.scene-fog {
  background: radial-gradient(circle at center, #222 0%, #050509 50%, #000 100%);
  animation: fogDrift 18s linear infinite;
  filter: brightness(0.7) blur(6px);
}
@keyframes fogDrift {
  from { transform: translateX(-4%) translateY(2%); }
  to   { transform: translateX(4%) translateY(-2%); }
}

/* fire */
.scene-fire {
  background: radial-gradient(circle at center, #3b0000 0%, #120000 50%, #000 100%);
  animation: firePulse 6s ease-in-out infinite;
  filter: brightness(1.8) saturate(2.8) blur(4px);
}
@keyframes firePulse {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.05); }
}

/* rain */
.scene-rain {
  background:
    repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px),
    radial-gradient(circle at top, #0b1b2f 0%, #02060b 60%, #000 100%);
  animation: rainFall 1.2s linear infinite;
  filter: brightness(0.9) saturate(0.9) blur(3px);
}
@keyframes rainFall {
  from { background-position: 0 0, 0 0; }
  to   { background-position: 0 80px, 0 0; }
}

/* snow */
.scene-snow {
  background:
    radial-gradient(circle, rgba(255,255,255,0.4) 0, transparent 40px),
    radial-gradient(circle at top, #1b2333 0%, #050814 60%, #000 100%);
  background-size: 120px 120px, cover;
  animation: snowDrift 10s linear infinite;
  filter: brightness(2.1) blur(4px);
}
@keyframes snowDrift {
  from { background-position: 0 0, 0 0; }
  to   { background-position: 0 200px, 0 0; }
}

/* arcane */
.scene-arcane {
  background: radial-gradient(circle at center, #3b0b5f 0%, #12021f 50%, #000 100%);
  animation: arcaneSpin 14s linear infinite;
  filter: hue-rotate(280deg) saturate(2.5) brightness(1.5) blur(4px);
}
@keyframes arcaneSpin {
  from { transform: rotate(0deg) scale(1.02); }
  to   { transform: rotate(360deg) scale(1.02); }
}

/* rune */
.scene-rune {
  background:
    radial-gradient(circle at center, rgba(120,180,255,0.25) 0, transparent 50%),
    repeating-linear-gradient(90deg, rgba(80,120,200,0.25) 0, rgba(80,120,200,0.25) 1px, transparent 1px, transparent 20px),
    repeating-linear-gradient(0deg, rgba(80,120,200,0.25) 0, rgba(80,120,200,0.25) 1px, transparent 1px, transparent 20px),
    #02030a;
  animation: runeGlow 8s ease-in-out infinite;
  filter: brightness(1.3) saturate(1.8) blur(3px);
}
@keyframes runeGlow {
  0%,100% { opacity: 0.5; }
  50%     { opacity: 1; }
}

/* storm */
.scene-storm {
  background:
    repeating-linear-gradient(to bottom, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 4px),
    radial-gradient(circle at top, #1b2438 0%, #050814 60%, #000 100%);
  animation: stormFlash 1.4s ease-out infinite;
  filter: brightness(1.4) contrast(1.9) blur(4px);
}
@keyframes stormFlash {
  0%,100% { opacity: 0.7; }
  10%     { opacity: 1; }
  20%     { opacity: 0.4; }
  40%     { opacity: 0.9; }
}

/* frost */
.scene-frost {
  background:
    radial-gradient(circle, rgba(200,230,255,0.5) 0, transparent 45px),
    radial-gradient(circle at center, #0b1f33 0%, #02060c 60%, #000 100%);
  background-size: 140px 140px, cover;
  animation: frostCreep 12s linear infinite;
  filter: brightness(2) hue-rotate(200deg) saturate(1.8) blur(5px);
}
@keyframes frostCreep {
  from { background-position: 0 0, 0 0; }
  to   { background-position: 0 180px, 0 0; }
}

/* shadow */
.scene-shadow {
  background: radial-gradient(circle at center, #050505 0%, #000 70%);
  animation: shadowPulse 10s ease-in-out infinite;
  filter: brightness(0.25) grayscale(1) blur(4px);
}
@keyframes shadowPulse {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.03); }
}
/* FORCE ALL PANELS TO BE TRANSLUCENT */
#app,
.panel {
  background: rgba(8, 6, 16, 0.25) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

/* REMOVE ANY DARK OVERLAYS */
#background-layer,
#overlay,
.background,
.bg {
  background: transparent !important;
}

/* Universal fade-out for all scenes */
.scene-fade {
  animation: sceneFadeOut 1.5s ease forwards;
}

@keyframes sceneFadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}

    
    
    
    #glyphs {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  background-image: url('glyphs.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: glyphPulse 6s ease-out forwards;
}

@keyframes glyphPulse {
  0%   { opacity: 0; transform: scale(0.8); }
  20%  { opacity: 1; transform: scale(1); }
  80%  { opacity: 1; }
  100% { opacity: 0; transform: scale(1.2); }
}

    
    #flash {
  position: fixed;
  inset: 0;
  background: white;
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
}

.flash-on {
  animation: flashPulse 0.4s ease-out;
}

@keyframes flashPulse {
  0%   { opacity: 0; }
  40%  { opacity: 1; }
  100% { opacity: 0; }
}

    
    
    #char1 {
  position: absolute;
  top: 40%;
  left: 60%;
  width: 220px;
  pointer-events: none; /* so it doesn't block clicks */
}

    
    #char1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;       /* can be changed dynamically */
  transform: translate(-50%, -50%);
  pointer-events: none;
}

    
    video {
  width: 240px;
  opacity: 0;
}

    /* --- Responsive map + mobile-friendly behavior --- */
/* Map container expected: #mapViewport (or adjust selector if different) */
/* If your map uses a different id, replace #mapViewport and #mapSvg accordingly. */

.map-panel-toggle {
  display: none;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
}
.map-panel-toggle button {
  background: rgba(255,255,255,0.04);
  color: inherit;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

/* Ensure map area is a stable panel that doesn't force page resize */
#mapCard, #mapViewport, #mapSvg {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

/* Default map card sizing (side column on wide screens) */
#mapCard {
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 140px); /* keeps map visible without resizing page */
  min-height: 300px;
  border-radius: 10px;
  overflow: auto;;
  background: linear-gradient(180deg,#07121a,#041018);
  border: 6px solid rgba(255,255,255,0.03);
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
}

/* Map viewport area */
#mapViewport {
  flex: 1 1 auto;
  touch-action: none; /* enable pointer events for pinch/drag */
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

/* Small screens: map becomes collapsible and sits below main panels */
@media (max-width: 980px) {
  .map-panel-toggle { display:flex; }
  #mapCard { height: 320px; min-height: 220px; }
  /* when hidden, keep it removed from flow */
  #mapCard.hidden { display: none !important; }
}

/* Make POIs tappable (if using .poi class) */
.poi { pointer-events: all; cursor: pointer; }

/* Small visual hint for scale */
#mapScale { font-weight:700; color: #dfeff6; }

/* Prevent certificate/panels from resizing the page: make them scrollable */
#app { max-height: calc(100dvh - 40px);
  overflow-y: auto; -webkit-overflow-scrolling: touch; }

/* Focus states for accessibility */
button:focus { outline: 3px solid rgba(255,255,255,0.12); outline-offset: 2px; border-radius: 8px; }

 
  </style>
 <style>
    /* Minimal modal styles */
    .hidden { display: none !important; }
    #cutscene-modal {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.85);
      z-index: 9999;
      padding: 20px;
    }
    #cutscene-frame {
      width: 100%;
      max-width: 1100px;
      position: relative;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
    }
    #cutscene-video {
      width: 100%;
      height: auto;
      display: block;
      background: #000;
    }
    #mobile-play-overlay {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      padding: 12px 18px;
      font-size: 18px;
      border-radius: 8px;
      background: rgba(0,0,0,0.6);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.12);
      cursor: pointer;
      z-index: 3;
      display: none;
    }
    #cutscene-close {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 4;
      background: rgba(0,0,0,0.6);
      color: #fff;
      border: none;
      padding: 6px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
    /* small responsive tweak */
    @media (max-width:600px) {
      #cutscene-frame { max-width: 95%; }
      #mobile-play-overlay { font-size: 16px; padding: 10px 14px; }
    }
   
   
   #map-container {
  width: 100%;
  max-width: 600px;
  height: auto;
  aspect-ratio: 1 / 1;
}
#rpg-root {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
#map {
  width: 100%;
  height: auto;
  object-fit: contain;
}
font-size: clamp(12px, 2vw, 18px);

   
   #map-wrapper {
  width: 100%;
  max-width: 420px;   /* GBA-sized */
  margin: 0 auto;
  padding: 10px;
}
#map-container {
  width: 100%;
  aspect-ratio: 1 / 1;   /* keeps it square */
  max-height: 60vh;      /* prevents fullscreen takeover */
  object-fit: contain;
}
#map-toggle {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999999;
}
@media (max-width: 700px) {
  #mapCard,
  #mapViewport,
  #map-toggle,
  #map-vitals-panel,
  #full-map-overlay {
    display: none !important;
  }
}

  </style>


</head>



<body>



  <div id="scene"></div>
<div id="fog-layer"></div>


<div id="glyphs"></div>

<div id="flash"></div>





  <div id="app">



    <header id="header">



      <div id="game-title">Whispers of the Realm</div>



      <div id="header-meta">



        <span id="meta-location">Unknown Forest</span>



        <span id="meta-time">Nightfall</span>



      </div>



    </header>







    <section id="story-feed">



      <h2 id="story-title">The Forest at the Edge of Memory</h2>



      <div id="story-body"></div>



    </section>







    <section id="mid-row">


<div id="compass-panel">

  <div id="compass-title">Direction</div>

  <div id="compass-grid">

    <!-- Row 1 -->
    <div class="compass-cell compass-dir" data-dir="NW">NW</div>
    <div class="compass-cell compass-dir" data-dir="N">N</div>
    <div class="compass-cell compass-dir" data-dir="NE">NE</div>

    <!-- Row 2 -->
    <div class="compass-cell compass-dir" data-dir="W">W</div>
    <div class="compass-cell" id="compass-center">✦</div>
    <div class="compass-cell compass-dir" data-dir="E">E</div>

    <!-- Row 3 -->
    <div class="compass-cell compass-dir" data-dir="SW">SW</div>
    <div class="compass-cell compass-dir" data-dir="S">S</div>
    <div class="compass-cell compass-dir" data-dir="SE">SE</div>

  </div>

  <div id="compass-text"></div>

</div>







      <div id="vitals-panel">



        <div id="vitals-title"></div>



        <ul id="vitals-list">




        </ul>



      </div>



    </section>







    <section id="log-panel">



      <div id="log-header">



        <div id="log-title">Action Log</div>



        <div id="log-tabs">



          <span data-tab="log" class="active">log</span>



          <span data-tab="board">board</span>



        </div>



      </div>



      <div id="log-body"></div>



    </section>







    <section id="console-panel">



      <div id="console-label">&gt;</div>



      <input id="console-input" type="text" autocomplete="off" spellcheck="false" />



      <div id="console-hint">Type "help" for commands</div>



    </section>


  </div>
<!-- Cinematic Fade Overlay 
<div id="cinematic-overlay">
  <video id="cinematic-video" autoplay muted playsinline></video>
  <div id="cinematic-playcue">Press Enter to Play</div>
</div>

<!-- Spy Gadget Modal 
<div id="spy-modal">
  <div id="spy-frame">
    <video id="spy-video" autoplay muted playsinline></video>
    <button id="spy-close">Close</button>
  </div>
</div>-->


<!-- Example trigger button (your unified trigger will call handleTrigger(word)) -->
  <button id="open-cutscene" data-url="https://archive.org/download/THE_STRANGLERS_Golden_Brown_1981/THE_STRANGLERS_Golden_Brown_1981.mp4">Play Cutscene (test)</button>

  <!-- Modal HTML (primary) -->
  <div id="cutscene-modal" class="hidden" aria-hidden="true" role="dialog" aria-label="Cutscene">
    <div id="cutscene-frame">
      <video id="cutscene-video"
             poster="https://archive.org/download/THE_STRANGLERS_Golden_Brown_1981/thumbnail.jpg"
             data-src=""
             data-fallback=""
             controls playsinline webkit-playsinline></video>

      <div id="mobile-play-overlay" aria-hidden="false">Tap to Play</div>
      <button id="cutscene-close" aria-label="Close cutscene">✕</button>
    </div>
  </div>

<video id="char1" src="https://preview-downloads.customer.envatousercontent.com/files/98254466-cf29-4a10-a228-7882eeff9372/video_preview_h264.mp4" autoplay loop muted playsinline></video>
<video id="walk" src="walk.webm" autoplay loop muted></video>
<video id="attack" src="attack.webm" autoplay loop muted></video>
<video id="cast" src="cast.webm" autoplay loop muted></video>

<!-- Local file -->
<video id="vid-summon" src="videos/summon.webm" autoplay loop muted playsinline></video>

<!-- URL (CDN, S3, etc.) -->
<video id="vid-giant" src="https://www.bing.com/videos/riverview/relatedvideo?q=fir+mp3&&mid=DD45AC4021F94A3705B5DD45AC4021F94A3705B5&churl=https%3a%2f%2fwww.youtube.com%2fchannel%2fUCOn8zDM533kqzhIA8c3NFbQ&FORM=VRDGARm" autoplay loop muted playsinline></video>

<!-- Another animation -->
<video id="vid-tiny" src="https://cdn.example.com/tiny.webm" autoplay loop muted playsinline></video>

<iframe id="audio-bank-frame" src="https://4thworldwide.blogspot.com/2026/06/audiobank.html" style="display:none;"></iframe>

  
  <div id="overlay" class="hidden"></div>







  <script>



/* ============================================================

   Consolidated Drop-in Script (Complete)

   - Hardwired STORY_NODES (coords + actions supported)

   - Non-blocking mini map + full map overlay (shared visited history)

   - Nodes reveal only when visited or adjacent

   - Fixed, scrollable action log

   - Action buttons, accessibility popups, Master/Admin, hotkeys

   - Pan/zoom for full map overlay

   Paste entire script into your page (replace old script).

   ============================================================ */
/* ============================================================
   FULL RPG MODULE — Self-contained
   ============================================================ */

/* ---------------------------
   Core State, Log, Systems
   --------------------------- */
// (State, Log, Quests, Factions, Merchants, RandomLoad, PvP)
// ... [same as in the assembled module I gave you earlier] ...

/* ---------------------------
   WORLD DATA: STORY_NODES + GLOBAL_EVENTS
   --------------------------- */
const STORY_NODES = {
  start: {
    id: "start",
    title: "The Forest at the Edge of Memory",
    dir: "N",
    coords: { x: 0, y: 0 },
    text: [
      "Mist curls around your boots as you stand at the edge of a forest that feels older than memory itself.",
      "Every tree leans inward, listening. Somewhere deeper within, something waits for you."
    ],
    exits: { north: "forest_path", south: "village_return" },
    easterEggTrigger: "forest_whisper",
    actions: [
      { label: "Step North", command: "north" },
      { label: "Listen", effect: { insight: 1 }, resultText: "You hear a whisper." }
    ]
  },
  forest_path: {
    id: "forest_path",
    title: "Whispering Path",
    dir: "N",
    coords: { x: 0, y: -1 },
    text: [
      "The path narrows, branches knitting overhead. A wisp brushes your ear, but no one is there.",
      "You feel watched, but not alone."
    ],
    exits: { north: "forest_wall", east: "whisper_clearing", south: "start" },
    triggerWords: ["whisper", "memory", "echo"]
  },
  whisper_clearing: {
    id: "whisper_clearing",
    title: "Clearing of Echoes",
    dir: "E",
    coords: { x: 1, y: -1 },
    text: [
      "You step into a clearing where the mist hangs like torn veils.",
      "In the center, a stone stands, carved with your name."
    ],
    actions: [
      { label: "Touch the stone", command: "touch stone" },
      { label: "Step back", command: "step back" },
      { label: "Listen closely", effect: { insight: 1 }, resultText: "A small truth settles in your mind." }
    ],
    exits: { west: "forest_path", north: "end_marked", south: "fallen" },
    triggerWords: ["rain", "memory", "echo"],
    startQuest: "echo_mark",
    factionAdjust: { f: "forest", d: +1 },
    randomEncounter: false
  },
  // ... all other nodes from your world data (fallen, example_node, deep_grove, etc.) ...
};

const GLOBAL_EVENTS = {
  easterEggs: {
    forest_whisper: {
      id: "forest_whisper",
      title: "The Whisper Knows Your Name",
      text: [
        "A voice, soft as falling ash, speaks your name.",
        "\"You are not supposed to be here,\" it says. \"But since you are...\""
      ],
      choices: [
        { id: "accept_gift", label: "Accept whatever the whisper offers.", effects: { insight: 2, "flag:whisper_marked": true } },
        { id: "refuse_gift", label: "Refuse and demand answers.", effects: { health: 1, "flag:whisper_defiant": true } }
      ],
      oneTime: true
    }
  }
};

/* ---------------------------
   TRIGGERS MAP
   --------------------------- */
const TRIGGERS = {
  rain: { type: "fx", scene: "scene-rain", duration: 6000, sound: "snd-rain" },
  fog:  { type: "fx", scene: "scene-fog",  duration: 6000, sound: "snd-fog" },
  firecombo: { type: "fx", scene: "scene-fire", duration: 9000, delay: 2000, sound: "snd-fire" },
  close: { type: "fx", scene: "", sound: "snd-close" },
  loopfire: { type: "cloop", fx: "fire_start", times: 5, gap: 2000 },
  fire: { type: "event", eventId: "fire" },
  ffire: { type: "event", eventId: "fire_sequence" },
  fire_start: { type: "fx", scene: "scene-fire", duration: 9000, sound: "snd-fire" },
  fire_mid: { type: "fx", scene: "scene-fire", duration: 9000, delay: 9000 },
  fire_end: { type: "fx", scene: "scene-fog", duration: 9000, delay: 18000 },
  intel: {
    type: "cutscene",
    delay: 10000,
    trigger: {
      url: "https://archive.org/download/THE_STRANGLERS_Golden_Brown_1981/THE_STRANGLERS_Golden_Brown_1981.mp4",
      title: "Giant Awakens",
      desc: "The ground trembles... something ancient stirs.",
      outroText: "Prepare yourself.",
      intro: true,
      outro: true,
      theme: "noir",
      outroBranch: "reward",
      introLogo: "images/intel_logo.png",
      introBg: "https://fixthephoto.com/images/newpl_gallery/1616750426.jpg"
    }
  },
  crater: {
    type: "cutscene",
    delay: 60000,
    trigger: {
      url: "https://cdn.pixabay.com/video/2015/08/11/306-135919105_large.mp4",
      title: "The Giant",
      desc: "A massive presence looms.",
      outroText: "Stay alert.",
      intro: true,
      outro: true,
      outroBranch: "reward",
      introLogo: "https://static.vecteezy.com/system/resources/thumbnails/045/368/417/small_2x/laugh-cartoon-face-expression-png.png",
      introBg: "https://fixthephoto.com/images/newpl_gallery/1616750426.jpg"
    }
  },
  whisper: {
    type: "cutscene",
    trigger: {
      url: "https://cdn.pixabay.com/video/2026/04/01/343802_large.mp4",
      title: "Whisper",
      desc: "A voice calls from the dark.",
      outroText: "Listen closely.",
      intro: true,
      outro: true
    }
  },
  echo: { type: "event", eventId: "forest_whisper" }
};

/* ---------------------------
   Rest of module
   --------------------------- */
// (StoryEngine, Commands, MapPanel, Compass, Vitals, Accessibility, Master/Admin, Hotkeys, etc.)
// ... [same as in the assembled module I gave you earlier] ...


/* ============================================================
   MERGED GAME MODULE
   (assembled from provided segments; duplicates removed;
    only necessary pieces included and wired together)
   ============================================================ */

/* ---------------------------
   Lightweight Systems
   --------------------------- */
const Log = (() => {
  const bodyEl = document.getElementById("log-body");
  let activeTab = "log";
  let logLines = [];
  let boardLines = [];

  function ensureLogStyle() {
    if (!bodyEl) return;
    bodyEl.style.maxHeight = "220px";
    bodyEl.style.overflowY = "auto";
    bodyEl.style.boxSizing = "border-box";
  }

  function render() {
    ensureLogStyle();
    if (!bodyEl) return;
    bodyEl.innerHTML = "";
    const lines = activeTab === "log" ? logLines : boardLines;
    lines.forEach(line => {
      const div = document.createElement("div");
      div.classList.add("log-line", line.type);
      div.textContent = line.text;
      bodyEl.appendChild(div);
    });
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function add(type, text) {
    const line = { type, text };
    logLines.push(line);
    if (logLines.length > 400) logLines.shift();
    if (activeTab === "log") render();
  }

  function addBoard(text) {
    boardLines.push({ type: "board", text });
    if (boardLines.length > 200) boardLines.shift();
    if (activeTab === "board") render();
  }

  if (document.getElementById("log-tabs")) {
    document.getElementById("log-tabs").addEventListener("click", (e) => {
      const tab = e.target.getAttribute("data-tab");
      if (!tab) return;
      activeTab = tab;
      document.getElementById("log-tabs").querySelectorAll("span").forEach(s => s.classList.remove("active"));
      e.target.classList.add("active");
      render();
    });
  }

  return {
    addSystem: (t) => { add("system", t); },
    addCommand: (t) => { add("command", t); },
    addWorld: (t) => { add("world", t); },
    addBoard: (t) => { addBoard(t); },
    render
  };
})();

/* ---------------------------
   Core State
   --------------------------- */
const State = (() => {
  let state = {
    currentNodeId: "start",
    stats: { health: 10, stamina: 100, insight: 3, maxInsight: 20, strength: 1, intelligence: 2, dexterity: 3 },
    flags: {},
    usedEasterEggs: [],
    lastDirection: null,
    currentDirection: "N",
    inventory: [],
    equipment: {},
    boardPosts: [],
    _visitedNodes: {}
  };

  function get() { return state; }

  function setNode(id) {
    state.currentNodeId = id;
    const node = STORY_NODES[id];
    if (node && node.dir) state.currentDirection = node.dir;
  }

  function setDirectionFromMove(dir) {
    state.lastDirection = state.currentDirection;
    state.currentDirection = dir;
  }

  function applyEffects(effects = {}) {
    Object.entries(effects).forEach(([key, value]) => {
      if (key.startsWith("flag:")) {
        state.flags[key.split(":")[1]] = value;
        return;
      }
      if (key === "stats" && typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          if (typeof state.stats[k] !== "number") state.stats[k] = 0;
          state.stats[k] += Number(v || 0);
        });
        return;
      }
      if (key === "inventory" && Array.isArray(value)) {
        state.inventory = state.inventory || [];
        value.forEach(item => state.inventory.push(item));
        if (window.renderItems) window.renderItems();
        if (window.renderOverview) window.renderOverview();
        return;
      }
      if (key === "equipment" && typeof value === "object") {
        state.equipment = state.equipment || {};
        Object.entries(value).forEach(([slot, item]) => { state.equipment[slot] = item; });
        if (window.renderEquipment) window.renderEquipment();
        if (window.renderOverview) window.renderOverview();
        return;
      }
      if (state.stats && Object.prototype.hasOwnProperty.call(state.stats, key)) {
        if (typeof state.stats[key] !== "number") state.stats[key] = 0;
        state.stats[key] += Number(value || 0);
        return;
      }
      // fallback: set top-level
      state[key] = value;
    });
  }

  function markEggUsed(id) {
    if (!state.usedEasterEggs.includes(id)) state.usedEasterEggs.push(id);
  }

  function save() {
    try { localStorage.setItem("rpgControlState", JSON.stringify(state)); } catch (e) {}
    Log.addSystem("Game saved.");
    Log.render();
  }

  function load() {
    try {
      const saved = localStorage.getItem("rpgControlState");
      if (saved) { state = JSON.parse(saved); Log.addSystem("Game loaded."); Log.render(); }
      else { Log.addSystem("No saved game found."); Log.render(); }
    } catch (e) { Log.addSystem("Failed to load save."); Log.render(); }
  }

  return { get, setNode, setDirectionFromMove, applyEffects, markEggUsed, save, load, setCurrentNode: setNode };
})();

/* ---------------------------
   World Data (trimmed to provided nodes)
   --------------------------- */
const STORY_NODES = (function(){
  // (Use the provided STORY_NODES block; trimmed here for brevity in this view)
  // In the assembled module this object is the full node map from the provided segments.
  return window.__STORY_NODES__ || {}; // placeholder: real data injected below
})();

/* ---------------------------
   Simple Quest / Faction / Merchant / Random / PvP systems
   --------------------------- */
const Quests = (() => {
  const active = {};
  return {
    start(id, data = {}) { active[id] = data; Log.addSystem(`Quest started: ${id}`); Log.render(); },
    complete(id) { delete active[id]; Log.addSystem(`Quest completed: ${id}`); Log.render(); },
    active
  };
})();

const Factions = (() => {
  const standings = {};
  return { adjust(f, d) { standings[f] = (standings[f] || 0) + d; Log.addSystem(`Faction ${f} adjusted by ${d}`); Log.render(); }, standings };
})();

const Merchants = (() => {
  const merchants = {};
  return {
    spawn(name, inv = []) { merchants[name] = { name, inventory: inv }; Log.addSystem(`Merchant ${name} spawned.`); Log.render(); },
    trade(m, i) { Log.addWorld(`You trade with ${m} for ${i}.`); Log.render(); },
    merchants
  };
})();

const RandomLoad = (() => {
  return {
    rollEncounter(nodeId) {
      const r = Math.random();
      if (r < 0.4) Log.addWorld("A wandering trader passes by.");
      else if (r < 0.7) Log.addWorld("You hear distant howls.");
      else Log.addWorld("The wind brings a strange scent.");
      Log.render();
    }
  };
})();

const PvP = (() => {
  let enabled = false;
  return {
    toggle() { enabled = !enabled; Log.addSystem(`PvP ${enabled ? "enabled" : "disabled"}`); Log.render(); },
    joinArena(p) { if (!enabled) { Log.addWorld("PvP is disabled."); Log.render(); return; } Log.addWorld(`${p} joins the arena.`); Log.render(); },
    get enabled() { return enabled; }
  };
})();

/* ---------------------------
   Unified Trigger Map + Handler
   --------------------------- */
const TRIGGERS = (function(){
  // (Use the provided TRIGGERS object; in the assembled module the full map is included)
  return window.__TRIGGERS__ || {};
})();

function handleTrigger(word) {
  const t = TRIGGERS[word];
  if (!t) return false;
  const delay = typeof t.delay === "number" ? t.delay : 0;
  const run = () => {
    switch (t.type) {
      case "fx":
        if (typeof playScene === 'function') { try { playScene(t.scene, t.duration); } catch (e) {} }
        if (typeof runFXDescriptor === 'function') runFXDescriptor(t);
        else if (t.sound && typeof playSound === 'function') playSound(t.sound);
        break;
      case "cutscene":
        fadeToBlack(() => summonCutscene(t.trigger));
        break;
      case "event":
        if (t.eventId === "fire_sequence") {
          handleTrigger("fire_start"); handleTrigger("fire_mid"); handleTrigger("fire_end");
        } else if (t.eventId === "fire") {
          handleTrigger("fire_start"); handleTrigger("fire_mid"); handleTrigger("fire_end");
          setTimeout(() => { cloopFX("fire_start", 4, 2000); }, 18000);
        } else if (typeof StoryEngine !== "undefined" && StoryEngine && typeof StoryEngine.triggerEvent === "function") {
          StoryEngine.triggerEvent(t.eventId);
        }
        break;
      case "cloop":
        if (t.fx) cloopFX(t.fx, t.times, t.gap);
        if (t.sound) cloopSound(t.sound, t.times, t.gap, t.duration);
        break;
    }
  };
  if (delay > 0) setTimeout(run, delay); else run();
  return true;
}

/* ---------------------------
   Cutscene helpers (fallback)
   --------------------------- */
function fadeToBlack(cb) { cb(); }
function summonCutscene(trigger) {
  try {
    if (typeof window.openCutsceneModal === 'function') {
      const ok = window.openCutsceneModal(trigger);
      if (ok) return;
    }
  } catch (e) { console.warn('modal launch failed, falling back to page', e); }
  const finalURL = "cutscene.html" + "?url=" + encodeURIComponent(trigger.url || '');
  const w = window.open(finalURL, "_blank", "popup=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=900,height=600");
  if (!w) window.location.assign(finalURL);
}

/* ---------------------------
   Command Parser
   --------------------------- */
const Commands = (() => {
  const inputEl = document.getElementById("console-input");
  let history = [];
  let historyIndex = -1;
  const movementAliases = { n: "north", s: "south", e: "east", w: "west", u: "up", d: "down", ne: "northeast", nw: "northwest", se: "southeast", sw: "southwest", en: "northeast", es: "southeast", wn: "northwest", ws: "southwest" };

  function init() {
    if (!inputEl) return;
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const raw = inputEl.value.trim();
        if (!raw) return;
        handle(raw);
        history.push(raw);
        if (history.length > 100) history.shift();
        historyIndex = history.length;
        inputEl.value = "";
      } else if (e.key === "ArrowUp") {
        if (historyIndex > 0) { historyIndex--; inputEl.value = history[historyIndex] || ""; e.preventDefault(); }
      } else if (e.key === "ArrowDown") {
        if (historyIndex < history.length) { historyIndex++; inputEl.value = history[historyIndex] || ""; e.preventDefault(); }
      }
    });
    const storyFeed = document.getElementById("story-feed");
    if (storyFeed) storyFeed.addEventListener("click", () => inputEl.focus());
    setTimeout(() => inputEl && inputEl.focus(), 200);
  }

  function handle(raw) {
    Log.addCommand(raw);
    const parts = raw.split(" ");
    const cmd = (parts[0] || "").toLowerCase();
    const args = parts.slice(1);
    const fullCmd = movementAliases[cmd] || cmd;
    const word = raw.trim().toLowerCase();

    if (handleTrigger(word)) return;

    // simple door aliases
    if (raw === "push door" || raw === "open door" || raw === "kick door") return StoryEngine.move("east");
    if (cmd === "push" && (args[0] === "door" || args.join(" ") === "the door")) return StoryEngine.move("east");
    if (cmd === "open" && (args[0] === "door" || args.join(" ") === "the door")) return StoryEngine.move("east");

    // touch contextual
    if (cmd === "touch") {
      const node = StoryEngine.getCurrentNode();
      const target = args.join(" ").toLowerCase();
      if (target === "stone" && node.id === "whisper_clearing") {
        Log.addWorld("Your fingers brush the carved name. The air tightens around you.");
        Log.addWorld("For a moment, the forest remembers you more clearly than you remember yourself.");
        Log.render();
        return;
      }
      Log.addWorld(`You touch ${target}, but nothing answers you here.`);
      Log.render();
      return;
    }

    // movement and core commands
    switch (fullCmd) {
      case "north": case "south": case "east": case "west": case "up": case "down":
        StoryEngine.move(fullCmd); break;
      case "look": handleLook(args); break;
      case "inventory": handleInventory(); break;
      case "equipment": handleEquipment(); break;
      case "stats": handleStats(); break;
      case "who": case "whois": Log.addWorld("You are alone in this prototype realm."); Log.render(); break;
      case "get": handleGet(args); break;
      case "drop": handleDrop(args); break;
      case "kill": handleKill(args); break;
      case "flee": Log.addWorld("You consider fleeing, but the forest has nowhere safe to run."); Log.render(); break;
      case "say": case "chat": case "emote": case "tell": handleTalk(fullCmd, args); break;
      case "save": State.save(); break;
      case "help": showHelp(); break;
      case "board": showBoard(); break;
      case "post": postBoard(args); break;
      case "hurt": State.get().stats.health -= 10; Vitals.render(); Log.addWorld("You take 10 damage."); Log.render(); break;
      case "tired": State.get().stats.stamina -= 10; Vitals.render(); Log.addWorld("You lose 10 stamina."); Log.render(); break;
      case "heal": State.get().stats.health += 10; Vitals.render(); Log.addWorld("You recover 10 health."); Log.render(); break;
      case "rest": State.get().stats.stamina += 10; Vitals.render(); Log.addWorld("You regain 10 stamina."); Log.render(); break;
      default:
        Log.addSystem(`Unknown command: "${raw}". Type "help" for a list of commands.`);
        Log.render();
    }
  }

  /* supporting handlers (kept minimal and consistent) */
  function handleLook(args) {
    const node = StoryEngine.getCurrentNode();
    if (args.length === 0) {
      Log.addWorld(node.title);
      (node.text || []).forEach(line => Log.addWorld(line));
      if (node.ambient) Log.addWorld(`The air carries: ${node.ambient.join(", ")}.`);
      const exits = Object.keys(node.exits || {});
      if (exits.length) Log.addWorld("Paths lead: " + exits.join(", "));
      if (node.items && node.items.length) Log.addWorld("You notice: " + node.items.join(", "));
      if (node.npcs && node.npcs.length) Log.addWorld("Someone is here: " + node.npcs.join(", "));
      Log.render(); return;
    }
    const target = args.join(" ").toLowerCase();
    if (node.look && node.look[target]) Log.addWorld(node.look[target]);
    else if (node.items && node.items.includes(target)) Log.addWorld(`You inspect the ${target}. It seems important.`);
    else if (node.npcs && node.npcs.includes(target)) Log.addWorld(`${target} watches you silently.`);
    else Log.addWorld(`You study ${target}, but it reveals little.`);
    Log.render();
  }

  function handleInventory() {
    const { inventory } = State.get();
    if (!inventory.length) Log.addWorld("Your hands are empty.");
    else Log.addWorld("You carry: " + inventory.join(", "));
    Log.render();
  }

  function handleEquipment() {
    const equipment = State.get().equipment || {};
    const items = Object.values(equipment);
    if (!items.length) Log.addWorld("You wear nothing of note.");
    else Log.addWorld("You are equipped with: " + items.join(", "));
    Log.render();
  }

  function handleStats() {
    const { stats } = State.get();
    Log.addWorld(`Health: ${stats.health}, Stamina: ${stats.stamina}, Insight: ${stats.insight}.`);
    Log.render();
  }

  function handleGet(args) {
    const node = StoryEngine.getCurrentNode();
    const item = args.join(" ");
    if (!node.items || !node.items.includes(item)) { Log.addWorld(`There is no ${item} here.`); return Log.render(); }
    State.get().inventory.push(item);
    node.items = node.items.filter(i => i !== item);
    Log.addWorld(`You pick up ${item}.`); Log.render();
  }

  function handleDrop(args) {
    if (!args.length) { Log.addWorld("Drop what?"); Log.render(); return; }
    const item = args.join(" ");
    const state = State.get();
    const idx = state.inventory.indexOf(item);
    if (idx === -1) Log.addWorld(`You are not carrying ${item}.`);
    else { state.inventory.splice(idx, 1); Log.addWorld(`You drop ${item}.`); }
    Log.render();
  }

  function handleKill(args) { if (!args.length) { Log.addWorld("Kill what?"); Log.render(); return; } const target = args.join(" "); Log.addWorld(`You lunge toward ${target}, but in this prototype, violence is only a rumor.`); Log.render(); }

  function handleTalk(cmd, args) {
    if (!args.length) { Log.addWorld(`You ${cmd} nothing into the dark.`); return Log.render(); }
    const msg = args.join(" ").toLowerCase();
    const node = StoryEngine.getCurrentNode();
    Log.addWorld(`You say: "${msg}"`);
    if (node.triggerWords) node.triggerWords.forEach(word => { if (msg.includes(word)) Log.addWorld(`The forest reacts to the word "${word}".`); });
    Log.render();
  }

  function showHelp() {
    Log.addSystem("Commands:");
    Log.addSystem("  look, look <thing>");
    Log.addSystem("  north, east, south, west, up, down (n,e,s,w,u,d)");
    Log.addSystem("  inventory, equipment, stats, who, whois");
    Log.addSystem("  get <thing>, drop <thing>");
    Log.addSystem("  kill <thing>, flee");
    Log.addSystem("  say <x>, chat <x>, emote <x>, tell <player> <x>");
    Log.addSystem("  board, post <message>");
    Log.addSystem("  save, help");
    Log.addSystem("Master/Admin: Ctrl+Shift+M / Ctrl+Shift+A");
    Log.render();
  }

  function showBoard() {
    const { boardPosts } = State.get();
    if (!boardPosts.length) Log.addBoard("The board is empty. No one has left a mark yet.");
    else boardPosts.forEach(p => Log.addBoard(p));
    Log.render();
  }

  function postBoard(args) {
    if (!args.length) { Log.addWorld("Post what?"); Log.render(); return; }
    const msg = args.join(" ");
    const state = State.get();
    const entry = `A faint script appears on the board: "${msg}"`;
    state.boardPosts.push(entry);
    Log.addBoard(entry);
    Log.render();
  }

  return { init, handle };
})();

/* ---------------------------
   Story Engine (movement + node systems)
   --------------------------- */
const StoryEngine = (() => {
  const DIR_VECTORS = {
    n: { x: 0, y: -1 }, s: { x: 0, y: 1 }, e: { x: 1, y: 0 }, w: { x: -1, y: 0 },
    ne: { x: 1, y: -1 }, nw: { x: -1, y: -1 }, se: { x: 1, y: 1 }, sw: { x: -1, y: 1 },
    u: { x: 0, y: 0, z: 1 }, d: { x: 0, y: 0, z: -1 }
  };

  function getNode(id) {
    const node = STORY_NODES[id];
    const state = State.get();
    if (!node) {
      return { id, title: "Unwritten Space", dir: "N", coords: { x: 999, y: 999 }, text: ["You step beyond the forest’s memory."], exits: {}, isVoid: true };
    }
    if (node.easterEggTrigger) {
      const eggId = node.easterEggTrigger;
      const eggDef = GLOBAL_EVENTS?.easterEggs?.[eggId];
      if (eggDef && eggDef.oneTime && !state.usedEasterEggs.includes(eggId)) {
        if (typeof triggerEasterEgg === "function") triggerEasterEgg(eggId);
      }
    }
    return node;
  }

  function getCurrentNode() { return getNode(State.get().currentNodeId); }

  function applyMovement(direction) {
    const vec = DIR_VECTORS[direction];
    if (!vec) return;
    const state = State.get();
    state.x = (state.x || 0) + (vec.x || 0);
    state.y = (state.y || 0) + (vec.y || 0);
    state.z = (state.z || 0) + (vec.z || 0);
    State.save();
  }

  function applyNodeSystems(node) {
    if (!node || node._systemsApplied) return;
    node._systemsApplied = true;
    if (node.startQuest) { Quests.start(node.startQuest); Log.addWorld("Something in the forest marks your path."); }
    if (node.factionAdjust) { Factions.adjust(node.factionAdjust.f, node.factionAdjust.d); Log.addWorld("The forest shifts its opinion of you."); }
    if (node.merchant) { Merchants.spawn(node.merchant.name, node.merchant.inventory || []); Log.addWorld(`A wandering figure appears: ${node.merchant.name}.`); }
    if (node.pvpToggle) { PvP.toggle(); Log.addWorld("The air sharpens. Danger feels closer."); }
    if (node.randomEncounter) { setTimeout(() => RandomLoad.rollEncounter(node.id), 150); Log.addWorld("Something stirs nearby."); }
  }

  function move(direction) {
    const current = getCurrentNode();
    const exits = current.exits || {};
    const destId = exits[direction];
    if (!destId) { Log.addWorld(`You cannot go ${direction} from here.`); return Log.render(); }

    // set node
    if (typeof State.setCurrentNode === "function") State.setCurrentNode(destId);
    else State.get().currentNodeId = destId;

    // apply coordinate movement
    applyMovement(direction);

    // fetch node and apply systems
    const node = getNode(destId);
    applyNodeSystems(node);

    // render
    if (typeof Story?.render === "function") Story.render(node);
    if (typeof Compass?.render === "function") Compass.render();
    if (typeof Vitals?.render === "function") Vitals.render();
    if (typeof MapPanel?.rebuild === "function") MapPanel.rebuild();

    Log.addWorld(`You move ${direction} into ${node.title}.`);
    (node.text || []).forEach(line => Log.addWorld(line));
    Log.render();

    setTimeout(() => {
      try { if (typeof updateCurrentIndicator === "function") updateCurrentIndicator(State.get().currentNodeId); } catch (e) {}
      try { if (typeof refreshAll === "function") refreshAll(); } catch (e) {}
    }, 0);
  }

  return { getNode, getCurrentNode, move };
})();

/* Expose StoryEngine globally */
window.StoryEngine = StoryEngine;

/* ---------------------------
   Renderers: Story, Compass, Vitals
   --------------------------- */
const Story = (() => {
  const titleEl = document.getElementById("story-title");
  const bodyEl = document.getElementById("story-body");
  const metaLocation = document.getElementById("meta-location");
  function render(node) {
    if (!titleEl || !bodyEl) return;
    titleEl.textContent = node.title || "Untitled";
    bodyEl.innerHTML = "";
    (node.text || []).forEach(line => { const p = document.createElement("p"); p.textContent = line; bodyEl.appendChild(p); });
    if (metaLocation) metaLocation.textContent = node.title || "";
  }
  return { render };
})();

const Compass = (() => {
  function expandDir(d) {
    switch (d) {
      case "N": return "North"; case "S": return "South"; case "E": return "East"; case "W": return "West";
      case "NE": return "Northeast"; case "NW": return "Northwest"; case "SE": return "Southeast"; case "SW": return "Southwest";
      case "U": return "Up"; case "D": return "Down"; default: return d;
    }
  }
  function render() {
    const dirCells = document.querySelectorAll(".compass-dir");
    const textEl = document.getElementById("compass-text");
    const state = State.get();
    const node = StoryEngine.getCurrentNode();
    const exits = node.exits || {};
    const { currentDirection, lastDirection } = state;
    dirCells.forEach(cell => {
      const dir = cell.getAttribute("data-dir");
      const dirLower = dir.toLowerCase();
      cell.onclick = () => StoryEngine.move(dirLower);
      if (dir === "NE" || dir === "NW" || dir === "SE" || dir === "SW") {
        cell.style.visibility = exits[dirLower] ? "visible" : "hidden";
      } else cell.style.visibility = "visible";
      cell.classList.remove("compass-current", "compass-last");
      if (dir === currentDirection) cell.classList.add("compass-current");
      if (dir === lastDirection) cell.classList.add("compass-last");
    });
    if (textEl) {
      let text = "";
      if (lastDirection && currentDirection) text = `You came from the ${expandDir(lastDirection)} and now face the ${expandDir(currentDirection)}.`;
      else if (currentDirection) text = `You face the ${expandDir(currentDirection)}.`;
      else text = "The world has not yet chosen a direction.";
      textEl.textContent = text;
    }
  }
  return { render };
})();

const Vitals = (() => {
  const hEl = document.getElementById("vital-health");
  const sEl = document.getElementById("vital-stamina");
  const iEl = document.getElementById("vital-insight");
  const fEl = document.getElementById("vital-flags");
  function render() {
    const { stats, flags } = State.get();
    if (hEl) hEl.textContent = stats.health;
    if (sEl) sEl.textContent = stats.stamina;
    if (iEl) iEl.textContent = stats.insight;
    if (fEl) {
      const flagKeys = Object.keys(flags).filter(k => flags[k]);
      fEl.textContent = flagKeys.length ? flagKeys.join(", ") : "None";
    }
  }
  return { render };
})();

/* ---------------------------
   Accessibility / Action Buttons
   --------------------------- */
const Accessibility = (() => {
  function showPopup(title, lines = [], actions = []) {
    const overlay = document.getElementById("overlay");
    if (!overlay) return;
    overlay.classList.remove("hidden");
    overlay.innerHTML = "";
    const panel = document.createElement("div");
    panel.classList.add("panel", "glow");
    panel.style.maxWidth = "520px";
    panel.style.left = "50%";
    panel.style.top = "50%";
    panel.style.transform = "translate(-50%, -50%)";
    const h = document.createElement("h3"); h.textContent = title; panel.appendChild(h);
    lines.forEach(l => { const p = document.createElement("p"); p.textContent = l; panel.appendChild(p); });
    const btnRow = document.createElement("div"); btnRow.style.display = "flex"; btnRow.style.gap = "8px"; btnRow.style.marginTop = "8px";
    actions.forEach(a => {
      const b = document.createElement("button"); b.textContent = a.label;
      b.onclick = () => { overlay.classList.add("hidden"); overlay.innerHTML = ""; if (a.onClick) a.onClick(); };
      btnRow.appendChild(b);
    });
    const close = document.createElement("button"); close.textContent = "Close"; close.onclick = () => { overlay.classList.add("hidden"); overlay.innerHTML = ""; };
    btnRow.appendChild(close);
    panel.appendChild(btnRow);
    overlay.appendChild(panel);
    panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.tabIndex = -1; panel.focus();
  }

  function renderActionButtons(node) {
    const existing = document.getElementById("action-buttons");
    if (existing) existing.remove();
    if (!node || !node.actions || !node.actions.length) return;
    const container = document.createElement("div");
    container.id = "action-buttons";
    container.style.display = "flex";
    container.style.gap = "8px";
    container.style.marginTop = "10px";
    container.setAttribute("aria-label", "Actions");
    node.actions.forEach(act => {
      const btn = document.createElement("button");
      btn.textContent = act.label;
      btn.onclick = () => {
        if (act.command) {
          const input = document.getElementById("console-input");
          if (input) { input.value = act.command; input.focus(); const ev = new KeyboardEvent("keydown", { key: "Enter" }); input.dispatchEvent(ev); }
        } else if (act.effect) {
          State.applyEffects(act.effect); Vitals.render(); Log.addWorld(act.resultText || `You ${act.label}.`); Log.render();
        } else if (act.onClick) act.onClick();
      };
      btn.setAttribute("aria-label", act.label);
      container.appendChild(btn);
    });
    const storyBody = document.getElementById("story-body");
    if (storyBody) storyBody.parentNode.insertBefore(container, storyBody.nextSibling);
  }

  // Hook Story.render to also render action buttons
  (function() {
    const origRender = Story.render;
    Story.render = function(node) { origRender(node); Accessibility.renderActionButtons(node); };
  })();

  return { showPopup, renderActionButtons };
})();

/* ---------------------------
   Master / Admin Panels
   --------------------------- */
const MasterPanel = (() => {
  const MASTER_PASSWORD = "master123";
  function open() {
    const pass = prompt("Enter Master password:");
    if (pass !== MASTER_PASSWORD) return;
    const overlay = document.getElementById("overlay");
    if (!overlay) return;
    overlay.classList.remove("hidden"); overlay.innerHTML = "";
    const panel = document.createElement("div"); panel.classList.add("panel", "glow");
    panel.style.top = "6%"; panel.style.right = "6%"; panel.style.maxWidth = "420px";
    panel.innerHTML = `
      <h3>Master Console</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        <button id="master-close">Close</button>
        <button id="master-teleport">Teleport</button>
        <button id="master-spawn">Spawn NPC</button>
        <button id="master-trigger-egg">Trigger Egg</button>
        <button id="master-reveal-map">Reveal Map</button>
        <button id="master-toggle-pvp">Toggle PvP</button>
      </div>
      <div style="margin-top:8px">
        <label style="display:block;margin-bottom:6px">Quick Effects</label>
        <button id="master-boost-insight">Boost Insight +3</button>
        <button id="master-heal">Restore Health</button>
        <button id="master-clear-board">Clear Board</button>
      </div>
      <div style="margin-top:10px;font-size:12px;opacity:0.85">Use with care. Actions are immediate.</div>
    `;
    overlay.appendChild(panel);

    document.getElementById("master-close").onclick = () => { overlay.classList.add("hidden"); overlay.innerHTML = ""; };
    document.getElementById("master-teleport").onclick = () => {
      const dest = prompt("Teleport to node id:");
      if (dest && STORY_NODES[dest]) {
        State.setNode(dest); Story.render(StoryEngine.getNode(dest)); Compass.render(); Vitals.render();
        Log.addSystem(`Master: Teleported to ${dest}.`); Log.render();
      } else Log.addSystem("Master: Invalid node id."); Log.render();
    };
    document.getElementById("master-spawn").onclick = () => { const npc = prompt("Spawn NPC name:"); if (npc) { Log.addSystem(`Master: Spawned ${npc}.`); Log.render(); } };
    document.getElementById("master-trigger-egg").onclick = () => { const egg = prompt("Easter egg id to trigger:"); if (egg) StoryEngine.triggerEasterEgg && StoryEngine.triggerEasterEgg(egg); };
    document.getElementById("master-reveal-map").onclick = () => { window.MapPanel = window.MapPanel || {}; window.MapPanel._visited = new Set(Object.keys(STORY_NODES)); window.MapPanel.rebuild && window.MapPanel.rebuild(); Log.addSystem("Master: Map fully revealed."); Log.render(); };
    document.getElementById("master-toggle-pvp").onclick = () => { PvP.toggle(); Log.addSystem(`Master: PvP ${PvP.enabled ? "enabled" : "disabled"}.`); Log.render(); };

    document.getElementById("master-boost-insight").onclick = () => { State.applyEffects({ stats: { insight: 3 } }); Vitals.render(); Log.addSystem("Master: Insight +3"); Log.render(); };
    document.getElementById("master-heal").onclick = () => { const s = State.get(); s.stats.health = s.stats.maxHealth || 100; Vitals.render(); Log.addSystem("Master: Health restored."); Log.render(); };
    document.getElementById("master-clear-board").onclick = () => { const s = State.get(); s.boardPosts = []; Log.addBoard("Master cleared the board."); Log.render(); };
  }
  return { open };
})();

const AdminPanel = (() => {
  const ADMIN_PASSWORD = "admin123";
  function open() {
    const pass = prompt("Enter Admin password:");
    if (pass !== ADMIN_PASSWORD) return;
    const overlay = document.getElementById("overlay");
    if (!overlay) return;
    overlay.classList.remove("hidden"); overlay.innerHTML = "";
    const panel = document.createElement("div"); panel.classList.add("panel");
    panel.style.bottom = "6%"; panel.style.left = "6%"; panel.style.maxWidth = "360px";
    panel.innerHTML = `
      <h3>Admin Console</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button id="admin-close">Close</button>
        <button id="admin-trigger-egg">Trigger Egg</button>
        <button id="admin-clear-board">Clear Board</button>
        <button id="admin-spawn-merchant">Spawn Merchant</button>
      </div>
      <div style="margin-top:8px;font-size:12px;opacity:0.9">Admin has limited controls.</div>
    `;
    overlay.appendChild(panel);
    document.getElementById("admin-close").onclick = () => { overlay.classList.add("hidden"); overlay.innerHTML = ""; };
    document.getElementById("admin-trigger-egg").onclick = () => { const egg = prompt("Easter egg id:"); if (egg) StoryEngine.triggerEasterEgg && StoryEngine.triggerEasterEgg(egg); };
    document.getElementById("admin-clear-board").onclick = () => { const s = State.get(); s.boardPosts = []; Log.addBoard("Admin cleared the board."); Log.render(); };
    document.getElementById("admin-spawn-merchant").onclick = () => { const name = prompt("Merchant name:"); if (name) { Merchants.spawn(name); Log.addSystem(`Admin: Merchant ${name} spawned.`); Log.render(); } };
  }
  return { open };
})();

/* ---------------------------
   Hotkeys
   --------------------------- */
const Hotkeys = (() => {
  const map = {
    "n": () => StoryEngine.move("north"),
    "s": () => StoryEngine.move("south"),
    "e": () => StoryEngine.move("east"),
    "w": () => StoryEngine.move("west"),
    "m": () => { const mini = document.getElementById("mini-map"); mini && mini.click(); },
    "?": () => { const input = document.getElementById("console-input"); if (input) { input.value = "help"; const ev = new KeyboardEvent("keydown", { key: "Enter" }); input.dispatchEvent(ev); } }
  };
  let hotkeysEnabled = true;
  const STORAGE_KEY = "rpg_hotkeys_enabled";
  function isTyping() {
    const el = document.activeElement;
    if (!el) return false;
    const tag = (el.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA") return true;
    if (el.isContentEditable) return true;
    if (el.id === "console-input") return true;
    return false;
  }
  function createToggleUI() {
    if (document.getElementById("hotkeys-toggle")) return;
    const container = document.createElement("div");
    container.id = "hotkeys-toggle";
    container.style.position = "fixed";
    container.style.right = "12px";
    container.style.bottom = "12px";
    container.style.zIndex = "1200";
    container.style.pointerEvents = "auto";
    container.style.fontSize = "12px";
    container.style.background = "rgba(8,6,14,0.7)";
    container.style.color = "#fff";
    container.style.padding = "6px 8px";
    container.style.borderRadius = "6px";
    container.style.boxShadow = "0 6px 18px rgba(0,0,0,0.5)";
    container.style.border = "1px solid rgba(150,130,255,0.08)";
    container.style.cursor = "pointer";
    container.textContent = hotkeysEnabled ? "Hotkeys: ON" : "Hotkeys: OFF";
    container.title = "Click to toggle movement hotkeys (n/e/s/w)";
    container.onclick = () => {
      hotkeysEnabled = !hotkeysEnabled;
      try { localStorage.setItem(STORAGE_KEY, hotkeysEnabled ? "1" : "0"); } catch (e) {}
      container.textContent = hotkeysEnabled ? "Hotkeys: ON" : "Hotkeys: OFF";
    };
    document.body.appendChild(container);
  }
  function init() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) hotkeysEnabled = saved === "1";
    } catch (e) {}
    createToggleUI();
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "M") { e.preventDefault(); MasterPanel.open(); return; }
      if (e.ctrlKey && e.shiftKey && e.key === "A") { e.preventDefault(); AdminPanel.open(); return; }
      if (e.key === "Escape") {
        const el = document.activeElement;
        if (el && (el.id === "console-input" || el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) { el.blur(); e.preventDefault(); return; }
      }
      if (!hotkeysEnabled) return;
      if (isTyping()) return;
      const key = e.key.toLowerCase();
      if (map[key]) { e.preventDefault(); map[key](); }
    });
  }
  return { init, register: (k, fn) => { map[k] = fn; } };
})();

/* ---------------------------
   Item handling + ACTIONS
   --------------------------- */
const ACTIONS = {
  fallen_climb_out: { label: "Climb out", command: "north" },
  fallen_listen: { label: "Listen", effect: { stats: { insight: 1 } }, resultText: "A distant echo answers you." },
  inspect_post: { label: "Inspect the post", command: "inspect post", resultText: "You trace the grooves and feel a faint tug in the air." },
  sit_listen: { label: "Sit and listen", effect: { stats: { insight: 1 } }, resultText: "The forest answers with a single, low note." },
  touch_stone: { label: "Touch the stone", command: "touch stone" },
  listen_closely: { label: "Listen closely", effect: { stats: { insight: 1 } }, resultText: "A small truth settles in your mind." },
  climb_up: { label: "Climb Up", command: "climb up" },
  climb_down: { label: "Climb Down", command: "climb down" },
  crawl_east: { label: "Crawl East", command: "crawl east" },
  back_out: { label: "Back Out", command: "back" }
};

function performAction(actionId) {
  const s = State.get();
  const action = ACTIONS[actionId];
  if (!action) return;
  if (action.effect) State.applyEffects(action.effect);
  if (action.command) Commands.handle(action.command);
  if (action.resultText) Log.addWorld(action.resultText);
  Log.render();
  if (window.renderItems) window.renderItems();
  if (window.renderOverview) window.renderOverview();
}

function performNodeTrigger(triggerId) {
  const t = NODE_TRIGGERS[triggerId];
  if (!t) return;
  if (t.text) Log.addWorld(t.text);
  if (t.eventId && StoryEngine.triggerEvent) StoryEngine.triggerEvent(t.eventId);
  Log.render();
}

/* Item click handler */
function handleItemClick(item, event) {
  const s = State.get();
  if (event && event.shiftKey) {
    const idx = s.inventory.findIndex(it => it === item || it.name === item);
    if (idx !== -1) {
      s.inventory.splice(idx, 1);
      Log.addWorld(`You drop the ${item}.`);
      Log.render();
      if (window.renderItems) window.renderItems();
      return;
    }
  }
  const consumables = ["Potion", "Elixir", "moss vial", "forest charm", "bone token"];
  if (consumables.includes(item)) { consumeItem(item); return; }
  const equippable = ["Wizard Hat", "Mage Robe", "Crystal Staff", "Iron Sword"];
  if (equippable.includes(item)) { wieldWeapon(item); return; }
  Log.addWorld(`You inspect the ${item}.`);
  Log.render();
}

function getEquipSlot(item) {
  const name = item.toLowerCase();
  if (name.includes("hat") || name.includes("helm") || name.includes("hood")) return "head";
  if (name.includes("robe") || name.includes("armor") || name.includes("chest") || name.includes("coat")) return "body";
  if (name.includes("bracers") || name.includes("sleeves") || name.includes("armguard")) return "arms";
  if (name.includes("gloves") || name.includes("gauntlet")) return "hands";
  if (name.includes("belt") || name.includes("sash")) return "waist";
  if (name.includes("pants") || name.includes("leggings") || name.includes("trousers")) return "legs";
  if (name.includes("boots") || name.includes("shoes") || name.includes("sandals")) return "feet";
  if (name.includes("staff") || name.includes("sword") || name.includes("dagger") || name.includes("axe") || name.includes("mace")) return "weapon";
  if (name.includes("shield") || name.includes("tome") || name.includes("orb")) return "offhand";
  if (name.includes("ring") || name.includes("charm") || name.includes("token") || name.includes("amulet")) return "accessory";
  return "weapon";
}

function consumeItem(item) {
  const s = State.get();
  // Example consumable effects
  const consumableEffects = {
    "moss vial": (st) => { st.stats.health = Math.min((st.stats.maxHealth || 100), (st.stats.health || 0) + 10); Log.addWorld("You sip the moss vial and feel steadier."); },
    "forest charm": (st) => { st.stats.insight = (st.stats.insight || 0) + 1; Log.addWorld("A small warmth settles in your mind."); }
  };
  if (consumableEffects[item]) consumableEffects[item](s);
  const idx = s.inventory.findIndex(it => it === item || it.name === item);
  if (idx !== -1) s.inventory.splice(idx, 1);
  Log.render();
  if (window.renderItems) window.renderItems();
  if (window.renderOverview) window.renderOverview();
}

function wieldWeapon(item) {
  const s = State.get();
  const slot = getEquipSlot(item);
  s.equipment = s.equipment || {};
  s.equipment[slot] = item;
  Log.addWorld(`You equip the ${item} in slot ${slot}.`);
  Log.render();
  if (window.renderEquipment) window.renderEquipment();
}

/* ---------------------------
   Map Panel (mini + full overlay)
   --------------------------- */
const MapPanel = (function() {
  // Constants
  const MAP_ID = "map-panel";
  const CELL = 280;
  const PAD = 36;
  const MINI_PX = 140;
  const NODE_R_VISITED = 18;
  const NODE_R_NEW = 2;
  const EDGE_COLOR = "rgba(150,130,255,0.22)";
  const ANIM_DURATION = 420;

  window.MapPanel = window.MapPanel || {};
  const MP = window.MapPanel;

  // helpers for node visit bookkeeping
  function markNodeVisited(nodeId) {
    const s = State.get();
    s._visitedNodes = s._visitedNodes || {};
    s._visitedNodes[nodeId] = s._visitedNodes[nodeId] || { entered: 0, merchantSpawned: false, encounterRolled: false };
    State.save();
    return s._visitedNodes[nodeId];
  }
  function recordNodeEntry(nodeId) {
    const s = State.get();
    s._visitedNodes = s._visitedNodes || {};
    s._visitedNodes[nodeId] = s._visitedNodes[nodeId] || { entered: 0, merchantSpawned: false, encounterRolled: false };
    s._visitedNodes[nodeId].entered += 1;
    State.save();
  }

  // build nodes/positions
  function buildNodes() {
    const nodes = {};
    Object.keys(STORY_NODES).forEach(id => {
      const n = STORY_NODES[id];
      nodes[id] = { id, title: n.title || id, exits: Object.assign({}, n.exits || {}), coords: n.coords || null };
    });
    return nodes;
  }

  function computePositions(nodes, startId = "start") {
    const positions = {};
    const hasCoords = Object.values(nodes).some(n => n.coords && Number.isFinite(n.coords.x) && Number.isFinite(n.coords.y));
    if (hasCoords) {
      let minX = Infinity, minY = Infinity;
      Object.values(nodes).forEach(n => { if (n.coords) { minX = Math.min(minX, n.coords.x); minY = Math.min(minY, n.coords.y); } });
      Object.values(nodes).forEach(n => { if (n.coords) positions[n.id] = { x: n.coords.x - minX, y: n.coords.y - minY }; });
      const occupied = new Set(Object.values(positions).map(p => `${p.x},${p.y}`));
      const queue = Object.keys(positions).map(id => ({ id, x: positions[id].x, y: positions[id].y }));
      const dirs = { north: [0, -1], south: [0, 1], east: [1, 0], west: [-1, 0] };
      while (queue.length) {
        const cur = queue.shift();
        const node = nodes[cur.id];
        if (!node) continue;
        Object.entries(node.exits).forEach(([dir, tid]) => {
          if (positions[tid]) return;
          const d = dirs[dir] || [Math.random() > 0.5 ? 1 : -1, Math.random() > 0.5 ? 1 : -1];
          let nx = cur.x + d[0], ny = cur.y + d[1], attempts = 0;
          while (occupied.has(`${nx},${ny}`) && attempts++ < 30) { nx += (Math.random() > 0.5 ? 1 : -1); ny += (Math.random() > 0.5 ? 1 : -1); }
          positions[tid] = { x: nx, y: ny }; occupied.add(`${nx},${ny}`); queue.push({ id: tid, x: nx, y: ny });
        });
      }
      let minNX = Infinity, minNY = Infinity;
      Object.values(positions).forEach(p => { minNX = Math.min(minNX, p.x); minNY = Math.min(minNY, p.y); });
      Object.keys(positions).forEach(k => { positions[k].x -= minNX; positions[k].y -= minNY; });
      return positions;
    }

    // BFS fallback
    const pos = {};
    const occ = new Set();
    pos[startId] = { x: 0, y: 0 }; occ.add("0,0");
    const q = [{ id: startId, x: 0, y: 0 }];
    const dirs2 = { north: [0, -1], south: [0, 1], east: [1, 0], west: [-1, 0] };
    while (q.length) {
      const cur = q.shift();
      const node = nodes[cur.id];
      if (!node) continue;
      Object.entries(node.exits).forEach(([dir, tid]) => {
        if (pos[tid]) return;
        const d = dirs2[dir] || [Math.random() > 0.5 ? 1 : -1, Math.random() > 0.5 ? 1 : -1];
        let nx = cur.x + d[0], ny = cur.y + d[1], attempts = 0;
        while (occ.has(`${nx},${ny}`) && attempts++ < 20) { nx += (Math.random() > 0.5 ? 1 : -1); ny += (Math.random() > 0.5 ? 1 : -1); }
        pos[tid] = { x: nx, y: ny }; occ.add(`${nx},${ny}`); q.push({ id: tid, x: nx, y: ny });
      });
    }
    let minx = Infinity, miny = Infinity;
    Object.values(pos).forEach(p => { minx = Math.min(minx, p.x); miny = Math.min(miny, p.y); });
    Object.keys(pos).forEach(k => { pos[k].x -= minx; pos[k].y -= miny; });
    return pos;
  }

  // mini-map rendering (canvas)
  function renderMini(nodes, positions) {
    const canvasWrap = document.getElementById("map-canvas");
    if (!canvasWrap) return;
    const old = document.getElementById("mini-map"); if (old) old.remove();
    const mini = document.createElement("div"); mini.id = "mini-map";
    mini.style.position = "absolute"; mini.style.right = "10px"; mini.style.bottom = "10px";
    mini.style.width = MINI_PX + "px"; mini.style.height = MINI_PX + "px"; mini.style.borderRadius = "6px";
    mini.style.overflow = "hidden"; mini.style.background = "rgba(6,4,12,0.72)"; mini.style.border = "1px solid rgba(150,130,255,0.08)";
    mini.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)"; mini.style.zIndex = "40"; mini.style.pointerEvents = "auto";
    canvasWrap.appendChild(mini);

    const c = document.createElement("canvas"); c.width = MINI_PX; c.height = MINI_PX; c.style.width = "100%"; c.style.height = "100%";
    mini.appendChild(c);
    const ctx = c.getContext("2d");

    function drawMini() {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.fillStyle = "rgba(8,6,14,0.6)"; ctx.fillRect(0, 0, c.width, c.height);
      ctx.strokeStyle = "rgba(150,130,255,0.14)"; ctx.lineWidth = 1;
      const visited = MP._visited || new Set();
      const currentId = State.get().currentNodeId;
      const pts = Object.values(positions);
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      pts.forEach(p => { minX = Math.min(minX, p.x); minY = Math.min(minY, p.y); maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y); });
      if (minX === Infinity) return;
      const pad = 12;
      const w = Math.max(1, maxX - minX);
      const h = Math.max(1, maxY - minY);
      const scale = Math.min((MINI_PX - pad) / w, (MINI_PX - pad) / h);
      function worldToMiniRaw(x, y) { return { x: (x - minX) * scale + pad / 2, y: (y - minY) * scale + pad / 2 }; }
      let offsetX = 0, offsetY = 0;
      if (currentId && positions[currentId]) {
        const cur = positions[currentId];
        const curMini = worldToMiniRaw(cur.x, cur.y);
        offsetX = (MINI_PX / 2) - curMini.x;
        offsetY = (MINI_PX / 2) - curMini.y;
      }
      const topLeft = worldToMiniRaw(minX, minY);
      const bottomRight = worldToMiniRaw(maxX, maxY);
      const mapWidth = bottomRight.x - topLeft.x;
      const mapHeight = bottomRight.y - topLeft.y;
      if (mapWidth < MINI_PX - pad) offsetX = (MINI_PX - mapWidth) / 2 - topLeft.x;
      if (mapHeight < MINI_PX - pad) offsetY = (MINI_PX - mapHeight) / 2 - topLeft.y;

      // edges
      Object.values(nodes).forEach(n => {
        if (!visited.has(n.id)) return;
        const from = positions[n.id]; if (!from) return;
        Object.values(n.exits || {}).forEach(tid => {
          if (!visited.has(tid)) return;
          const to = positions[tid]; if (!to) return;
          const aRaw = worldToMiniRaw(from.x, from.y);
          const bRaw = worldToMiniRaw(to.x, to.y);
          const a = { x: aRaw.x + offsetX, y: aRaw.y + offsetY };
          const b = { x: bRaw.x + offsetX, y: bRaw.y + offsetY };
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        });
      });

      // nodes
      Object.entries(positions).forEach(([id, p]) => {
        if (!visited.has(id)) return;
        const mRaw = worldToMiniRaw(p.x, p.y);
        const m = { x: mRaw.x + offsetX, y: mRaw.y + offsetY };
        ctx.beginPath();
        const isCurrent = (id === currentId);
        ctx.fillStyle = isCurrent ? "#fff1b8" : "#ffd";
        ctx.arc(m.x, m.y, isCurrent ? 5.2 : 3.5, 0, Math.PI * 2);
        ctx.fill();
        if (isCurrent) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255,255,255,0.6)";
          ctx.lineWidth = 1;
          ctx.arc(m.x, m.y, 8, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    }

    drawMini();
    MP._drawMini = drawMini;
    mini.addEventListener("click", (ev) => { ev.stopPropagation(); openFullMap(); });
  }

  // full map overlay (SVG)
  function openFullMap() {
    const nodes = MP._nodes;
    const positions = MP._positions;
    if (!nodes || !positions) return;
    const existing = document.getElementById("full-map-overlay"); if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.id = "full-map-overlay";
    overlay.style.position = "fixed"; overlay.style.left = "0"; overlay.style.top = "0"; overlay.style.width = "100%"; overlay.style.height = "100%";
    overlay.style.background = "rgba(6,4,12,0.88)"; overlay.style.zIndex = "9999"; overlay.style.display = "flex"; overlay.style.alignItems = "center"; overlay.style.justifyContent = "center"; overlay.style.padding = "20px"; overlay.style.boxSizing = "border-box";
    const panel = document.createElement("div");
    panel.style.width = "min(1100px, 96%)"; panel.style.height = "min(760px, 92%)"; panel.style.background = "linear-gradient(180deg, rgba(18,14,36,0.98), rgba(8,6,18,0.98))";
    panel.style.borderRadius = "10px"; panel.style.position = "relative"; panel.style.overflow = "hidden"; panel.style.boxShadow = "0 30px 80px rgba(0,0,0,0.7)";
    overlay.appendChild(panel);
    const close = document.createElement("button"); close.textContent = "Close"; close.style.position = "absolute"; close.style.top = "12px"; close.style.right = "12px"; close.style.zIndex = "30";
    close.onclick = () => overlay.remove(); panel.appendChild(close);

    // compute svg size
    let maxX = 0, maxY = 0;
    Object.values(positions).forEach(p => { maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y); });
    const width = Math.max(800, (maxX + 1) * CELL + PAD * 2);
    const height = Math.max(600, (maxY + 1) * CELL + PAD * 2);
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.width = "100%"; svg.style.height = "100%"; svg.style.display = "block"; svg.style.background = "transparent";
    panel.appendChild(svg);
    const root = document.createElementNS(svgNS, "g"); root.setAttribute("id", "map-root"); svg.appendChild(root);

    // draw edges (visited only)
    const visited = MP._visited || new Set();
    Object.values(nodes).forEach(n => {
      if (!visited.has(n.id)) return;
      const from = positions[n.id]; if (!from) return;
      Object.values(n.exits || {}).forEach(tid => {
        if (!visited.has(tid)) return;
        const to = positions[tid]; if (!to) return;
        const a = toPixel(from), b = toPixel(to);
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
        line.setAttribute("x2", b.x); line.setAttribute("y2", b.y);
        line.setAttribute("stroke", EDGE_COLOR); line.setAttribute("stroke-width", "3");
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        line.setAttribute("stroke-dasharray", len); line.setAttribute("stroke-dashoffset", len);
        root.appendChild(line);
        requestAnimationFrame(() => { line.style.transition = `stroke-dashoffset ${ANIM_DURATION}ms ease-out`; line.setAttribute("stroke-dashoffset", "0"); });
      });
    });

    // draw nodes (visited)
    Object.values(nodes).forEach(n => {
      if (!visited.has(n.id)) return;
      const p = positions[n.id]; if (!p) return;
      const c = toPixel(p);
      const g = document.createElementNS(svgNS, "g"); g.setAttribute("transform", `translate(${c.x},${c.y})`); g.style.pointerEvents = "auto"; g.style.cursor = "pointer";
      const circle = document.createElementNS(svgNS, "circle"); circle.setAttribute("r", NODE_R_NEW); circle.setAttribute("fill", "#eeddc8"); circle.setAttribute("stroke", "#fff"); circle.setAttribute("stroke-opacity", "0.95"); circle.setAttribute("opacity", "0");
      g.appendChild(circle);
      const label = document.createElementNS(svgNS, "text"); label.setAttribute("y", "40"); label.setAttribute("text-anchor", "middle"); label.setAttribute("font-size", "12"); label.setAttribute("fill", "#fff");
      const raw = n.title.length > 22 ? n.title.slice(0, 20) + "…" : n.title; label.textContent = decodeEntities(raw); label.setAttribute("opacity", "0");
      g.appendChild(label);
      root.appendChild(g);
      requestAnimationFrame(() => { setTimeout(() => {
        circle.style.transition = `r ${ANIM_DURATION}ms cubic-bezier(.2,.9,.2,1), opacity ${ANIM_DURATION}ms ease-out`;
        label.style.transition = `opacity ${ANIM_DURATION}ms ease-out`;
        circle.setAttribute("r", NODE_R_VISITED); circle.setAttribute("opacity", "1"); label.setAttribute("opacity", "1");
      }, 0); });

      g.addEventListener("click", (ev) => { ev.stopPropagation(); centerOnNode(n.id); showNodeTooltip(n, ev.clientX, ev.clientY); });
      g.addEventListener("dblclick", (ev) => { ev.stopPropagation(); centerOnNode(n.id); });
    });

    setupPanZoom(svg, root);
    updateCurrentIndicator(State.get().currentNodeId);
    createOrMoveFullMapCurrent(svg, State.get().currentNodeId);

    document.body.appendChild(overlay);
  }

  function toPixel(p) { return { x: PAD + p.x * CELL + CELL / 2, y: PAD + p.y * CELL + CELL / 2 }; }

  function decodeEntities(str) { const txt = document.createElement("textarea"); txt.innerHTML = str; return txt.value; }

  function setupPanZoom(svg, root) {
    let state = MP._panZoomState || { x: 0, y: 0, k: 1 };
    function apply() { root.setAttribute("transform", `translate(${state.x},${state.y}) scale(${state.k})`); }
    function screenToSvg(evt) { const pt = svg.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY; const ctm = svg.getScreenCTM().inverse(); return pt.matrixTransform(ctm); }
    svg.onwheel = (ev) => {
      ev.preventDefault();
      const delta = ev.deltaY < 0 ? 1 : -1;
      const factor = 1 + delta * 0.12;
      const newK = Math.max(0.45, Math.min(3.5, state.k * factor));
      const mouse = screenToSvg(ev);
      state.x = mouse.x - (mouse.x - state.x) * (newK / state.k);
      state.y = mouse.y - (mouse.y - state.y) * (newK / state.k);
      state.k = newK;
      apply();
      MP._panZoomState = state;
      MP._drawMini && MP._drawMini();
    };
    let dragging = false, last = null;
    svg.addEventListener("mousedown", (ev) => { if (ev.button !== 0) return; dragging = true; last = { x: ev.clientX, y: ev.clientY }; svg.style.cursor = "grabbing"; });
    window.addEventListener("mousemove", (ev) => { if (!dragging) return; const dx = (ev.clientX - last.x); const dy = (ev.clientY - last.y); state.x += dx / state.k; state.y += dy / state.k; last = { x: ev.clientX, y: ev.clientY }; apply(); MP._panZoomState = state; MP._drawMini && MP._drawMini(); });
    window.addEventListener("mouseup", () => { if (!dragging) return; dragging = false; last = null; svg.style.cursor = "default"; });
  }

  function createOrMoveFullMapCurrent(svg, nodeId) {
    if (!svg || !nodeId || !window.MapPanel || !window.MapPanel._positions) return;
    const positions = window.MapPanel._positions;
    const pos = positions[nodeId];
    if (!pos) return;
    const px = PAD + pos.x * CELL + CELL / 2;
    const py = PAD + pos.y * CELL + CELL / 2;
    const svgNS = "http://www.w3.org/2000/svg";
    let marker = svg.querySelector("#full-map-current");
    if (!marker) {
      marker = document.createElementNS(svgNS, "g"); marker.setAttribute("id", "full-map-current"); marker.style.pointerEvents = "none";
      const ring = document.createElementNS(svgNS, "circle"); ring.setAttribute("r", "28"); ring.setAttribute("fill", "none"); ring.setAttribute("stroke", "rgba(255,230,160,0.12)"); ring.setAttribute("stroke-width", "4");
      const dot = document.createElementNS(svgNS, "circle"); dot.setAttribute("r", "10"); dot.setAttribute("fill", "#fff1b8"); dot.setAttribute("id", "full-map-current-dot");
      marker.appendChild(ring); marker.appendChild(dot);
      const root = svg.querySelector("g#map-root") || svg; root.appendChild(marker);
    }
    marker.style.transition = "transform 360ms cubic-bezier(.2,.9,.2,1)";
    marker.setAttribute("transform", `translate(${px},${py})`);
    const dotEl = marker.querySelector("#full-map-current-dot");
    if (dotEl) {
      dotEl.style.transition = "transform 260ms ease, opacity 260ms ease";
      dotEl.style.transform = "scale(1.25)"; dotEl.style.opacity = "0.95";
      setTimeout(() => { dotEl.style.transform = "scale(1)"; dotEl.style.opacity = "1"; }, 180);
    }
  }

  function updateCurrentIndicator(nodeId) {
    MP._drawMini && MP._drawMini();
    const overlay = document.getElementById("full-map-overlay");
    if (!overlay) return;
    const positions = MP._positions;
    if (!positions || !positions[nodeId]) return;
    const p = positions[nodeId];
    const px = PAD + p.x * CELL + CELL / 2;
    const py = PAD + p.y * CELL + CELL / 2;
    const svg = overlay.querySelector("svg");
    if (!svg) return;
    let curEl = svg.querySelector("#full-map-current");
    if (!curEl) {
      const svgNS = "http://www.w3.org/2000/svg";
      curEl = document.createElementNS(svgNS, "g"); curEl.setAttribute("id", "full-map-current"); curEl.style.pointerEvents = "none";
      const ring = document.createElementNS(svgNS, "circle"); ring.setAttribute("r", "26"); ring.setAttribute("fill", "none"); ring.setAttribute("stroke", "rgba(255,230,160,0.12)"); ring.setAttribute("stroke-width", "4"); ring.setAttribute("id", "full-map-current-ring");
      const dot = document.createElementNS(svgNS, "circle"); dot.setAttribute("r", "10"); dot.setAttribute("fill", "#fff1b8"); dot.setAttribute("id", "full-map-current-dot");
      curEl.appendChild(ring); curEl.appendChild(dot);
      const root = svg.querySelector("g#map-root") || svg; root.appendChild(curEl);
    }
    curEl.style.transition = "transform 360ms cubic-bezier(.2,.9,.2,1)";
    curEl.setAttribute("transform", `translate(${px},${py})`);
  }

  function centerOnNode(nodeId) {
    const positions = MP._positions;
    if (!positions || !positions[nodeId]) return;
    const p = positions[nodeId];
    const px = PAD + p.x * CELL + CELL / 2;
    const py = PAD + p.y * CELL + CELL / 2;
    MP._panZoomState = MP._panZoomState || { x: 0, y: 0, k: 1 };
    MP._panZoomState.x = -px; MP._panZoomState.y = -py;
    MP._drawMini && MP._drawMini();
  }

  // tooltip
  let tipEl = null;
  function ensureTip() { if (tipEl) return; tipEl = document.createElement("div"); tipEl.id = "map-node-tooltip"; tipEl.style.position = "fixed"; tipEl.style.pointerEvents = "none"; tipEl.style.background = "rgba(12,10,24,0.98)"; tipEl.style.border = "1px solid rgba(180,150,255,0.18)"; tipEl.style.padding = "6px 8px"; tipEl.style.borderRadius = "6px"; tipEl.style.color = "#f5f0ff"; tipEl.style.fontSize = "12px"; tipEl.style.zIndex = "60"; tipEl.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)"; document.body.appendChild(tipEl); }
  function showNodeTooltip(node, x, y) { ensureTip(); tipEl.innerHTML = `<strong style="display:block;margin-bottom:4px">${node.title}</strong><span style="opacity:0.9">${(node.exits && Object.keys(node.exits).length) ? Object.keys(node.exits).join(", ") : "No exits"}</span>`; tipEl.style.left = (x + 12) + "px"; tipEl.style.top = (y + 12) + "px"; tipEl.style.display = "block"; setTimeout(() => { if (tipEl) tipEl.style.display = "none"; }, 2200); }

  // reveal node
  function revealNode(nodeId) {
    MP._visited = MP._visited || new Set();
    if (MP._visited.has(nodeId)) return;
    MP._visited.add(nodeId);
    if (MP._nodes && MP._positions) {
      renderMini(MP._nodes, MP._positions);
      const overlay = document.getElementById("full-map-overlay");
      if (overlay) openFullMap();
    }
  }

  // rebuild public
  function rebuild() {
    const nodes = buildNodes();
    const positions = computePositions(nodes, State.get().currentNodeId || "start");
    MP._nodes = nodes; MP._positions = positions; MP._visited = MP._visited || new Set();
    MP._visited.add(State.get().currentNodeId || "start");
    ensurePanel();
    renderMini(nodes, positions);
    MP.rebuild = rebuild; MP.centerOnNode = centerOnNode; MP.revealNode = revealNode;
  }

  function ensurePanel() {
    if (document.getElementById(MAP_ID)) return document.getElementById(MAP_ID);
    const mid = document.getElementById("mid-row") || document.body;
    const panel = document.createElement("div");
    panel.id = MAP_ID; panel.style.gridColumn = "1 / -1"; panel.style.padding = "8px"; panel.style.borderRadius = "8px";
    panel.style.background = "rgba(10,8,20,0.95)"; panel.style.position = "relative"; panel.style.pointerEvents = "none";
    panel.innerHTML = `<div id="map-canvas" style="width:100%;height:220px;position:relative;"></div>`;
    mid.insertBefore(panel, mid.firstChild);
    return panel;
  }

  // init
  function init() {
    ensurePanel();
    rebuild();
    // clicking empty map area returns focus to console
    const canvas = document.getElementById("map-canvas");
    if (canvas) canvas.addEventListener("click", () => { const input = document.getElementById("console-input"); input && input.focus(); });
  }

  // expose
  MP.rebuild = rebuild; MP.init = init; MP._visited = MP._visited || new Set();
  return { rebuild, init, revealNode, centerOnNode };
})();

/* ---------------------------
   Initialization helper
   --------------------------- */
function initializeGame(worldNodes, triggers) {
  // inject provided world data into module
  if (worldNodes) {
    // deep assign STORY_NODES
    Object.keys(worldNodes).forEach(k => { STORY_NODES[k] = worldNodes[k]; });
  }
  if (triggers) {
    Object.keys(triggers).forEach(k => { TRIGGERS[k] = triggers[k]; });
  }
  normalizeStoryNodes && normalizeStoryNodes();
  MapPanel.init && MapPanel.init();
  Commands.init && Commands.init();
  Hotkeys.init && Hotkeys.init();
  Vitals.render && Vitals.render();
  Story.render && Story.render(StoryEngine.getCurrentNode());
  Log.render && Log.render();
}

/* ---------------------------
   Expose small API
   --------------------------- */
window.GameModule = {
  initializeGame,
  performAction,
  performNodeTrigger,
  handleItemClick,
  State,
  StoryEngine,
  MapPanel,
  Quests,
  Merchants,
  Factions,
  PvP,
  TRIGGERS
};

  /* ---------------------------
   Initialization
   --------------------------- */
function initializeGame() {
  normalizeStoryNodes();
  MapPanel.init();
  Commands.init();
  Hotkeys.init();
  Vitals.render();
  Story.render(StoryEngine.getCurrentNode());
  Log.render();
}

window.GameModule = {
  initializeGame,
  State,
  StoryEngine,
  MapPanel,
  Quests,
  Merchants,
  Factions,
  PvP,
  TRIGGERS,
  STORY_NODES
};


  </script>


</body>
  

</html>

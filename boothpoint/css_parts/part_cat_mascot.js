module.exports = `/*
  Cat mascot, pose states, image lightbox and tab-shot styling.

  These rules only ever existed in the BUILT boothpoint.css -- they were
  never back-ported into css_parts/, so the first rebuild after adding a
  new part silently dropped all 46 of them. Re-homed here so the build
  stays the single source of truth and this cannot happen again.
*/

.tab-shot-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--good);
  margin-bottom: 0.8rem;
}

.tab-shot {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 560px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid var(--border);
  cursor: zoom-in;
  transition: border-color 0.2s ease;
}

.tab-shot:hover, .tab-shot:focus-visible {
  border-color: var(--accent);
}

/* ========== SCREENSHOT LIGHTBOX ========== */
.img-lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(10, 9, 6, 0.86);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease;
  cursor: zoom-out;
}

.img-lightbox.open {
  opacity: 1;
  visibility: visible;
}

.img-lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
  cursor: default;
}

.img-lightbox-close {
  position: fixed;
  top: calc(18px + env(safe-area-inset-top, 0px));
  right: calc(18px + env(safe-area-inset-right, 0px));
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.img-lightbox-close svg { width: 18px; height: 18px; }

.img-lightbox-close:hover { background: rgba(255, 255, 255, 0.2); }

/* ========== CAT MASCOT ========== */
.cat-mascot {
  overflow: visible;
  animation: catFloat 3.4s ease-in-out infinite;
}

@keyframes catFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

.cat-eye {
  transform-box: fill-box;
  transform-origin: center;
  animation: catBlink 5s ease-in-out infinite;
}

.cat-eye-r { animation-delay: 0.08s; }

@keyframes catBlink {
  0%, 88%, 100% { transform: scaleY(1); }
  93% { transform: scaleY(0.12); }
}

.cat-ear {
  transform-box: fill-box;
  transform-origin: bottom center;
  animation: catEarTwitch 6.5s ease-in-out infinite;
}

.cat-ear-r { animation-delay: 0.15s; }

@keyframes catEarTwitch {
  0%, 82%, 100% { transform: rotate(0deg); }
  87% { transform: rotate(-6deg); }
  91% { transform: rotate(4deg); }
}

.cat-paw {
  transform-box: fill-box;
  transform-origin: 22px 24px;
  animation: catPawWave 2.4s ease-in-out infinite;
}

@keyframes catPawWave {
  0%, 65%, 100% { transform: rotate(0deg); }
  75% { transform: rotate(-20deg); }
  85% { transform: rotate(12deg); }
}

.cat-tail {
  transform-box: fill-box;
  transform-origin: 23px 33px;
  animation: catTailFlick 3.6s ease-in-out infinite;
}

@keyframes catTailFlick {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(8deg); }
  60% { transform: rotate(-5deg); }
}

.cat-head-sway {
  transform-box: fill-box;
  transform-origin: 16px 26px;
  animation: catHeadSway 4.2s ease-in-out infinite;
}

@keyframes catHeadSway {
  0%, 100% { transform: rotate(-2.5deg); }
  50% { transform: rotate(2.5deg); }
}

@media (prefers-reduced-motion: reduce) {
  .cat-mascot, .cat-eye, .cat-ear, .cat-paw, .cat-tail, .cat-head-sway { animation: none !important; }
}

.cat-nav { width: 24px; height: 24px; margin-right: 0.35rem; vertical-align: middle; }

.cat-footer { width: 22px; height: 22px; flex-shrink: 0; }

.bp-ai-trigger-icon .cat-ai { width: 24px; height: 24px; }

.cat-pose-wrap {
  position: absolute;
  left: 50%;
  bottom: 6%;
  width: clamp(78px, 30%, 120px);
  aspect-ratio: 32 / 44;
  transform: translateX(-50%);
  z-index: 1;
}

.cat-mascot.cat-posing {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-name: catFloat, catPoseCycle;
  animation-duration: 3.4s, 25s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

.pose-1 { animation-delay: 0s, 0s; }

.pose-2 { animation-delay: 0s, 2.5s; }

.pose-3 { animation-delay: 0s, 5s; }

.pose-4 { animation-delay: 0s, 7.5s; }

.pose-5 { animation-delay: 0s, 10s; }

.pose-6 { animation-delay: 0s, 12.5s; }

.pose-7 { animation-delay: 0s, 15s; }

.pose-8 { animation-delay: 0s, 17.5s; }

.pose-9 { animation-delay: 0s, 20s; }

.pose-10 { animation-delay: 0s, 22.5s; }

@keyframes catPoseCycle {
  0% { opacity: 0; }
  1.2% { opacity: 1; }
  8.8% { opacity: 1; }
  10% { opacity: 0; }
  100% { opacity: 0; }
}

.cat-head-sway-big {
  animation-name: catHeadTiltBig !important;
}

@keyframes catHeadTiltBig {
  0%, 100% { transform: rotate(-9deg); }
  50% { transform: rotate(3deg); }
}

@media (prefers-reduced-motion: reduce) {
  .cat-mascot.cat-posing { animation: none !important; opacity: 0; }
  .pose-1 { opacity: 1 !important; }
}

/* Persistent companion -- fixed to viewport so the mascot stays visible
   at any scroll position. Behavior cycle (40s): walks a patrol path,
   stops, sits, grooms its face, then spots a mouse and sprints after it
   before the mouse escapes and the cat resumes its walk. Never
   intercepts clicks. */
.cat-companion {
  position: fixed;
  left: 6vw;
  top: 70vh;
  width: 58px;
  height: 42px;
  z-index: 900;
  pointer-events: none;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.3));
  animation: catWalkPath 50s ease-in-out infinite;
}

.cat-companion-stage { position: relative; width: 100%; height: 100%; }

.cat-companion-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.cat-mascot.state-walk {
  animation-name: catWalkBob, stateWalkVis;
  animation-duration: 0.42s, 50s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

.cat-mascot.state-sit {
  animation-name: catFloat, stateSitVis;
  animation-duration: 3.4s, 50s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

/* catChaseBobIndiv animates the individual translate/rotate properties
   (not the transform shorthand) so it composes with catChaseLeap's
   transform below, instead of one animation overwriting the other. */
.cat-mascot.state-chase {
  animation-name: catChaseBobIndiv, stateChaseVis, catChaseLeap;
  animation-duration: 0.22s, 50s, 50s;
  animation-timing-function: ease-in-out, ease-in-out, ease-out;
  animation-iteration-count: infinite, infinite, infinite;
}

@keyframes catChaseBobIndiv {
  0%, 100% { translate: 0 0; rotate: 0deg; }
  50% { translate: 0 -2px; rotate: -3deg; }
}

@keyframes catChaseLeap {
  0%, 75% { transform: translate(0, 0) rotate(0deg); }
  77% { transform: translate(4px, -14px) rotate(12deg); }
  79% { transform: translate(8px, -3px) rotate(6deg); }
  81%, 100% { transform: translate(0, 0) rotate(0deg); }
}

/* State visibility animations for the 50s cycle:
   0%-41%: walk, 41%-70%: sit, 70%-86%: chase, 86%-98%: fight, 98%-100%: return */
@keyframes stateWalkVis {
  0% { opacity: 1; }
  40.9% { opacity: 1; }
  41% { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes stateSitVis {
  0% { opacity: 0; }
  41% { opacity: 0; }
  42% { opacity: 1; }
  69.9% { opacity: 1; }
  70% { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes stateChaseVis {
  0% { opacity: 0; }
  70% { opacity: 0; }
  71% { opacity: 1; }
  85.9% { opacity: 1; }
  86% { opacity: 0; }
  100% { opacity: 0; }
}

.chase-motion-lines {
  animation: speedLines 0.15s ease-in-out infinite;
}

.cat-look {
  transform-box: fill-box;
  transform-origin: 30px 22px;
  animation: catLookAround 5.5s ease-in-out infinite;
}

.cat-leg {
  transform-box: fill-box;
}

.cat-leg-front {
  transform-origin: 42px 30px;
  animation: legSwingFront 0.44s ease-in-out infinite;
}

.cat-leg-back {
  transform-origin: 20px 30px;
  animation: legSwingBack 0.44s ease-in-out infinite;
}

.cat-leg-chase-front {
  transform-origin: 44px 32px;
  animation: legSwingFront 0.2s ease-in-out infinite;
}

.cat-leg-chase-back {
  transform-origin: 18px 32px;
  animation: legSwingBack 0.2s ease-in-out infinite;
}

.groom-paw {
  transform-box: fill-box;
  transform-origin: 40px 41px;
  animation: groomPaw 40s ease-in-out infinite;
}

@keyframes groomPaw {
  0%, 63% { transform: translate(0, 0) rotate(0deg); }
  65% { transform: translate(6px, -23px) rotate(-25deg); }
  67% { transform: translate(6px, -19px) rotate(-10deg); }
  69% { transform: translate(6px, -23px) rotate(-25deg); }
  71%, 100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes catWalkPath {
  0%      { left: 6vw;  top: 68vh; }
  10%     { left: 16vw; top: 22vh; }
  20%     { left: 44vw; top: 14vh; }
  30%     { left: 68vw; top: 26vh; }
  41%     { left: 6vw;  top: 68vh; }
  70%     { left: 6vw;  top: 68vh; }
  74%     { left: 14vw; top: 74vh; }
  78%     { left: 28vw; top: 70vh; }
  82%     { left: 40vw; top: 62vh; }
  84%     { left: 44vw; top: 58vh; }
  86%     { left: 40vw; top: 60vh; }
  88%     { left: 36vw; top: 36vh; }
  98%     { left: 36vw; top: 36vh; }
  100%    { left: 6vw;  top: 68vh; }
}

@keyframes catWalkBob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(-2deg); }
}

@keyframes catLookAround {
  0%, 34%, 100% { transform: rotate(0deg); }
  38%, 40% { transform: rotate(16deg); }
  52%, 60% { transform: rotate(-16deg); }
}

/* The mouse -- appears only for the chase window, scurrying a short
   path just ahead of the cat's dash, then ducks away. */
.cat-mouse {
  position: fixed;
  left: 12vw;
  top: 64vh;
  width: 22px;
  height: 17px;
  z-index: 899;
  pointer-events: none;
  opacity: 0;
  animation: mousePath 50s ease-in-out infinite;
}

.cat-mouse-jiggle {
  width: 100%;
  height: 100%;
  animation: mouseJiggle 0.18s ease-in-out infinite;
}

@keyframes mousePath {
  0%, 70% { left: 10vw; top: 64vh; opacity: 0; }
  71% { left: 10vw; top: 64vh; opacity: 1; }
  75% { left: 22vw; top: 70vh; opacity: 1; }
  79% { left: 36vw; top: 66vh; opacity: 1; }
  83% { left: 48vw; top: 58vh; opacity: 1; }
  85% { left: 52vw; top: 56vh; opacity: 1; }
  87% { left: 52vw; top: 56vh; opacity: 0; }
  100% { left: 10vw; top: 64vh; opacity: 0; }
}

@keyframes mouseJiggle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-1.5px); }
}

/* The hole the mouse ducks into right as it escapes -- appears briefly
   at the mouse's final position, comic-strip style. */
.cat-mouse-hole {
  position: fixed;
  left: 52vw;
  top: 58vh;
  width: 20px;
  height: 12px;
  z-index: 898;
  pointer-events: none;
  opacity: 0;
  animation: mouseHoleVis 50s ease-in-out infinite;
}

@keyframes mouseHoleVis {
  0%, 86% { opacity: 0; }
  88%, 92% { opacity: 1; }
  100% { opacity: 0; }
}

/* ========== CAT FIGHT CLOUD ========== */
/* Cartoon-style fight cloud that appears when cats "fight" */
.cat-fight-cloud {
  position: fixed;
  left: 38vw;
  top: 36vh;
  width: 80px;
  height: 70px;
  z-index: 899;
  pointer-events: none;
  opacity: 0;
  animation: fightCloudVis 50s ease-in-out infinite;
}

@keyframes fightCloudVis {
  0%, 88% { opacity: 0; transform: scale(0.3); }
  90% { opacity: 1; transform: scale(0.5); }
  92% { opacity: 1; transform: scale(1.1); }
  94% { opacity: 1; transform: scale(0.95); }
  96% { opacity: 1; transform: scale(1.05); }
  98% { opacity: 1; transform: scale(0.9); }
  100% { opacity: 0; transform: scale(0.3); }
}

/* Fight cloud puffs that expand outward */
.fight-puff {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff 0%, #e8e8e8 40%, #d0d0d0 70%, #b8b8b8 100%);
  animation: puffExpand 50s ease-in-out infinite;
}

.fight-puff-1 {
  width: 50px;
  height: 45px;
  left: 15px;
  top: 12px;
  animation-delay: 0s;
}

.fight-puff-2 {
  width: 40px;
  height: 38px;
  left: 0;
  top: 20px;
  animation-delay: 0.1s;
}

.fight-puff-3 {
  width: 45px;
  height: 42px;
  left: 35px;
  top: 25px;
  animation-delay: 0.15s;
}

.fight-puff-4 {
  width: 35px;
  height: 32px;
  left: 20px;
  top: 0;
  animation-delay: 0.05s;
}

.fight-puff-5 {
  width: 38px;
  height: 35px;
  left: 40px;
  top: 5px;
  animation-delay: 0.2s;
}

@keyframes puffExpand {
  0%, 88% { transform: scale(0); opacity: 0; }
  90% { transform: scale(0.4); opacity: 0.8; }
  92% { transform: scale(1.2); opacity: 1; }
  94% { transform: scale(0.8); opacity: 0.9; }
  96% { transform: scale(1.1); opacity: 1; }
  98% { transform: scale(0.6); opacity: 0.7; }
  100% { transform: scale(0); opacity: 0; }
}

/* Fight stars that pop out */
.fight-star {
  position: absolute;
  font-size: 12px;
  animation: starPop 50s ease-in-out infinite;
}

.fight-star-1 { left: 10px; top: 5px; animation-delay: 0.3s; }
.fight-star-2 { left: 60px; top: 8px; animation-delay: 0.5s; }
.fight-star-3 { left: 5px; top: 50px; animation-delay: 0.7s; }
.fight-star-4 { left: 65px; top: 45px; animation-delay: 0.4s; }
.fight-star-5 { left: 35px; top: -5px; animation-delay: 0.6s; }

@keyframes starPop {
  0%, 89% { opacity: 0; transform: scale(0) rotate(0deg); }
  91% { opacity: 1; transform: scale(1.3) rotate(45deg); }
  93% { opacity: 1; transform: scale(0.9) rotate(90deg); }
  95% { opacity: 1; transform: scale(1.1) rotate(135deg); }
  97% { opacity: 0.7; transform: scale(0.7) rotate(180deg); }
  100% { opacity: 0; transform: scale(0) rotate(220deg); }
}

/* Fight action lines */
.fight-lines {
  position: absolute;
  inset: 0;
  animation: fightLinesSpin 50s linear infinite;
}

.fight-line {
  position: absolute;
  width: 2px;
  height: 15px;
  background: var(--ink);
  opacity: 0;
  animation: fightLineFlash 50s ease-in-out infinite;
}

.fight-line-1 { left: 50%; top: 0; transform: rotate(0deg); animation-delay: 0.2s; }
.fight-line-2 { left: 75%; top: 15%; transform: rotate(45deg); animation-delay: 0.4s; }
.fight-line-3 { left: 85%; top: 50%; transform: rotate(90deg); animation-delay: 0.3s; }
.fight-line-4 { left: 75%; top: 85%; transform: rotate(135deg); animation-delay: 0.5s; }
.fight-line-5 { left: 50%; top: 95%; transform: rotate(180deg); animation-delay: 0.25s; }
.fight-line-6 { left: 25%; top: 85%; transform: rotate(225deg); animation-delay: 0.45s; }
.fight-line-7 { left: 15%; top: 50%; transform: rotate(270deg); animation-delay: 0.35s; }
.fight-line-8 { left: 25%; top: 15%; transform: rotate(315deg); animation-delay: 0.55s; }

@keyframes fightLineFlash {
  0%, 89% { opacity: 0; height: 0; }
  91% { opacity: 0.6; height: 12px; }
  93% { opacity: 0.8; height: 18px; }
  95% { opacity: 0.5; height: 10px; }
  97% { opacity: 0.3; height: 5px; }
  100% { opacity: 0; height: 0; }
}

@keyframes fightLinesSpin {
  0%, 88% { transform: rotate(0deg); }
  90%, 98% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}

/* Black cat moves to white cat's position for fight */
.cat-companion.state-fight {
  animation: catWalkToFight 50s ease-in-out infinite;
}

@keyframes catWalkToFight {
  0%, 85% { left: 6vw; top: 68vh; }
  88% { left: 36vw; top: 36vh; }
  98% { left: 36vw; top: 36vh; }
  100% { left: 6vw; top: 68vh; }
}

/* White cat reacts to fight */
.cat-companion-white.state-fight {
  animation: catReactToFight 50s ease-in-out infinite;
}

@keyframes catReactToFight {
  0%, 87% { transform: translateY(0) rotate(0deg); }
  89% { transform: translateY(-5px) rotate(-8deg); }
  91% { transform: translateY(-3px) rotate(5deg); }
  93% { transform: translateY(-4px) rotate(-3deg); }
  95% { transform: translateY(-2px) rotate(2deg); }
  97%, 100% { transform: translateY(0) rotate(0deg); }
}

@media (max-width: 640px) {
  .cat-companion, .cat-companion-white, .cat-mouse, .cat-mouse-hole, .cat-fight-cloud { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .cat-companion { animation: none; }
  .cat-companion-white { animation: none; }
  .cat-mouse, .cat-mouse-hole { animation: none; opacity: 0; }
  .cat-fight-cloud { animation: none; opacity: 0; }
  .cat-mascot.state-walk, .cat-mascot.state-chase { animation: none; opacity: 0; }
  .cat-mascot.state-sit { animation: none; opacity: 1; }
  .cat-look { animation: none; }
  .cat-leg-front, .cat-leg-back, .cat-leg-chase-front, .cat-leg-chase-back { animation: none; }
  .groom-paw { animation: none; }
  .cat-mouse-jiggle { animation: none; }
  .fight-puff, .fight-star, .fight-line { animation: none; opacity: 0; }
}

.card-peek {
  position: absolute;
  top: -14px;
  right: 14px;
  width: 28px;
  height: 28px;
  opacity: 0;
  transform: translateY(8px) scale(0.85);
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 0.84, 0.44, 1);
  animation: none !important;
  pointer-events: none;
  z-index: 2;
}

.feature:hover .card-peek {
  opacity: 1;
  transform: translateY(-4px) scale(1);
}`;

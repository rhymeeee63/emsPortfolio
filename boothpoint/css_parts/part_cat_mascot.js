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
  animation: catWalkPath 40s ease-in-out infinite;
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
  animation-duration: 0.42s, 40s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

.cat-mascot.state-sit {
  animation-name: catFloat, stateSitVis;
  animation-duration: 3.4s, 40s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

/* catChaseBobIndiv animates the individual translate/rotate properties
   (not the transform shorthand) so it composes with catChaseLeap's
   transform below, instead of one animation overwriting the other. */
.cat-mascot.state-chase {
  animation-name: catChaseBobIndiv, stateChaseVis, catChaseLeap;
  animation-duration: 0.22s, 40s, 40s;
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
  76%     { left: 6vw;  top: 68vh; }
  80%     { left: 14vw; top: 74vh; }
  84%     { left: 28vw; top: 70vh; }
  88%     { left: 40vw; top: 62vh; }
  90%     { left: 44vw; top: 58vh; }
  93%     { left: 40vw; top: 60vh; }
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
  animation: mousePath 40s ease-in-out infinite;
}

.cat-mouse-jiggle {
  width: 100%;
  height: 100%;
  animation: mouseJiggle 0.18s ease-in-out infinite;
}

@keyframes mousePath {
  0%, 75% { left: 10vw; top: 64vh; opacity: 0; }
  76% { left: 10vw; top: 64vh; opacity: 1; }
  80% { left: 22vw; top: 70vh; opacity: 1; }
  84% { left: 36vw; top: 66vh; opacity: 1; }
  88% { left: 48vw; top: 58vh; opacity: 1; }
  90% { left: 52vw; top: 56vh; opacity: 1; }
  92% { left: 52vw; top: 56vh; opacity: 0; }
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
  animation: mouseHoleVis 40s ease-in-out infinite;
}

@keyframes mouseHoleVis {
  0%, 90% { opacity: 0; }
  92%, 96% { opacity: 1; }
  100% { opacity: 0; }
}

@media (max-width: 640px) {
  .cat-companion, .cat-mouse, .cat-mouse-hole { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .cat-companion { animation: none; }
  .cat-mouse, .cat-mouse-hole { animation: none; opacity: 0; }
  .cat-mascot.state-walk, .cat-mascot.state-chase { animation: none; opacity: 0; }
  .cat-mascot.state-sit { animation: none; opacity: 1; }
  .cat-look { animation: none; }
  .cat-leg-front, .cat-leg-back, .cat-leg-chase-front, .cat-leg-chase-back { animation: none; }
  .groom-paw { animation: none; }
  .cat-mouse-jiggle { animation: none; }
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

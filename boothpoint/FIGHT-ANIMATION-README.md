# Cat Fight Animation Implementation

## Overview
Added a cartoon-style fight animation between the black and white cat mascots in the boothpoint project. After the black cat chases the mouse, it moves to the white cat's position and they have a playful fight with a cartoon smoke cloud effect.

## Animation Sequence (50-second cycle)

### Phase 1: Walking Patrol (0% - 41%)
- Black cat walks around the screen following a patrol path
- White cat sits calmly grooming itself

### Phase 2: Sitting/Grooming (41% - 70%)
- Black cat settles down and grooms its face
- White cat continues grooming

### Phase 3: Mouse Chase (70% - 86%)
- Mouse appears and scurries across the screen
- Black cat spots the mouse and chases it
- Mouse escapes into a hole

### Phase 4: Fight Sequence (86% - 98%)
- Black cat moves to the white cat's position (right side of screen)
- Cartoon fight cloud appears with:
  - Puff clouds expanding outward
  - Stars (⭐ 💥 ✨ 💫 ⚡) popping out
  - Action lines spinning around
- White cat reacts with startled movements
- Both cats "fight" inside the cloud

### Phase 5: Reset (98% - 100%)
- Fight cloud disappears
- Black cat returns to starting position
- Both cats resume normal behavior

## Files Modified

### CSS Files
- `boothpoint-consolidated.css` (source of truth)
- `boothpoint.css` (generated)
- `css_parts/part_cat_mascot.js` (CSS module)

### HTML Files
- `boothpoint.html`

## Key Features

### Fight Cloud Animation
- **5 puff clouds** with radial gradient backgrounds
- **5 emoji stars** that pop and rotate
- **8 action lines** that spin around the cloud
- All animations synchronized to the 50-second cycle

### Timing Updates
All animations updated from 40s to 50s cycle:
- `catWalkPath` - black cat movement
- `catFacing` - cat direction flipping
- `mousePath` - mouse movement
- `mouseHoleVis` - mouse hole visibility
- State visibility animations (walk, sit, chase)

### Responsive Design
- Fight cloud hidden on mobile devices (≤640px)
- Reduced motion support for accessibility
- All animations respect `prefers-reduced-motion`

## How to Test

1. Open `boothpoint.html` in a browser
2. Watch the animation cycle (50 seconds total):
   - First 41 seconds: Black cat walks and grooms
   - 41-70 seconds: Black cat sits
   - 70-86 seconds: Mouse appears and gets chased
   - 86-98 seconds: **Fight sequence with smoke cloud!**
   - 98-100 seconds: Reset

## Technical Details

### CSS Keyframes Added
- `fightCloudVis` - Controls fight cloud appearance
- `puffExpand` - Animates cloud puffs
- `starPop` - Animates emoji stars
- `fightLineFlash` - Animates action lines
- `fightLinesSpin` - Rotates action lines
- `catWalkToFight` - Moves black cat to white cat
- `catReactToFight` - White cat's reaction animation
- `stateWalkVis` - Walk state visibility
- `stateSitVis` - Sit state visibility
- `stateChaseVis` - Chase state visibility

### HTML Elements Added
- `.cat-fight-cloud` container
- 5 `.fight-puff` elements
- 5 `.fight-star` elements with emojis
- 8 `.fight-line` elements

## Notes

- The animation is purely CSS-based (no JavaScript required)
- All timing is synchronized to the 50-second cycle
- The fight cloud appears at the white cat's position (right: 4vw, top: 38vh)
- Black cat's path updated to include movement to white cat's position
- Mouse timing adjusted to fit within the new 50-second cycle

# Implementation Plan - Mystic Awakening

A dark fantasy spiritual app focused on inner power, meditation, and interactive mystical experiences.

## Scope & Non-Goals
- **Scope**: Core storytelling UI, energy/aura system, meditation timer, music player, wisdom journal, and self-care sections.
- **Non-Goals**: Real-time server-side AI generation (vocal/song generation will be simulated or use pre-defined assets/web APIs), multi-user social features, or cloud persistence (will use localStorage).

## Assumptions & Open Questions
- **Persistence**: Using `localStorage` for energy levels, progress, and journal entries.
- **Audio**: Will use standard HTML5 Audio API for ambient loops and "song" playback. AI-generated vocals will be pre-scripted/simulated or use Browser Synthesis for narration if suitable.
- **Visuals**: Will rely on CSS animations, SVGs, and potentially Canvas/Three.js (if lightweight) for "aura" and "particles" effects.

## Affected Areas
- **Frontend**: All UI components, state management (Aura/Energy), and Audio Engine.
- **Assets**: Sounds, icons, and theme-specific styling (Purple/Blue/Dark).

## Implementation Phases

### Phase 1: Foundation & Theme (frontend_engineer)
- Set up a global theme in `index.css` or a ThemeProvider (Dark/Purple/Mystical palette).
- Define global state for `energyLevel`, `spiritRank` (Calm to Divine), and `unlockedItems`.
- Create a reusable Layout component with cinematic transitions (fades, glows).

### Phase 2: Core Mystical UI Components (frontend_engineer)
- **Aura Display**: A component that changes visual intensity based on the user's energy level.
- **Wisdom Scroll**: A component for displaying ancient teachings and daily quotes.
- **Energy Tracker**: A visual bar or orb representing current spiritual progress.

### Phase 3: Music & Ritual Audio System (frontend_engineer)
- Implement `MusicPlayer` component with Play/Pause, Loop, and Volume controls.
- Create a "Ritual Mode" where ambient chants and cinematic sounds play together.
- Simulate "Song Generation" using a template-based approach with pre-selected mystical tracks and text-to-speech for lyrics.

### Phase 4: Spiritual Practices & Storytelling (frontend_engineer)
- **Meditation/Breathing**: Interactive timers with visual breathing cues and soft glowing water effects.
- **Warning System**: Logic to trigger "Negative Energy" visual effects (darker UI, screen shake, red tints) when users engage in "distractions."
- **Narrative Scenes**: Step-by-step guided experiences for Awakening and Sacrifice systems.

### Phase 5: Self-Care & Journal (quick_fix_engineer)
- Implement "The Secret of Youthful Energy" section with its specific moonlight/silver visual style.
- Create the "Spirit Journal" for reflection challenges and daily thoughts.
- Add "Aura Customization" (choosing colors/effects).

### Phase 6: Polishing & Final cinematic Touch (frontend_engineer)
- Refine animations for "Divine Spirit" level unlocks.
- Ensure headphone immersive mode tips/logic.
- Final bug fixes and local storage verification.

## Specialist Ownership
- **frontend_engineer**: Responsible for Phases 1, 2, 3, 4, and 6 (Core logic, UI, and Audio).
- **quick_fix_engineer**: Responsible for Phase 5 (Content-heavy sections, Journal, and minor UI adjustments).

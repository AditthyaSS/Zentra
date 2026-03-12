<div align="center">

# 🧱 LLM Minecraft

### *Build AI pipelines like you're building a world.*

<br />

```
  ██╗     ██╗     ███╗   ███╗
  ██║     ██║     ████╗ ████║
  ██║     ██║     ██╔████╔██║
  ██║     ██║     ██║╚██╔╝██║
  ███████╗███████╗██║ ╚═╝ ██║
  ╚══════╝╚══════╝╚═╝     ╚═╝
  ███╗   ███╗██╗███╗   ██╗███████╗ ██████╗██████╗  █████╗ ███████╗████████╗
  ████╗ ████║██║████╗  ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
  ██╔████╔██║██║██╔██╗ ██║█████╗  ██║     ██████╔╝███████║█████╗     ██║
  ██║╚██╔╝██║██║██║╚██╗██║██╔══╝  ██║     ██╔══██╗██╔══██║██╔══╝     ██║
  ██║ ╚═╝ ██║██║██║ ╚████║███████╗╚██████╗██║  ██║██║  ██║██║        ██║
  ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝
```

<br />

**A real-time strategy game where you visually build and connect LLM agent pipelines in a rich 3D isometric world.**

Each building is a project. Each agent inside is an LLM node. Place buildings, configure agents, wire them together, and watch AI pipelines run.

<br />

[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=npm&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

</div>

<br />

## 🌍 The World

> *Imagine Minecraft meets LangChain — but everything is a building.*

Step into a **low-poly 3D isometric town** filled with Minecraft-style buildings, wandering animals, glowing billboards, and winding stone paths. Every building represents a **project**, and inside each building, **AI agents** sit at desks, processing data through animated pipelines.

<br />

<div align="center">

### 🏘️ Town View

</div>

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   🏠 Buildings with Minecraft grass bases, tan walls, red roofs     │
│   🪧 Lit billboard signs with pixel-font project names              │
│   🐷 Wandering pigs, sheep, and cats with idle AI                   │
│   🌲 Low-poly layered trees and wooden fences                       │
│   🛤️ Stone paths connecting buildings                                │
│   💡 Street lamps with animated glow                                │
│   💜 Pulsing glow rings on active buildings                         │
│   💨 Smoke particles from chimneys                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

<br />

<div align="center">

### 🏢 Office Interior

</div>

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   🟩 Green carpet floor with grid lines                             │
│   🗄️ Filing cabinets with drawer handles                            │
│   🎈 Blue balloon clusters in corners                               │
│   🕐 Digital clock + analog clock with animated hands               │
│   📊 Metrics screens with bar charts and live data                  │
│   🔮 Rotating purple crystal + pulsing status dome                  │
│   🤖 Colorful robot agents at detailed desks                        │
│   💬 Chat-style agent panel with streaming output                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

<br />

---

## 🤖 Agent System

Each agent is a **robot character** with its own color identity:

| Agent Role | Color | Model | Purpose |
|:---:|:---:|:---:|:---|
| 👑 **Lead** | 🟡 Gold | `claude-3-5-sonnet` | Coordinates and reviews work |
| 🔍 **Researcher** | 🔵 Blue | `claude-3-5-sonnet` | Analyzes data and provides insights |
| ⚙️ **Worker** | 🟢 Green | `gpt-4o` | Executes tasks efficiently |
| 🎯 **Critic** | 🩷 Pink | `claude-3-5-sonnet` | Reviews and finds issues |
| ✍️ **Writer** | 🟣 Purple | `gpt-4o` | Creates documentation |

Agents sit at **desks with monitors, keyboards, coffee mugs, and pencils**. They **bob and swing their arms** when thinking, and a **status orb** floats above each one:

- ⚪ **Grey** = Idle
- 🔵 **Blue** = Thinking
- 🟢 **Green** = Done
- 🔴 **Red** = Error

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🌍 Town View
- 🏠 7 detailed buildings with grass bases
- 🪧 Billboard signs with agent counts
- 🐷🐑🐱 Wandering animals with AI
- 🗺️ Live minimap (bottom-right)
- 🛠️ Toolbar: Select, Move, Place, Flag, Build, Config
- 💰 Gold counter + session/today dots
- 🔍 Zoom indicator
- 📁 Project sidebar with status dots

</td>
<td width="50%">

### 🏢 Office View
- 🤖 Colorful robot agents at desks
- ⚡ Animated wire connections with traveling dots
- 📊 Wall-mounted metrics screens
- 🕰️ Animated analog + digital clocks
- 🎈 Blue balloon decorations
- 🔮 Rotating purple crystal
- 💬 Chat-style agent panel
- ▶️ Mock pipeline runner with token streaming

</td>
</tr>
</table>

---

## 🎮 Controls

| Action | Input |
|:---|:---|
| **Rotate camera** | Left-click + drag |
| **Pan camera** | Right-click + drag |
| **Zoom** | Scroll wheel |
| **Enter building** | Click a building |
| **Select agent** | Click a desk (in office) |
| **Exit office** | Click `← BACK` button |
| **Run pipeline** | Click `▶ RUN ALL` |
| **Add agent** | Click `+ ADD AGENT` |

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/AditthyaSS/llm-Minecraft.git
cd llm-Minecraft

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser. 🎮

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────┐
│                                              │
│   Framework      React 18 + Vite             │
│   3D Engine      Three.js r158+              │
│   3D Helpers     @react-three/fiber + drei   │
│   State          Zustand                     │
│   Styling        Tailwind CSS                │
│   Animation      GSAP (camera transitions)   │
│   Post-FX        @react-three/postprocessing │
│   Fonts          Press Start 2P + Inter      │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
llm-minecraft/
├── 📄 index.html
├── ⚙️ vite.config.js
│
├── src/
│   ├── 🎮 App.jsx                    # Root — Town ↔ Office
│   ├── 🚀 main.jsx                   # Entry point
│   ├── 🎨 index.css                  # Global styles
│   │
│   ├── game/
│   │   ├── core/
│   │   │   ├── 🔧 Engine.jsx         # R3F Canvas + postprocessing
│   │   │   ├── 💡 Lighting.jsx       # Scene lighting
│   │   │   └── 📷 CameraRig.jsx      # Camera + 360° controls
│   │   │
│   │   ├── world/
│   │   │   ├── 🌍 Ground.jsx         # 20x20 tiled ground
│   │   │   ├── 🟩 GrassTile.jsx      # Minecraft grass block
│   │   │   ├── 🏠 Building.jsx       # Full 3D building
│   │   │   ├── 🪧 Billboard.jsx      # Lit sign with text
│   │   │   ├── 🌲 Tree.jsx           # Low-poly tree
│   │   │   ├── 🛤️ Road.jsx           # Stone path
│   │   │   ├── 🏗️ Fence.jsx          # Perimeter fence
│   │   │   └── 💡 Lamp.jsx           # Street lamp
│   │   │
│   │   ├── animals/
│   │   │   ├── 🐷 Pig.jsx            # Pink pig
│   │   │   ├── 🐑 Sheep.jsx          # White sheep
│   │   │   ├── 🐱 Cat.jsx            # Orange cat
│   │   │   └── 🎯 AnimalController   # Wandering AI
│   │   │
│   │   ├── office/
│   │   │   ├── 🏢 OfficeRoom.jsx     # Room with props
│   │   │   ├── 💺 AgentDesk.jsx      # Desk + monitor + robot
│   │   │   ├── 🤖 RobotCharacter.jsx # Colorful robot
│   │   │   └── ⚡ Wire.jsx           # Animated connections
│   │   │
│   │   ├── scenes/
│   │   │   ├── 🌆 TownScene.jsx      # Full town assembly
│   │   │   └── 🏢 OfficeScene.jsx    # Office assembly
│   │   │
│   │   └── utils/
│   │       ├── 🎨 colors.js          # Color palette
│   │       ├── 📐 geometry.js        # Geometry helpers
│   │       └── 💬 mockStream.js      # Fake token streaming
│   │
│   ├── ui/
│   │   ├── 🎮 HUD.jsx               # Top toolbar
│   │   ├── 📁 Sidebar.jsx            # Project list
│   │   ├── 🤖 AgentPanel.jsx         # Agent chat panel
│   │   ├── 🗺️ Minimap.jsx            # Overhead minimap
│   │   ├── 🏗️ BuildMenu.jsx          # Node type picker
│   │   ├── ⬅️ BackButton.jsx         # Return to town
│   │   └── 📢 Toast.jsx              # Notifications
│   │
│   └── store/
│       └── 🗃️ gameStore.js           # Zustand state
│
└── 40+ files total
```

---

## 🎭 Mock Pipeline Demo

The pipeline runner simulates agent activity with **fake token streaming**:

```
┌───────────┐    ⚡ wire    ┌───────────┐
│ 👑 Lead    │ ──────────▸ │ ⚙️ Worker  │
│ thinking.. │   dot moves  │ idle       │
│ ▌         │              │            │
└───────────┘              └───────────┘
```

1. Click `▶ RUN ALL` to start the mock pipeline
2. Agents activate **sequentially** — Lead thinks first, then Worker
3. Each agent streams **character-by-character** output to the chat panel
4. Wires show **animated dots** traveling between connected agents
5. Status orbs change: ⚪ → 🔵 → 🟢

---

## 🗺️ Roadmap

- [x] **Phase 1** — Visual shell with mocked AI *(current)*
- [ ] **Phase 2** — Real API calls (Anthropic, OpenAI, Gemini)
- [ ] **Phase 3** — Drag-to-connect wires
- [ ] **Phase 4** — Persistence & user accounts
- [ ] **Phase 5** — Multi-user collaboration

---

<div align="center">

## 🎮 Enter the World

```
   ╔════════════════════════════════════╗
   ║                                    ║
   ║   🏠  🏠  🏠  🪧  🏠  🏠  🏠    ║
   ║         🌲  🐷  🌲                ║
   ║   🛤️ ═══════════════ 🛤️           ║
   ║         🌲  🐑  🌲                ║
   ║   🏠  🏠  🏠  🪧  🏠  🏠  🏠    ║
   ║                                    ║
   ╚════════════════════════════════════╝
```

**Built with 💜 and lots of boxes**

*Every mesh is a `<boxGeometry>`. No external 3D models. Pure code.*

---

**[⬆ Back to Top](#-llm-minecraft)**

</div>

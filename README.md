# AI-Assisted Engineering Demo

## Project Purpose
This repository demonstrates AI-assisted software engineering in VS Code using GitHub Copilot with agent-style delegation.

The app is intentionally small and demo-friendly: a frontend-only todo app built to show fast, visible progress in a live session.

## Implemented Features
- Add a task from a text input
- Mark tasks as complete/incomplete
- Filter tasks by All, Active, Completed
- Remove tasks
- Show active and total task counts
- Context-aware empty-state messaging

## Stack
- React 18
- TypeScript 5
- Vite 5
- Minimal CSS
- Local component state only (no backend)

## How To Run
Prerequisites:
- Node.js 18+
- npm

Install and start development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## How Agents Were Used In This Demo
The demo was run as a simple three-agent workflow:

1. Task Planning Agent
- Defined MVP scope for a 10-15 minute live demo
- Produced an implementation plan and minimal file structure
- Prepared handoff notes for implementation and documentation

2. Frontend Development Agent
- Scaffolded the React + TypeScript app
- Implemented add, complete, filter, and remove behavior using local state
- Applied small UI polish improvements (spacing, labels, empty states, completed-task styling)

3. README Update Agent
- Inspected the actual codebase and scripts
- Updated this README to match what is implemented now

## Possible Next Steps
- Persist todos in localStorage
- Add task editing
- Add a clear-completed action
- Add basic tests for core interactions
- Improve keyboard and screen-reader support further

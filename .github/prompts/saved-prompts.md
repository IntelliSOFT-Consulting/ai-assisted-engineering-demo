## Prompt 1: Planning
Act as the Task Planning Agent.

I want to build a very small todo app for a live demo of AI-assisted software engineering in VS Code using GitHub Copilot.

Please:
- define the MVP scope for a 10–15 minute demo
- propose a step-by-step implementation plan
- suggest a minimal file structure
- include handoff notes for a Frontend Agent and a README Agent

## Prompt 2: Refine for live pacing
Act as the Task Planning Agent.

Refine the plan so that the demo clearly highlights:
1. planning
2. execution by a frontend-focused agent
3. documentation by a README-focused agent

Keep the implementation small enough to complete during a live session.

---

## Prompt 3: Frontend implementation
Act as the Frontend Development Agent.

Using the agreed MVP plan, implement the todo app in React + TypeScript.

Constraints:
- keep the UI simple and clean
- use local state
- include add, complete, filter, and delete features
- avoid unnecessary dependencies
- make changes in small, understandable steps
- explain what you are changing before generating code

---

## Prompt 4: UI polish
Act as the Frontend Development Agent.

Now make the todo app slightly more polished for a live demo without increasing complexity.

Focus on:
- spacing
- button labels
- empty-state message
- clear completed-task styling
- small usability improvements only

---

## Prompt 5: Add persistence
Act as the Frontend Development Agent.

Add simple localStorage persistence so tasks remain after refresh.

Keep the implementation lightweight and explain the changes clearly.

---

## Prompt 6: README update
Act as the README Update Agent.

Inspect the current project and update the README to reflect the implemented todo app.

Include:
- project purpose
- implemented features
- stack
- how to run
- how agents were used in this demo
- possible next steps

---

## Prompt 7: Handoff to frontend
Summarize the implementation plan as a handoff to the Frontend Development Agent.

Include:
- objective
- files likely to be created
- acceptance criteria
- what not to do

---

## Prompt 8: Handoff to README
Summarize the current implementation as a handoff to the README Update Agent.

Include:
- features confirmed in code
- commands to run
- limitations
- next steps worth documenting

---

## Prompt 9: Commit messages
Generate concise conventional commit messages for the work completed so far.

Group them into:
- planning/setup
- frontend implementation
- docs/readme

---

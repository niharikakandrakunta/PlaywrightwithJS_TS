# agent-customization SKILL

**Purpose**
- Provide a reusable, workspace-scoped template and procedure for creating or updating a `SKILL.md` that documents an agent workflow, extraction rules, decision points, and acceptance criteria.

**When to use**
- Converting a repeated multi-step conversation or coding workflow into a reusable skill.
- Creating workspace-scoped guidance the local Copilot/agent should follow.

**Scope**
- Workspace-scoped by default (save under `.vscode/skills/<skill-name>/SKILL.md`). Can be adapted to personal scope if requested.

**Inputs**
- Conversation history or examples demonstrating the workflow.
- Relevant workspace files or folder structure showing where outputs are kept.

**Outputs**
- A `SKILL.md` file containing: name, description, step-by-step workflow, decision branching, quality checks, example prompts, and suggested follow-ups (e.g., `prompt.md`, `agent.md`).

**Step-by-step procedure**
1. Review the conversation and workspace to identify the concrete, repeatable steps the user follows.
2. Extract decision points and branching logic ("if X then do A else do B").
3. Define quality criteria and completion checks (what constitutes `done`).
4. Draft the skill: include concise name, short description, inputs/outputs, step list, branch logic, and tests/examples.
5. Save the draft as `.vscode/skills/<skill-name>/SKILL.md` in the workspace.
6. Identify ambiguous or weak parts and ask 1–3 targeted clarifying questions.
7. Iterate until acceptance criteria are met.

**Template (use and adapt)**
- Title: short readable name.
- One-line purpose: what this skill automates or standardizes.
- When to use: triggers and scope.
- Inputs / Outputs: explicit required artifacts.
- Steps: numbered, actionable, and idempotent when possible.
- Decision points: short if/then/else bullets or a small table.
- Quality checks: explicit acceptance criteria and simple verification commands.
- Example prompts: 2–4 user prompts to trigger the skill.
- Related files: recommended follow-ups (`prompt.md`, `agent.md`, test harness).

**Decision and branching guidance**
- Keep branches shallow and explicit.
- Use decision bullets like: "If X (file exists), then Y; otherwise, ask user whether to create X." 
- For complex branching, reference a small flow listing (step → condition → action).

**Quality criteria / completion checks**
- Each major step has an objective verification (e.g., file saved at path, tests pass, linter OK).
- Include at least one example prompt that the user can run to validate the skill.

**Example prompts to try**
- "Create a SKILL.md for the release workflow that runs tests, builds, and publishes artifacts." 
- "Extract the debugging checklist we used in this conversation into a skill and save it workspace-scoped." 
- "Draft a SKILL.md that standardizes how to add new E2E tests, including branching when a fixture is missing."

**Suggested follow-ups / related customizations**
- Add a `prompt.md` for exact phrasing the user should give to invoke the skill.
- Add an `agent.md` if the skill should run with specific tools or permissions.
- Add small example tests or a `try-it` script demonstrating the workflow.

**Storage & naming**
- Recommended path: `.vscode/skills/<skill-name>/SKILL.md`.
- Keep skill names kebab-case and short (e.g., `add-e2e-test`, `release-workflow`).

**Notes on iteration**
- After saving, run one validation prompt and record which steps needed clarification.
- Update the `SKILL.md` to resolve ambiguities; repeat until the skill runs without additional questions.

---

If you want, I can:
- Convert this into a `prompt.md` and `agent.md` pair now.
- Move this file into the extension folder instead of the workspace.
- Tailor the template for a specific workflow (give me the conversation or steps to extract).

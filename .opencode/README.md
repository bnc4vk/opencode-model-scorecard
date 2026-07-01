# OpenCode Cost Predictor Home UI

This repo currently contains a project-local OpenCode TUI plugin focused on one
form factor: a persistent home-screen status line shown before the user sends a
prompt.

The plugin lives at:

```text
.opencode/plugins/cost-predictor-home.tsx
```

It is enabled by:

```text
.opencode/tui.json
```

## Current UI

The plugin renders this placeholder line on OpenCode's home screen:

```text
model score: X | task-aware model score: Y | task-aware predicted cost: Z
```

The line is intentionally centered under the home prompt.

## Deferred Data Sources

The current values are static placeholders. The intended data flow is:

- `model score`: fetched from an authoritative benchmark or model scoring source
  for software development tasks.
- `task-aware model score`: computed from the selected model plus current prompt
  or task context.
- `task-aware predicted cost`: computed from the selected model, prompt/task
  features, repo context, and historical task traces.

Those data sources are deliberately out of scope for this UI-only form factor.

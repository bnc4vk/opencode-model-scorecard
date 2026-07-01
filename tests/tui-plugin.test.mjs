import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const homePlugin = path.join(root, ".opencode", "plugins", "cost-predictor-home.tsx");
const tuiConfig = path.join(root, ".opencode", "tui.json");

test("tui config loads only the persistent home-screen plugin", () => {
  const config = JSON.parse(readFileSync(tuiConfig, "utf8"));

  assert.deepEqual(config.plugin, ["./plugins/cost-predictor-home.tsx"]);
});

test("home-screen plugin renders the centered placeholder score line", () => {
  const source = readFileSync(homePlugin, "utf8");

  assert.match(source, /home_bottom/u);
  assert.match(source, /alignItems="center"/u);
  assert.match(source, /model score: X \\| task-aware model score: Y \\| task-aware predicted cost: Z/u);
});

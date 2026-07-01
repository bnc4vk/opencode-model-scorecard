/** @jsxImportSource @opentui/solid */

const summary = "model score: X | task-aware model score: Y | task-aware predicted cost: Z";

export const tui = async (api) => {
  api.slots.register({
    slots: {
      home_bottom(ctx) {
        const theme = ctx.theme.current;
        return (
          <box width="100%" height={1} alignItems="center">
            <text fg={theme.textMuted}>{summary}</text>
          </box>
        );
      },
    },
  });
};

export default {
  id: "cost-predictor.home",
  tui,
};

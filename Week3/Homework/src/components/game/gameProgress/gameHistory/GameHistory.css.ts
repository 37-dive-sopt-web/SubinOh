import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../styles/base/theme.css";
import { recipe } from "@vanilla-extract/recipes";
import { screen } from "../../../../styles/token/screen";

export const history = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.3rem",
  ...screen.md({
    display: "none",
  }),
});

export const title = style({
  fontWeight: "600",
  fontSize: "1.5rem",
});

export const historyList = style({
  height: "23rem",
  overflowY: "auto",
});

export const historyLog = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.8rem",
  padding: "1rem 0.8rem",
  borderRadius: "0.8rem",
  backgroundColor: themeVars.color.white[500],
});

export const logState = recipe({
  base: {
    fontWeight: "500",
  },

  variants: {
    success: {
      true: {
        color: "#55e048ff",
      },
      false: {
        color: "#e72525ff",
      },
    },
  },
});

import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";
import { screen } from "../../../styles/token/screen";

export const message = style({
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

export const content = style({
  borderRadius: "0.7rem",
  padding: "1.8rem 1rem",
  backgroundColor: themeVars.color.white[700],
});

import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../../styles/base/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "1rem 0",
  marginBottom: "1rem",
});

export const message = style({
  marginLeft: "0.5rem",
  color: "red",
  ...themeVars.text.caption2,
});

import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const table = style({});

export const head = style({
  backgroundColor: themeVars.color.pink[100],
});

export const headRow = style({
  textAlign: "left",
  padding: "0.5rem",
});

export const bodyRow = style({
  padding: "0.5rem 0.8rem",
});

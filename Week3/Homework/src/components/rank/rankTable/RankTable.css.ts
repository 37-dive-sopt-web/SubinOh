import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const wrapper = style({
  overflowX: "auto",
});

export const table = style({
  width: "100%",
});

export const head = style({
  backgroundColor: themeVars.color.pink[100],
});

export const headRow = style({
  textAlign: "left",
  padding: "0.5rem",
  whiteSpace: "nowrap",
});

export const bodyRow = style({
  padding: "0.5rem 0.8rem",
  whiteSpace: "nowrap",
});

export const message = style({
  padding: "3rem 1rem 5rem 3rem",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "500",
  color: themeVars.color.pink[700],
});

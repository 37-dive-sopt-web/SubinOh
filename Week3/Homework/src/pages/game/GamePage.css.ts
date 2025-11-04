import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";

export const wrapper = style({
  display: "flex",
  width: "100%",
  maxWidth: "120rem",
  padding: "3rem",
  margin: "2rem 1rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.color.white[700],
});

export const layout = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "3rem",
  width: "100%",
});

export const board = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingBottom: "3rem",
});

export const progress = style({
  width: "100%",
  padding: "2rem",
  borderRadius: "1.5rem",
  backgroundColor: themeVars.color.pink[200],
});

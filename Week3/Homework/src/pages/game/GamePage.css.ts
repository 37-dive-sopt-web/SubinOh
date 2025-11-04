import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";

export const wrapper = style({
  display: "flex",
  width: "100%",
  maxWidth: "120rem",
  padding: "2rem 3rem",
  margin: "2rem 1rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.color.white[700],
});

export const layout = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  placeItems: "center",
  width: "100%",
});

export const board = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  paddingBottom: "3rem",
});

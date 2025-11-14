import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars, tokens } from "./theme.css";

/** root style */
globalStyle(":root", {
  vars: assignVars(themeVars, tokens),
});

/** HTML & Body style */
globalStyle("html, body", {
  width: "100%",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  scrollBehavior: "smooth",
  fontSize: "62.5%",
  backgroundColor: themeVars.color.pink[100],
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});

/** Scrollbar Hide */
globalStyle("::-webkit-scrollbar", {
  display: "none",
});

/** default style */
export const globalLayout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0 2rem",
  ...themeVars.text.body1,
});

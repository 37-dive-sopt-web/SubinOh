import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars, tokens } from "./theme.css";

/** root style */
globalStyle(":root", {
  vars: assignVars(themeVars, tokens),
});

/** HTML & Body style */
globalStyle("html, body", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "0",
  padding: "0",
  scrollBehavior: "smooth",
  fontSize: "62.5%",
  backgroundColor: themeVars.color.pink[100],
});

/** Scrollbar Hide */
globalStyle("::-webkit-scrollbar", {
  display: "none",
});

/** default style */
export const globalLayout = style({
  width: "100%",
  height: "100%",
  ...themeVars.text.body1,
});

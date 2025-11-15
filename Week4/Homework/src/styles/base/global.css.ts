import { assignVars, globalStyle } from "@vanilla-extract/css";
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
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});

/** Scrollbar Hide */
globalStyle("::-webkit-scrollbar", {
  display: "none",
});

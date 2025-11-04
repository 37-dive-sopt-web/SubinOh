import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const select = style({
  padding: "0.5rem",
  border: "none",
  borderRadius: "0.7rem",
  backgroundColor: themeVars.color.white[700],
  ...themeVars.text.body2,
});

import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const titleWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const resetButton = style({
  color: themeVars.color.white[700],
  backgroundColor: "#ff6a6aff",
  padding: "0.8rem 1.3rem",
  borderRadius: "2rem",
  fontWeight: "500",
  ...themeVars.text.body1,
});

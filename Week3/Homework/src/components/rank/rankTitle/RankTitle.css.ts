import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const titleWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const button = style({
  color: themeVars.color.white[700],
  backgroundColor: themeVars.color.pink[700],
  padding: "0.8rem 1.8rem",
  borderRadius: "2rem",
  fontWeight: "500",
  ...themeVars.text.body1,
});

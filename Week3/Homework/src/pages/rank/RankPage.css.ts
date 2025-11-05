import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  maxWidth: "120rem",
  padding: "3rem",
  margin: "2rem 1rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.color.white[700],
});

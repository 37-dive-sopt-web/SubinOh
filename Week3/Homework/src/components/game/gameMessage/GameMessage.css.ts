import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const message = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.3rem",
});

export const title = style({
  fontWeight: "600",
  fontSize: "1.5rem",
});

export const content = style({
  borderRadius: "0.7rem",
  padding: "1.8rem 1rem",
  backgroundColor: themeVars.color.white[700],
});

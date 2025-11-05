import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../styles/base/theme.css";

export const stateGroup = style({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "0.8rem",
});

export const state = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.6rem",
  padding: "1.3rem 1rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.color.white[700],
});

export const stateTitle = style({
  fontWeight: "500",
  color: themeVars.color.black[500],
});

export const stateContent = style({
  fontSize: "2rem",
  fontWeight: "600",
});

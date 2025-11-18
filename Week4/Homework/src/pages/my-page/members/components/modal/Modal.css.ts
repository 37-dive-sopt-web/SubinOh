import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../../styles/base/theme.css";

export const overlay = style({
  position: "fixed",
  inset: "0",

  width: "100vw",
  height: "100vh",
  backgroundColor: themeVars.color.black[100],
  zIndex: "10",
});

export const modal = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  width: "40%",
  height: "30%",
  maxWidth: "30rem",
  padding: "3rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.color.white[700],
  zIndex: "11",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const title = style({
  margin: "1rem 0",
  fontSize: "1.3rem",
  fontWeight: "600",
});

export const content = style({
  color: "gray",
  fontSize: "1rem",
  fontWeight: "400",
});

export const buttons = style({
  display: "flex",
  gap: "1.5rem",
  margin: "1rem 0",
  width: "80%",
});

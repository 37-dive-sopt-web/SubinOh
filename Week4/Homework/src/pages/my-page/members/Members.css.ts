import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../styles/base/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",
  maxWidth: "30rem",
  padding: "1rem 2rem",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const error = style({
  margin: "1rem auto",
  color: "red",
  ...themeVars.text.caption1,
});

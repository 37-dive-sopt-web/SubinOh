import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const label = style({
  color: "grey",
});

export const passwordWrapper = style({
  position: "relative",
  width: "100%",
});

export const input = style({
  width: "100%",
  border: "1px solid lightgray",
  borderRadius: "0.5rem",
  padding: "0.5rem 0.8rem",
  ...themeVars.text.caption1,
});

export const icon = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});

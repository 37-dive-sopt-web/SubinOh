import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "1rem 0",
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const text = style({
  fontWeight: "600",
});

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

export const title = style({
  fontWeight: "600",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  margin: "1rem 0",
});

export const link = style({
  color: themeVars.color.pink[600],
  fontWeight: "500",
  selectors: {
    "&:visited": {
      color: themeVars.color.pink[600],
    },
  },
});

export const error = style({
  color: "red",
  ...themeVars.text.caption2,
});

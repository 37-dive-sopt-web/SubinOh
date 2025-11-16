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

export const backToStep = style({
  selectors: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const backToLogin = style({
  color: themeVars.color.pink[600],
  fontWeight: "500",
  selectors: {
    "&:visited": {
      color: themeVars.color.pink[600],
    },
  },
});

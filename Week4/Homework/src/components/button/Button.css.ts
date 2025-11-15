import { themeVars } from "../../styles/base/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  width: "100%",
  padding: "0.5rem",
  border: `1px solid ${themeVars.color.black}`,
  borderRadius: "0.5rem",
  fontWeight: "500",
  transition: "background-color 0.2s ease",
  selectors: {
    "&:disabled": {
      opacity: 0.8,
    },
  },
});

export const buttonVariants = styleVariants({
  primary: [
    base,
    {
      backgroundColor: themeVars.color.pink[600],
      color: themeVars.color.white[700],
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: themeVars.color.pink[500],
        },
      },
    },
  ],
  warn: [
    base,
    {
      backgroundColor: "red",
      color: themeVars.color.white[700],
      selectors: {
        "&:hover:not(:disabled)": {
          opacity: "0.9",
        },
      },
    },
  ],
  default: [
    base,
    {
      backgroundColor: themeVars.color.pink[600],
      color: themeVars.color.white[700],
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: themeVars.color.pink[500],
        },
      },
    },
  ],
});

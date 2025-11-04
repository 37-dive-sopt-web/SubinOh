import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";
import { recipe } from "@vanilla-extract/recipes";

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
  minWidth: "30rem",
  padding: "3rem",
  borderRadius: "3rem",
  backgroundColor: themeVars.color.white[700],
  zIndex: "11",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "600",
});

export const content = style({
  fontSize: "1.6rem",
  fontWeight: "400",
});

export const information = recipe({
  base: {
    fontSize: "1.8rem",
    fontWeight: "500",
  },
  variants: {
    status: {
      true: {
        color: "green",
      },
      false: {
        color: "red",
      },
    },
  },
});

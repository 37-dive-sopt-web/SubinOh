import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";
import { screen } from "../../styles/token/screen";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  width: "100%",
  position: "relative",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  padding: "1.5rem 5rem",
  color: themeVars.color.white[700],
  backgroundColor: themeVars.color.pink[500],
});

export const TitleBox = style({
  display: "flex",
  flexDirection: "column",
});

export const Title = style({
  margin: "0.5rem 0",
});

export const TabBox = style({
  display: "flex",
  gap: "1rem",
  ...screen.md({
    display: "none",
  }),
});

export const tab = style({
  fontWeight: "500",
  color: themeVars.color.white[700],
});

// 모바일 메뉴
export const hamburgerButton = style({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",

  ...screen.md({
    display: "block",
  }),
});

export const mobileMenu = recipe({
  base: {
    display: "none",
    ...screen.md({
      position: "absolute",
      top: "100%",
      left: 0,
      width: "100%",
      backgroundColor: themeVars.color.pink[500],
      display: "flex",
      flexDirection: "column",
      zIndex: 100,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
    }),
  },

  variants: {
    isOpen: {
      true: {
        transform: "translateY(0)",
        opacity: 1,
        visibility: "visible",
      },
      false: {
        transform: "translateY(-10px)",
        opacity: 0,
        visibility: "hidden",
      },
    },
  },

  defaultVariants: {
    isOpen: false,
  },
});

export const mobileMenuItem = style({
  width: "100%",
  padding: "1rem",
  textAlign: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: themeVars.color.white[700],
  ":hover": {
    backgroundColor: themeVars.color.pink[400],
  },
});

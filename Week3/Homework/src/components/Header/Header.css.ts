import { themeVars } from "../../styles/base/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { screen } from "../../styles/token/screen";

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "120rem",
  padding: "1rem 2rem",
  margin: "2rem 1rem",
  borderRadius: "1rem",
  backgroundColor: themeVars.color.white[700],
  ...screen.sm({
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2rem",
  }),
});

export const title = style({
  ...screen.sm({
    fontSize: "2rem",
  }),
});

export const buttonWrapper = style({
  display: "flex",
  gap: "0.8rem",
});

export const button = recipe({
  base: {
    color: themeVars.color.black[300],
    backgroundColor: themeVars.color.pink[100],
    padding: "0.8rem 1.8rem",
    borderRadius: "2rem",
    fontWeight: "500",
    ...themeVars.text.body1,
  },
  variants: {
    selected: {
      true: {
        color: themeVars.color.white[700],
        backgroundColor: themeVars.color.pink[500],
      },
    },
  },
});

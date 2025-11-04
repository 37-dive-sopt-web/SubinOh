import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "../../../styles/base/theme.css";

const cardFace = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",

  borderRadius: "0.8rem",
  ...themeVars.text.titleH2,
  transition: "backgroundColor color 0.1s",
});

export const cardFront = style([
  cardFace,
  {
    color: themeVars.color.white[700],
    backgroundColor: themeVars.color.pink[500],
  },
]);

export const cardBack = recipe({
  base: [
    cardFace,
    {
      transform: "rotateY(180deg)",
    },
  ],

  variants: {
    isMatched: {
      true: {
        color: themeVars.color.white[700],
        backgroundColor: themeVars.color.pink[700],
      },
      false: {
        border: `2px solid ${themeVars.color.pink[500]}`,
        color: themeVars.color.pink[500],
        backgroundColor: themeVars.color.white[700],
      },
    },
  },

  defaultVariants: {
    isMatched: false,
  },
});

export const wrapper = recipe({
  base: {
    width: "10rem",
    height: "10rem",
    position: "relative",
    cursor: "pointer",
    transformStyle: "preserve-3d",
    transition: "transform 0.3s",
  },

  variants: {
    level: {
      2: { width: "8rem", height: "8rem" },
      3: { width: "6rem", height: "6rem" },
    },
    isFlipped: {
      true: { transform: "rotateY(180deg)" },
    },

    isMatched: {
      true: { cursor: "default" },
      false: { cursor: "pointer" },
    },
  },

  defaultVariants: {
    isFlipped: false,
    isMatched: false,
  },
});

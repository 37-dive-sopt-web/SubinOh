import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    display: "grid",
    placeItems: "center",
    gap: "1rem",

    width: "100%",
    height: "100%",
    maxWidth: "50rem",
    padding: "3rem",
  },

  variants: {
    level: {
      1: {
        grid: "repeat(4,1fr)/repeat(4,1fr)",
      },
      2: {},
      3: {},
    },
  },
});

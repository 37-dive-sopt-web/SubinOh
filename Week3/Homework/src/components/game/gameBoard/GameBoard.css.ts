import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    display: "grid",
    placeItems: "center",
    gap: "1rem",
    width: "max-content",
    padding: "3rem",
    margin: "0 auto",
  },

  variants: {
    level: {
      1: {
        grid: "repeat(4,1fr)/repeat(4,1fr)",
      },
      2: {
        grid: "repeat(4,1fr)/repeat(6,1fr)",
      },
      3: { grid: "repeat(6,1fr)/repeat(6,1fr)" },
    },
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { screen } from "../../../styles/token/screen";

export const wrapper = recipe({
  base: {
    display: "grid",
    placeItems: "center",
    gap: "1rem",
    width: "max-content",
    padding: "3rem",
    margin: "0 auto",
    ...screen.md({
      padding: "1rem",
    }),
  },

  variants: {
    level: {
      1: {
        grid: "repeat(4,1fr)/repeat(4,1fr)",
        ...screen.md({
          grid: "repeat(8,1fr)/repeat(2,1fr)",
        }),
      },
      2: {
        grid: "repeat(4,1fr)/repeat(6,1fr)",
        ...screen.md({
          grid: "repeat(6,1fr)/repeat(4,1fr)",
        }),
      },
      3: {
        grid: "repeat(6,1fr)/repeat(6,1fr)",
        ...screen.md({
          grid: "repeat(9,1fr)/repeat(4,1fr)",
        }),
      },
    },
  },
});

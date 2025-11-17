import type { CSSProperties } from "react";

export const screenBreakpoints = {
  sm: "(min-width: 470px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1080px)",
} as const;

export const screen = {
  sm: (css: CSSProperties) => ({
    "@media": {
      "(max-width: 470px)": css,
    },
  }),

  md: (css: CSSProperties) => ({
    "@media": {
      "(max-width: 768px)": css,
    },
  }),

  lg: (css: CSSProperties) => ({
    "@media": {
      "(max-width: 1080px)": css,
    },
  }),
};

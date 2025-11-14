// 반응형 style
export const screen = {
  sm: (css) => ({
    "@media": {
      "(max-width: 470px)": css,
    },
  }),

  md: (css) => ({
    "@media": {
      "(max-width: 768px)": css,
    },
  }),

  lg: (css) => ({
    "@media": {
      "(max-width: 1080px)": css,
    },
  }),
};

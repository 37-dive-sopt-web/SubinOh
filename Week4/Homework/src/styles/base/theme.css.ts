import { createTheme } from "@vanilla-extract/css";

import { colorTheme } from "../token/color";
import { textTheme } from "../token/text";

export const tokens = {
  color: colorTheme,
  text: textTheme,
};

const [themeClass, themeVars] = createTheme(tokens);
export { themeClass, themeVars };

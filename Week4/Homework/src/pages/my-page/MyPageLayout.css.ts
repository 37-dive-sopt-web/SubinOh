import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/base/theme.css";

export const container = style({
  width: "100%",
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
});

export const tab = style({
  fontWeight: "500",
  color: themeVars.color.white[700],
});

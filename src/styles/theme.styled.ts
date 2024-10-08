const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  primary_burger: "#ff9f1b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
}

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
}

const fonts = {
  size: {
    XXXS: "8px",
    XXS: "10px",
    XS: "12px",
    P0: "15px",
    P1: "18px",
    P2: "20px",
    P3: "24px",
    P4: "36px",
    P5: "40px",
    P6: "48px",
    P7: "60px",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
}
const gridUnit = 8
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
}

const shadows = {}

const breakpoint = {
  xs: "360px",
  sm: "600px",
  md: "960px",
  lg: "1520px",
  xl: "1900px",
}

export type ThemeType = typeof theme;

const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
  breakpoint,
}

export default theme;

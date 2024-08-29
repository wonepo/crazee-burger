import { } from "styled-components";
import { ThemeType } from "./theme.styled";
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
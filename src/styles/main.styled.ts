import { createGlobalStyle } from "styled-components";

import OpenSans from "./../assets/fonts/OpenSans-Medium.ttf";
import AmaticBold from "./../assets/fonts/AmaticSC-Bold.ttf";
import AmaticRegular from "./../assets/fonts/AmaticSC-Regular.ttf";

const GlobalStyles = createGlobalStyle`

* {   
    margin: 0; /* Remove default margin on everything */
    padding: 0; /* Remove default padding on everything */
    line-height: calc(0.25rem + 1em + 0.25rem); /* Calc "em" based line height, bigger line height for smaller font size and smaller line height for bigger font size: https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/ */
}

/* Use a more-intuitive box-sizing model on everything */
*,
::before,
::after {
    box-sizing: border-box;
}

/* Root-level styles */
:root {
    font-synthesis: none; /* Disable font synthesis for a more consistent rendering */
    text-rendering: optimizeLegibility; /* Improve text rendering for better readability */
    -webkit-font-smoothing: antialiased; /* Smooth the font edges on WebKit browsers */
}

@font-face {
    font-family: Amatic-SC-Regular;
    src: url(${AmaticRegular});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: Amatic-SC-Bold;
    src: url(${AmaticBold});
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    font-optical-sizing: auto;
    src: url(${OpenSans});
    font-weight: 500;
    font-style: normal;
    font-variation-settings: "wdth" 100;
}
`; 

export default GlobalStyles;
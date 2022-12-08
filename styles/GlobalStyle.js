import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
  box-sizing: border-box;
 
}

* {
  margin: 0;
}

html, body {
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: scroll;
 
  
}
::-webkit-scrollbar{
  display: none;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}

#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;

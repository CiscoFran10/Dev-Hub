import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary: #FF577F;
  --primary-focus: #FF427F;
  --primary-negative: #59323F;

  --grey-4:#121214;
  --grey-3:#212529;
  --grey-2: #343B41;
  --grey-1:#868E96;
  --grey-0:#F8F9FA;

  --sucess: #3FE864;
  --negative: #E83F5B;
  
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: var(--grey-0);
  background-color: var(--grey-4);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  display: block;
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,body,#root {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1,h2,h3 {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

input,select {
  font-size: inherit;
  font-family: inherit;
}

`;

export default GlobalStyles;

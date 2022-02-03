import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Swagger;
    letter-spacing: 3px;
  }

  @font-face {
    font-family: "Swagger";
    src: url("/font/SDSwaggerTTF.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body {
    width: 100vw;
    height: 100vh;

    min-width: 1600px;
  }
`;

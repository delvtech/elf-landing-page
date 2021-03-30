import { Global } from "@emotion/core";
import { AppProps } from "next/app";
import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";
import React from "react";
import { theme } from "theme";
import { ThemeProvider } from "theme-ui";

const APP_TITLE = "Element.fi";

function App({ Component, pageProps }: AppProps): JSX.Element {
  const globalStyles = `
  html,
  body,
  body > div:first-of-type,
  div#__next {
    height: 100%;
  }

  html {
    width: 100vw;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-anchor: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
  `;

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter&family=Rubik:wght@400;500;700&display=swap" />
      <NextHead>
        <title>{APP_TITLE}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Official website for Element Finance."
        />
        {/* Essential META Tags */}
        <meta property="og:title" content="Element Finance" />
        <meta
          property="og:description"
          content="Element Finance offers BTC, ETH and USDC at a discount, introducing high fixed yield income to the DeFi market."
        />
        {/* TODO: <meta property="og:image" content="" /> */}
        <meta property="og:url" content="http://element.fi" />
        {/* TODO: <meta name="twitter:card" content="" /> */}

        {/* Non-Essential, But Recommended  */}
        <meta property="og:site_name" content="Element Finance" />
        <meta name="twitter:image:alt" content="Element Finance" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://emailoctopus.com/bundles/emailoctopuslist/css/1.6/form.css"
        />
        <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-embed.js"></script>
      </NextHead>

      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

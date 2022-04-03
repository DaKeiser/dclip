import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  ColorModeScript,
  ColorModeProvider,
  ChakraProvider,
  useColorMode
} from '@chakra-ui/react';
import customTheme from './styles/theme'
import { Global, css } from '@emotion/react'
import WebFont from 'webfontloader';
import { MoralisProvider } from "react-moralis";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL
const MASTER_KEY = process.env.REACT_APP_masterKey;


const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()
  WebFont.load({
    google: {
      families: ['Inter'],
      urls: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap']
    }
  });

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: false,
          }}
        >
            <ColorModeScript />
            <GlobalStyle>
              <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
                  <App />
              </MoralisProvider>
            </GlobalStyle>
        </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

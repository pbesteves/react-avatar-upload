import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { App } from "./components";
import GlobalStyles from "./globalStyles";
import reportWebVitals from "./reportWebVitals";
import { AvatarProvider } from "./store/context/avatar";
import DefaultTheme from "./Themes/defaultTheme";

WebFont.load({
  google: {
    families: ["Inter:400,700"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <AvatarProvider>
        <App />
      </AvatarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

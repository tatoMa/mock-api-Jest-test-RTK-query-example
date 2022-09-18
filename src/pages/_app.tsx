/* eslint-disable require-jsdoc */
import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";

function CourtCanvaApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default CourtCanvaApp;

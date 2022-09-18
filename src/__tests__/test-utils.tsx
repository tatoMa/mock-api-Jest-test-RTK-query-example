/* eslint-disable require-jsdoc */
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../store";
import type { AppStore, RootState } from "../store";
import type { PreloadedState } from "@reduxjs/toolkit";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState> | object;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    // When ever need a preloadedState, pass preloadedState = {} as a parameter to makeStore function next line.
    store = makeStore(),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };

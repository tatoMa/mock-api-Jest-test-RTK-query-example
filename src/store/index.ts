import { pokemonApi } from "../features/pokemon/pokemonApiSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const makeStore = () =>
  configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(pokemonApi.middleware);
    },
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

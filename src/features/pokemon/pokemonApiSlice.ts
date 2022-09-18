import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApiURL = "https://pokeapi.co/api/v2/";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: pokeApiURL }),
  reducerPath: "pokemonApi",
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi;

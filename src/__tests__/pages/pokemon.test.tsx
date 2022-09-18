import { rest } from "msw";
import { screen } from "@testing-library/react";

import Pokemon from "../../pages/pokemon";

import { server } from "../server";
import { renderWithProviders } from "../test-utils";

describe("Pokemon", () => {
  it("handles good response", async () => {
    renderWithProviders(<Pokemon />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await screen.findByRole("heading", { name: /bulbasaur/i });

    const img = screen.getByRole("img", {
      name: /bulbasaur/i,
    }) as HTMLImageElement;

    expect(img.src).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
    );
  });

  it("handles error response", async () => {
    // force msw to return error response
    server.use(
      rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (_req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<Pokemon />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("Oh no, there was an error")).toBeInTheDocument();
  });
});

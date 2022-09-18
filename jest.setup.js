import "@testing-library/jest-dom/extend-expect";
import fetch, { Headers, Request, Response } from "node-fetch";
import AbortController from "abort-controller";
import { server } from "./src/__tests__/server";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;

// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = "15000";

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

process.on("unhandledRejection", (error) => {
  // eslint-disable-next-line no-undef, jest/no-jasmine-globals
  fail(error);
});

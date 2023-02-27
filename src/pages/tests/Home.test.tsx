import { afterEach, beforeEach, afterAll, beforeAll, describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { server } from "../../utils/mocks/server";
import { render, screen, waitFor, within } from "../../utils/test-utils";
import { Home } from "../Home";

describe("Home Page", () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())
  
  afterAll(() => server.close())

  beforeEach(() => {
    render(<Home />)
  })

  test("should render first 10 pokemons", async () => {

    const list = screen.getByRole("list", {
      name: /pokemons/i,
    })
    
    const { findAllByRole } = within(list)

    await waitFor(async () => {
      const items = await findAllByRole("listitem")
      expect(items.length).toBe(10)
    })
  })
})
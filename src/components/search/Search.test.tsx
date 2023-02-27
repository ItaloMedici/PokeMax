import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest";
import { Search } from "./Search";
import { render, screen, waitFor } from "../../utils/test-utils";

describe("Search Test", () => {
  test("should be displayed and able to type", async () => {
    const onSubmit = vi.fn();
    const onClear = vi.fn();

    const { container } = render(<Search onSubmit={onSubmit} onClear={onClear} />);
    const input = container.getElementsByTagName('input')[0];

    await userEvent.type(input, 'MaxMilhas');
    await userEvent.tab();

    expect(input.value).toBe("MaxMilhas");
  });
});

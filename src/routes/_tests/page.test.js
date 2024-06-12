import { describe, expect, it } from "vitest";
import Page from "../+page.svelte";
import { render } from "@testing-library/svelte";

describe("PickList component", async () => {
	it("renders", () => {
		const { getByText } = render(Page);
		const title = getByText("🎲 Randpipe");

		expect(title).toBeTruthy();
	});
});

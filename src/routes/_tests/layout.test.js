import { describe, expect, it } from "vitest";
import Layout from "../+layout.svelte";
import { render } from "@testing-library/svelte";

describe("PickList component", async () => {
	it("renders", () => {
		const { container } = render(Layout);
		expect(container).toBeTruthy();
	});
});

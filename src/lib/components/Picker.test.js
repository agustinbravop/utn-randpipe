import { describe, expect, it } from "vitest";
import Picker from "./Picker.svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { picks } from "$lib/stores";

describe("Picker component", async () => {
	function setup() {
		const { getByText, getByTitle } = render(Picker);
		const picker = getByText("Seleccionar");
		return { picker, getByTitle };
	}

	it("renders with no picked option initially", () => {
		setup();
		expect(screen.getByTitle("picked").textContent).toBe("");
	});

	it("picks and displays one option at random", async () => {
		const { picker } = setup();
		const options = ["Hockey", "Rugby", "Tennis"];
		picks.set(options);

		await userEvent.click(picker);

		// Por la transición, durante unos microsegundos hay dos elementos
		// con id 'picked'. El último de los dos es el elemento nuevo.
		const result = screen.getAllByTitle("picked").pop();
		expect(options).toContain(result?.textContent);
	});
});

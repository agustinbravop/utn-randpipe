import { describe, expect, it } from "vitest";
import PickList from "./PickList.svelte";
import { render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { picks } from "$lib/stores";
import { get } from "svelte/store";

describe("PickList component", async () => {
	it("renders", () => {
		const { getByLabelText } = render(PickList);
		const pickList = getByLabelText("options");

		expect(pickList).toBeTruthy();
	});

	it("takes single line input", async () => {
		const { getByLabelText } = render(PickList);
		const pickList = getByLabelText("options");
		const input = "Hockey";

		await userEvent.type(pickList, input);
		// Change event is triggered when focus leaves the textarea.
		await userEvent.click(document.body);

		// @ts-ignore
		expect(pickList.value).toBe(input);
		expect(get(picks)).toContain(input);
	});

	it("takes multiple line input", async () => {
		const { getByLabelText } = render(PickList);
		const pickList = getByLabelText("options");
		const input = ["Hockey", "Rugby", "Tennis"];

		await userEvent.type(pickList, input.join("{enter}"));
		// Change event is triggered when focus leaves the textarea.
		await userEvent.click(document.body);

		expect(get(picks)).toEqual(input);
	});

	it("trims whitespace and deletes empty lines", async () => {
		const { getByLabelText } = render(PickList);
		const pickList = getByLabelText("options");
		const expectedInput = ["Hockey", "Rugby", "Tennis"];
		const input = ["", "Hockey", "Rugby", "", "", "Tennis", ""];

		await userEvent.type(pickList, input.join("{enter}"));
		// Change event is triggered when focus leaves the textarea.
		await userEvent.click(document.body);

		expect(get(picks)).toEqual(expectedInput);
	});
});

import { writable } from "svelte/store";

/** @type {import('svelte/store').Writable<string[]>} picks */
export const picks = writable(["sarasa"]);

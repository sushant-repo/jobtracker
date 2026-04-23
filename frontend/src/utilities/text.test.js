import {describe, expect, it} from "vitest";
import {capitalize} from "./text";

describe("capitalize", () => {
    it("should capitalize the first letter of a string", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    it("should return an empty string if the input is empty", () => {
        expect(capitalize("")).toBe("");
    });
    it("should return an empty string if the input is null", () => {
        expect(capitalize(null)).toBe("");
    });

    it("should return an empty string if the input is undefined", () => {
        expect(capitalize(undefined)).toBe("");
    });
    it("should not change the rest of the string", () => {
        expect(capitalize("hELLO")).toBe("HELLO");
    });
});
import { describe, it, expect } from "vitest";
import { clamp } from "../src/index.js";

describe("probando clamo", () => {
    it("debe devolver el valor minimo si es menor al rango", () => {
        expect(clamp(0, 1, 10)).toBe(1);
    });
    it("debe devolver el valor maxixo si es menor al rango", () => {
        expect(clamp(100, 1, 10)).toBe(10);
    });

})
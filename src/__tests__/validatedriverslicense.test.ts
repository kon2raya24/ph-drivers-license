import { describe, it, expect } from "vitest";
import { validateDriversLicense } from "../validatedriverslicense";

describe("validateDriversLicense", () => {
  it("should be a function", () => {
    expect(typeof validateDriversLicense).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validateDriversLicense(null as any)).toThrow();
  });
});

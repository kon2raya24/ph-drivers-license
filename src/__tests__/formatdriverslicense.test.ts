import { describe, it, expect } from "vitest";
import { formatDriversLicense } from "../formatdriverslicense";

describe("formatDriversLicense", () => {
  it("should be a function", () => {
    expect(typeof formatDriversLicense).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatDriversLicense(null as any)).toThrow();
  });
});

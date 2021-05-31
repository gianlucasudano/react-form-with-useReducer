import checkForValidation from "./index";
describe("checkForValidation", () => {
  it("should return false if value is in the expected range", () => {
    const validationRules = {
      min: 30,
      label: "Minimum holiday allowance is 30 days",
      type: "MIN_MAX"
    };
    const value = 30;
    expect(checkForValidation({ validationRules, value })).toBe(false);
  });

  it("should return true if value isn't the expected range", () => {
    const validationRules = {
      min: 30,
      label: "Minimum holiday allowance is 30 days",
      type: "MIN_MAX"
    };
    const value = 29;
    expect(checkForValidation({ validationRules, value })).toBe(true);
  });

  it("should return false if no limits range", () => {
    const validationRules = {
      label: "No laws on holiday allowance",
      type: "MIN_MAX"
    };
    const value = 29;
    expect(checkForValidation({ validationRules, value })).toBe(false);
  });

  it("should return undefined if no validationRules type", () => {
    const validationRules = {
      label: "foo bar"
    };
    const value = 29;
    expect(checkForValidation({ validationRules, value })).toBe(undefined);
  });

  it("should switch to default if validationRules type not covered and returns undefined ", () => {
    const validationRules = {
      label: "foo foo foo bar",
      type: "FOO_BAR"
    };
    const value = 29;
    expect(checkForValidation({ validationRules, value })).toBe(undefined);
  });
});

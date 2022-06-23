import { Fns, Values, ValidationResult, Errors } from "./3-add-type-defs";

// This function validates :)
export const validate = <V extends Values>(
  keys: (keyof V)[],
  values: V,
  fns: Fns<V>
): ValidationResult<V> => {
  let invalid = false,
    invalidCount = 0,
    errors = {} as Errors<V>;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // Check for guarantee that validator really exists
    const safeFns = fns[key] ?? [];
    const value = values[key];
    errors[key] = "";

    for (let j = 0; j < safeFns.length; j++) {
      const fn = safeFns[j];
      // Here you run validator and inject values
      const error = fn(value, values);

      if (error !== "") {
        invalid = true;
        errors[key] = error;
        invalidCount++;
        break;
      }
    }
  }

  const validCount = keys.length - invalidCount;

  return {
    invalid,
    errors,
    valid: !invalid,
    validCount,
    progress: +((validCount / keys.length) * 100).toFixed(2),
    invalidCount
  };
};

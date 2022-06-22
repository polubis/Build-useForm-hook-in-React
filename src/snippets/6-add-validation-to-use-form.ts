import { useMemo, useRef } from "react";
import { Fns, Values } from "./3-add-type-defs";
import { validate } from "./5-add-validation-function";

const useForm = <V extends Values>(values: V, fns: Fns<V> = {}) => {
  // ...
  const initResult = useMemo(() => validate(keys, initValues, fns), []);
  const result = useRef(initResult);

  const set = <K extends keyof V>(key: K, value: V[K]): void => {
    // ...
    // Here we validate :)
    result.current = validate(keys, values.current, fns);
    // ...
  };
  // ...
};

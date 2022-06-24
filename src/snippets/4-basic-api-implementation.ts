import { ChangeEvent, useMemo, useRef, useState } from "react";
import { Fns, Values } from "./3-add-type-defs";

export const useForm = <V extends Values>(initValues: V, fns: Fns<V> = {}) => {
  const [, setCounter] = useState(0); // This is only for trigger rerender in React

  // Calculating keys only once - better performance
  const keys = useMemo(() => Object.keys(initValues), []);

  // Using useRef hook for data - because we can read immediately data in components
  const values = useRef(initValues);

  const rerender = (): void => {
    setCounter((prev) => prev + 1);
  };

  const set = <K extends keyof V>(key: K, value: V[K]): void => {
    values.current = {
      ...values.current,
      [key]: value
    };
    rerender();
  };

  const change = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const key = e.target.name;

    // Some developer friendly runtime validation
    if (!key) {
      console.error("Lack of name property in input element");
      return;
    }

    if (!keys.includes(key)) {
      console.error(
        "Unsupported property used as name attribute in input element"
      );
      return;
    }

    if (typeof values.current[key] !== typeof value) {
      console.error(
        "Unsupported change detected. Are you trying to change non-string property with a string value?"
      );
      return;
    }

    set(key, value as V[keyof V]);
  };

  return {
    keys,
    values: values.current,
    set,
    change
  };
};

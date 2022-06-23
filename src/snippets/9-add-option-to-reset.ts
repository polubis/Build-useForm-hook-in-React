import { Fns, Values } from "./3-add-type-defs";

const useForm = <V extends Values>(values: V, fns: Fns<V> = {}) => {
  // ...
  const reset = (): void => {
    // Instead of calculating stuff we just assigning initial values
    result.current = initResult;
    metadata.current = initMetadata;
    values.current = initValues;

    rerender();
  };
  // ...
};

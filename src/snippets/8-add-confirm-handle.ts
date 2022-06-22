import { Fns, Values } from "./3-add-type-defs";
import { validate } from "./5-add-validation-function";

const useForm = <V extends Values>(values: V, fns: Fns<V> = {}) => {
  // ...
  const confirm = (): void => {
    result.current = validate(keys, values.current, fns);
    metadata.current = createMetadata(metadata.current.touched, true);
    rerender();
  };

  const submit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    confirm();
  };
  // ...
};

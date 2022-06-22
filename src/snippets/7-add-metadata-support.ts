import { useMemo, useRef } from "react";
import { Fns, Metadata, Values } from "./3-add-type-defs";

const createMetadata = (touched: boolean, confirmed: boolean): Metadata => ({
  touched,
  untouched: !touched,
  confirmed,
  unconfirmed: !confirmed,
});

const useForm = <V extends Values>(values: V, fns: Fns<V> = {}) => {
  // ...
  const initMetadata = useMemo(() => createMetadata(false, false), []);
  const metadata = useRef(initMetadata);

  const set = <K extends keyof V>(key: K, value: V[K]): void => {
    // ...
    metadata.current = createMetadata(true, metadata.current.confirmed);
    // ...
  };
  // ...
};

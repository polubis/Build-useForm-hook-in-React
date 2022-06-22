import { useMemo } from "react";
import { filter, Observable, Subject } from "rxjs";
import { Fns, OnEvent, Values } from "./3-add-type-defs";

const useForm = <V extends Values>(values: V, fns: Fns<V> = {}) => {
  // ...

  // Creating stream of change events
  const changed = useMemo(() => new Subject<OnEvent<V, keyof V>>(), []);
  const changed$ = useMemo(() => changed.asObservable(), []);

  const on = <K extends keyof V>(
    key: K,
    filterFn = (event: OnEvent<V, keyof V>): boolean => event.key === key
  ): Observable<OnEvent<V, K>> =>
    changed$.pipe(filter(filterFn)) as Observable<OnEvent<V, K>>;
  // ...
};

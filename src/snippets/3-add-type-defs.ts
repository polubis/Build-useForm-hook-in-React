import { ChangeEvent } from "react";
import { Observable } from "rxjs";

export type Values = Record<string, any>; // Validation base type
export type Fn<V extends Values, T> = (value: T, values: V) => string; // Validator function signature
export type Fns<V extends Values> = {
  // Represents { key: [Function, Function, ...] }
  [K in keyof V]?: Fn<V, V[K]>[];
};
export type Errors<V extends Values> = {
  // Represents { key: 'Your errror message', ... }
  [K in keyof V]: string;
};
export interface ValidationResult<V extends Values> {
  // Holds validation data
  invalid: boolean;
  valid: boolean;
  errors: Errors<V>;
  validCount: number;
  progress: number;
  invalidCount: number;
}
export interface Metadata {
  // Other informations
  touched: boolean;
  untouched: boolean;
  confirmed: boolean;
  unconfirmed: boolean;
}
export interface OnEvent<V extends Values, K extends keyof V> {
  // Payload passed to subscribe callback
  key: K;
  value: V[K];
}
export type FormSubmitEvent = { preventDefault: () => void }; // Helper type for submit event
export interface FormHandlers<V extends Values> {
  // Functions for interaction with the form
  submit(e: FormSubmitEvent): void;
  confirm(): void;
  change(e: ChangeEvent<HTMLInputElement>): void;
  set<K extends keyof V>(key: K, value: V[K]): void;
  reset(): void;
  on<K extends keyof V>(
    key: K,
    filterFn?: (event: OnEvent<V, keyof V>) => boolean
  ): Observable<OnEvent<V, K>>;
}
export type Form<V extends Values> = Metadata &
  ValidationResult<V> &
  Errors<V> &
  FormHandlers<V> & {
    keys: (keyof V)[];
    values: V;
  }; // It will be returned by useForm

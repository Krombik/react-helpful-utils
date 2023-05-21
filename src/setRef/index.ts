import { MutableRefObject, Ref } from 'react';
import isFunction from '../isFunction';

/**
 * A utility function that assigns a {@link value} to a provided {@link ref}. Supports both function and mutable ref object types.
 */
const setRef = <T>(ref: Ref<T> | undefined, value: T | null) => {
  if (ref) {
    if (isFunction(ref)) {
      ref(value);
    } else {
      (ref as MutableRefObject<T | null>).current = value;
    }
  }
};

export default setRef;

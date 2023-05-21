import { useRef } from 'react';

/**
 * A hook that returns the previous non-null and non-undefined value of a provided {@link value}. Useful for tracking changes and performing actions based on previous values.
 */
const useNonNullablePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  const prev = ref.current;

  if (value != null) {
    ref.current = value;
  }

  return prev;
};

export default useNonNullablePrevious;

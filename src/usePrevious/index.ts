import { useRef } from 'react';

/**
 * A hook that returns the previous value of a provided {@link value}. Useful for tracking changes and performing actions based on previous values.
 */
const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  const prev = ref.current;

  ref.current = value;

  return prev;
};

export default usePrevious;

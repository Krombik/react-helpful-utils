import { useEffect, useState } from 'react';

/**
 * A hook that delays the update of a {@link value} until a specified {@link delay period} of inactivity has occurred. Useful for handling user input or events that trigger frequent updates.
 */
const useDebounce = <T extends number | string | boolean | null | undefined>(
  value: T,
  delay: number
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (debouncedValue !== value) {
      const handle = window.setTimeout(setDebouncedValue, delay, value);

      return () => {
        window.clearTimeout(handle);
      };
    }
  }, [value]);

  return debouncedValue;
};

export default useDebounce;

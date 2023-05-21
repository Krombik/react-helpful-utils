import { useRef } from 'react';

/**
 * This hook allows you to create a constant value within a functional component, ensuring that the value remains the same across renders
 */
const useConst = <T>(getConst: () => T) => {
  const ref = useRef<T>();

  return ref.current || (ref.current = getConst());
};

export default useConst;

import { useEffect, useRef } from 'react';

/**
 * A hook that executes an effect function after the initial render, excluding the first render. Useful when you want to skip the effect during component mount and only run it on subsequent renders when the dependencies change.
 */
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isNotFirstRenderRef = useRef<true>();

  useEffect(() => {
    if (isNotFirstRenderRef.current) {
      return effect();
    }

    isNotFirstRenderRef.current = true;
  }, deps);
};

export default useUpdateEffect;

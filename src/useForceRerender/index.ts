import { useState } from 'react';

/**
 * React hook to force a component rerender.
 * @returns A function that triggers a rerender of the component.
 */
const useForceRerender = () => {
  const forceRerender = useState<{}>()[1];

  return () => {
    forceRerender({});
  };
};

export default useForceRerender;

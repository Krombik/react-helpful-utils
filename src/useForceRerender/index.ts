import { useReducer } from 'react';

const toggleReducer = (state: boolean) => !state;

/**
 * React hook to force a component rerender.
 * @returns A function that triggers a rerender of the component.
 */
const useForceRerender: () => () => void = () =>
  useReducer(toggleReducer, false)[1];

export default useForceRerender;

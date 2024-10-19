import { useReducer } from 'react';

const reducer = () => ({});

/**
 * React hook to force a component rerender.
 * @returns A function that triggers a rerender of the component.
 */
const useForceRerender: () => () => void = () => useReducer(reducer, null!)[1];

export default useForceRerender;

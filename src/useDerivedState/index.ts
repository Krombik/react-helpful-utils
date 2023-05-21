import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import usePrevious from '../usePrevious';
import isFunction from '../isFunction';

/**
 * A hook for managing derived state within a component. It provides a state value and an updater function.
 */
const useDerivedState = <T>(
  outerValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [innerValueRef, setInnerValueRef] = useState<[T]>([outerValue]);

  if (usePrevious(outerValue) !== outerValue) {
    innerValueRef[0] = outerValue;
  }

  return [
    innerValueRef[0],
    useCallback((value) => {
      setInnerValueRef(
        isFunction(value) ? (prevValueRef) => [value(prevValueRef[0])] : [value]
      );
    }, []),
  ];
};

export default useDerivedState;

import { Ref, RefCallback, useCallback } from 'react';
import setRef from '../setRef';

/**
 * A hook that combines multiple {@link refs} into a single callback ref. Simplifies managing multiple references for an element or component.
 */
const useMergedRef = <T>(...refs: Ref<T>[]): RefCallback<T> =>
  useCallback((value) => {
    for (let i = refs.length; i--; ) {
      setRef(refs[i], value);
    }
  }, refs);

export default useMergedRef;

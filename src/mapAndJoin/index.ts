import { ReactNode } from 'react';

/**
 * A utility function that maps an {@link arr array} of items to an array of {@link ReactNode ReactNodes} using a {@link mapper} function, and concatenates them with a {@link separator} JSX element. Performs mapping and concatenation simultaneously, resulting in a new array.
 */
const mapAndJoin = <T>(
  arr: T[],
  mapper: (item: T, index: number) => ReactNode,
  separator: JSX.Element
) => {
  const l = arr.length;

  if (l > 0) {
    const _arr: ReactNode[] = [];

    _arr.push(mapper(arr[0], 0));

    for (let i = 1; i < l; i++) {
      _arr.push({ ...separator, key: `__${i}` }, mapper(arr[i], i));
    }

    return _arr;
  }

  return [];
};

export default mapAndJoin;

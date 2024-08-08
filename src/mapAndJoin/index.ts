import { ReactNode } from 'react';

/**
 * A utility function that maps an {@link arr array} of items to an array of {@link ReactNode ReactNodes} using a {@link mapper} function, and concatenates them with a {@link separator}. Performs mapping and concatenation simultaneously, resulting in a new array.
 */
const mapAndJoin = <T>(
  arr: T[],
  mapper: (item: T, index: number) => ReactNode,
  separator: ReactNode
) => {
  const l = arr.length - 1;

  if (l < 1 || !separator) {
    return arr.map(mapper);
  }

  const _arr: ReactNode[] = [];

  const isElement = typeof separator == 'object';

  for (let i = 0; i < l; i++) {
    const item = mapper(arr[i], i);

    if (item != null && item !== false) {
      _arr.push(
        item,
        isElement ? { ...(separator as JSX.Element), key: `__${i}` } : separator
      );
    }
  }

  const last = mapper(arr[l], l);

  if (last != null && last !== false) {
    _arr.push(last);
  } else if (_arr.length) {
    _arr.length--;
  }

  return _arr;
};

export default mapAndJoin;

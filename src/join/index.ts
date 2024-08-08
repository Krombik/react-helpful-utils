import { ReactNode } from 'react';

/**
 * A utility function that concatenates an {@link arr array} of {@link ReactNode ReactNodes} with a specified {@link separator}, resulting in a new array.
 */
const join = (arr: ReactNode[], separator: ReactNode) => {
  const l = arr.length - 1;

  if (l < 1 || !separator) {
    return arr;
  }

  const _arr: ReactNode[] = [];

  const last = arr[l];

  const isElement = typeof separator == 'object';

  for (let i = 0; i < l; i++) {
    const item = arr[i];

    if (item != null && item !== false) {
      _arr.push(
        item,
        isElement ? { ...(separator as JSX.Element), key: `__${i}` } : separator
      );
    }
  }

  if (last != null && last !== false) {
    _arr.push(last);
  } else if (_arr.length) {
    _arr.length--;
  }

  return _arr;
};

export default join;

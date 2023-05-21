import { ReactNode } from 'react';

/**
 * A utility function that concatenates an {@link arr array} of {@link ReactNode ReactNodes} with a specified {@link separator} JSX element, resulting in a new array.
 */
const join = (arr: ReactNode[], separator: JSX.Element) => {
  const l = arr.length - 1;

  if (l < 1) {
    return arr;
  }

  const _arr: ReactNode[] = [];

  for (let i = 0; i < l; i++) {
    _arr.push(arr[i], { ...separator, key: `__${i}` });
  }

  _arr.push(arr[l]);

  return _arr;
};

export default join;

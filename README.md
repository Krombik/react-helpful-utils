# react-helpful-utils

> This library requires React v16.8 or later.

Collection of handy utility functions and hooks designed to enhance your React development experience. It provides a set of convenient tools that can be utilized across different React projects.

## Installation

using npm:

```
npm install --save react-helpful-utils
```

or yarn:

```
yarn add react-helpful-utils
```

---

## API

- [useConst](#useconst)
- [useDebounce](#usedebounce)
- [useDerivedState](#usederivedstate)
- [useForceRerender](#useforcererender)
- [useMergedRef](#usemergedref)
- [usePrevious](#useprevious)
- [useNonNullablePrevious](#usenonnullableprevious)
- [useUpdateEffect](#useupdateeffect)
- [setRef](#setref)
- [join](#join)
- [mapAndJoin](#mapandjoin)

### useConst

This hook allows you to create a constant value within a functional component, ensuring that the value remains the same across renders

```ts
const useConst: <T>(getConst: () => T) => T;
```

---

### useDebounce

A hook that delays the update of a value until a specified period of inactivity has occurred. Useful for handling user input or events that trigger frequent updates.

```ts
const useDebounce: <T extends string | number | boolean | null | undefined>(
  value: T,
  delay: number
) => T;
```

---

### useDerivedState

A hook for managing derived state within a component. It provides a state value and an updater function.

```ts
const useDerivedState: <T>(outerValue: T) => [T, Dispatch<SetStateAction<T>>];
```

---

### useForceRerender

React hook to force a component rerender.

```ts
const useForceRerender: () => () => void;
```

---

### useMergedRef

A hook that combines multiple refs into a single callback ref. Simplifies managing multiple references for an element or component.

```ts
const useMergedRef: <T>(...refs: Ref<T>[]) => RefCallback<T>;
```

---

### usePrevious

A hook that returns the previous value of a provided value. Useful for tracking changes and performing actions based on previous values.

```ts
const usePrevious: <T>(value: T) => T | undefined;
```

---

### useNonNullablePrevious

Same to [usePrevious](#useprevious), but returns the previous non-null and non-undefined value of a provided value.

```ts
const useNonNullablePrevious: <T>(value: T) => T | undefined;
```

---

### useUpdateEffect

A hook that executes an effect function after the initial render, excluding the first render. Useful when you want to skip the effect during component mount and only run it on subsequent renders when the dependencies change.

```ts
const useUpdateEffect: typeof useEffect;
```

---

### setRef

A utility function that assigns a value to a provided ref. Supports both function and mutable ref object types.

```ts
const setRef: <T>(ref: Ref<T> | undefined, instance: T | null) => void;
```

---

### join

A utility function that concatenates an array of ReactNodes with a specified separator, resulting in a new array.

```ts
const join: (arr: ReactNode[], separator: ReactNode) => ReactNode[];
```

---

### mapAndJoin

A utility function that maps an array of items to an array of ReactNodes using a mapper function, and concatenates them with a separator. Performs mapping and concatenation simultaneously, resulting in a new array.

```ts
const mapAndJoin: <T>(
  arr: T[],
  mapper: (item: T, index: number) => ReactNode,
  separator: ReactNode
) => ReactNode[];
```

---

## License

MIT © [Krombik](https://github.com/Krombik)

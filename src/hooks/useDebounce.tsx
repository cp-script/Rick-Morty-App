import { useCallback, useEffect, useState } from "react";

export const useDebounceValue = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export const useDebounceFunction = (func: any, delay: number) => {
  const [params, setParams] = useState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      func.apply(this, params);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [params]);

  const debounceFunction = useCallback(
    (...args: any) => {
      setParams(args);
    },
    [func, delay]
  );

  return debounceFunction;
};

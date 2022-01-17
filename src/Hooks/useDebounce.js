import { useCallback } from "react";

const debounce = (callback, delay) => {
  let flag;
  return (...args) => {
    clearTimeout(flag);
    flag = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const useDebounce = (callback, delay) => {
  return useCallback(debounce(callback, delay), []);
};

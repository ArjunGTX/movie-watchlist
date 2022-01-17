//custom hook to debounce a function
import { useCallback } from "react";

const debounce = (callback, delay) => {
  if (typeof callback === "function") {
    let flag;
    return (...args) => {
      clearTimeout(flag);
      flag = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }
};
export const useDebounce = (callback, delay) => {
  //memoizing the debounced function to maintain same reference across renders
  return useCallback(debounce(callback, delay), []);
};

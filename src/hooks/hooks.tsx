import { useEffect, useRef, useCallback } from 'react';

interface ICurrent {
  fn: Function;
  timer: null | NodeJS.Timeout;
}
export const useDebounce = (fn: Function, delay = 500, immediate?: boolean) => {
  const { current } = useRef<ICurrent>({ fn, timer: null }); //使用useRef来保存变量
  return (...args: any[]) => {
    const that = this;
    if (current.timer) {
      clearTimeout(current.timer); //直接清除定时器（关键）
      current.timer = null;
    }
    if (immediate) {
      let rightNow = !current;
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay);
      if (rightNow) {
        current.fn.apply(that, args);
      }
    } else {
      current.timer = setTimeout(() => {
        current.fn.apply(that, args);
      }, delay);
    }
  };
};

export const useThrottle = (fn: Function, wait: number) => {
  let canRun = true;
  const args = fn.arguments;
  return () => {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, wait);
  };
};

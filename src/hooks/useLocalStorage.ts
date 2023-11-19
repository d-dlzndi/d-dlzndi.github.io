"use client";
import { useEffect, useState } from "react";

/**
 * 로컬 스토리지를 useState와 연계하여 사용할 수 있게 함.
 * https://dev.to/collegewap/how-to-use-local-storage-in-nextjs-2l2j
 * @param key 데이터의 이름
 * @param initialValue 데이터를 찾지 못했을 경우 기본값
 * @returns [state, setValue] (이름변경가능)
 */
const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    try {
      if (typeof window == "undefined") throw "서버: 윈도우 없음";
      const value = window.localStorage.getItem(key);
      if (value) setState(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  }, [key]); // 최초 1회만 실행

  const setValue = (value: T | ((state: T) => T)): void => {
    try {
      if (typeof window == "undefined") throw "서버: 윈도우 없음";
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue] as const;
};

export default useLocalStorage;

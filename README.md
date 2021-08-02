# Counter Context

## 問題描述

目前小明使用 Context 來實作兩個組件 `Count` 和 `IncreaseButton`

- Count: 用來顯示目前 count 的值
- IncreaseButton: 用來增加目前 count 的值, 每次往上加 1

但小明發現明明只有 count 的值改變, IncreaseButton 卻依然會重新渲染

請試著實作一個 createContext 函式, 會回傳 `Provder` 和 `useContextSelector` 來幫助小明解決問題！

```js
const createContext = (defaultValue) => {
  /**
   * Create a react context with given value
   * @param props.value
   * @param props.chidlren
   */
  const Provder = ({ value, children }) => {};

  /**
   * @param selector select value from context
   */
  const useContextSelector = (selector) => {};

  return {
    Provder,
    useContextSelector
  };
};

export default createContext;
```

## Usage

```js
import * as React from "react";
import createContext from "./createContext";

const { Provder, useContextSelector } = createContext();

const Count = () => {
  const count = useContextSelector((ctx) => ctx.count);

  return <div>Count: {count}</div>;
};

const App = () => {
  const [count, setCount] = React.useState(count);
  const value = {
    count,
    setCount
  };

  return <Provder value={value}>...</Provder>;
};
```

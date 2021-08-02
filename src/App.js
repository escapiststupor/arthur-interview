import * as React from "react";
// import createContext from './createContext';

const CountContext = React.createContext();

const Count = React.memo(() => {
  // const count = CountContext.useContextSelector((ctx) => ctx.count);
  const { count } = React.useContext(CountContext);

  console.log("render <Count />");

  return <div>Count: {count}</div>;
});

const IncreaseButton = React.memo(() => {
  // const setCount = CountContext.useContextSelector((ctx) => ctx.setCount);
  const { setCount } = React.useContext(CountContext);
  const increase = React.useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  console.log("render <IncreaseButton />");

  return <button onClick={increase}>Increase</button>;
});

export default function App() {
  const [count, setCount] = React.useState(0);
  const contextValue = {
    count,
    setCount
  };

  return (
    <CountContext.Provider value={contextValue}>
      <Count />
      <IncreaseButton />
    </CountContext.Provider>
  );
}

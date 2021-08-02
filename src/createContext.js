const createContext = (defaultValue) => {
  /**
   * Create a react context with given value
   * @param props.value
   * @param props.chidlren
   */
  const Provider = ({ value, children }) => {};

  /**
   * @param selector select value from context
   */
  const useContextSelector = (selector) => {};

  return {
    Provider,
    useContextSelector
  };
};

export default createContext;

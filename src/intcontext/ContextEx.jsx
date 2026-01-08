const { createContext, useState, useContext } = require("react");

const ExampleContext = createContext();

export const ExampleContextProvider = ({ children }) => {
  const [data, setData] = useState("abc");
  return (
    <ExampleContext.Provider value={data}>{children}</ExampleContext.Provider>
  );
};

export const getData = () => {
  const { data } = useContext(ExampleContext);

  return data;
};

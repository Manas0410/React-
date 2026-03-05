import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext({});

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState();

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);
  return { currency, setCurrency };
};

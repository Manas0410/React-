import { useCurrency } from "./CurrencyContext";

const CurrencyHomePage = () => {
  const { currency } = useCurrency();

  return (
    <div className="h-screen">
      <p>currency :{currency?.currency}</p>
      <p>currency Symbol :{currency?.symbol}</p>
      <p>currency Short :{currency?.short}</p>
    </div>
  );
};

export default CurrencyHomePage;

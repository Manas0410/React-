const dummyData = [
  {
    currency: "US Dollar",
    symbol: "$",
    short: "USD",
  },
  {
    currency: "Euro",
    symbol: "€",
    short: "EUR",
  },
  {
    currency: "Indian Rupee",
    symbol: "₹",
    short: "INR",
  },
  {
    currency: "British Pound",
    symbol: "£",
    short: "GBP",
  },
  {
    currency: "Japanese Yen",
    symbol: "¥",
    short: "JPY",
  },
];

import React, { useEffect, useState } from "react";
import { useCurrency } from "./CurrencyContext";
import { useNavigate } from "react-router-dom";

const CurrencyDropdown = () => {
  const { setCurrency } = useCurrency();
  const [currencyData, setCurrencyData] = useState([]);

  console.log("setCurrency", setCurrency);

  const fetchCurrency = async () => {
    await fetch("https://fakestoreapi.com/products", {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrencyData(dummyData);
      });
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedValue = e.target.value;

    const selectedCurrency = currencyData.find(
      (item) => item.short === selectedValue,
    );

    console.log("option", selectedCurrency);
    setCurrency(selectedCurrency);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/practcode-currencyhome");
        }}
      >
        nav
      </button>

      <select className="border w-60" onChange={handleChange}>
        {currencyData.map((item) => (
          <option key={item.short} value={item.short}>
            {item.currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;

// fetch(url, {
//   method: "GET | POST | PUT | PATCH | DELETE",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer YOUR_TOKEN",
//   },
//   body: JSON.stringify(data),
// });

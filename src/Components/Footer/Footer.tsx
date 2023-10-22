import "./Footer.css";
import "./FooterTitle/FooterTitle.css";
import React from "react";

interface CurrencyName {
  id: string;
  min_size: string;
  name: string;
}

export function Footer() {
  const [currencyName, setCurrencies] = React.useState<CurrencyName[]>([]);

  React.useEffect(() => {
    fetch("https://api.coinbase.com/v2/currencies")
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res.data);
      });
  }, []);
  return (
    <footer className="footer">
      {currencyName?.map((currency) => {
        if (currency.name === "Russian Ruble") {
          return <p className="footer__title">{currency?.name}</p>;
        }
      })}
    </footer>
  );
}

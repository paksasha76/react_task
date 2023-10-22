import "./Footer.css";
import "./FooterTitle/FooterTitle.css";
import React from "react";

export function Footer() {
  const [currencyName, setCurrencies] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch("https://api.coinbase.com/v2/currencies")
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res.data);
      });
  }, []);
  return (
    <footer className="footer">
      {currencyName?.map((currency: any) => {
        if (currency.name == "Russian Ruble") {
          return <p className="footer__title">{currency?.name}</p>;
        }
      })}
    </footer>
  );
}

import React from "react";

export function HeaderSelect() {
  const [isActive, setIsActive] = React.useState(false);
  const [currencies, setCurrencies] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch("https://api.coinbase.com/v2/currencies")
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res.data);
      });
  }, []);
  return (
    <div className="header__select">
      <div
        className="header__select-btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {currencies?.map((currency: any) => {
          if (currency.id === "AED") {
            return (
              <div key={currency.id} className="header__select-item">
                {currency?.id}
              </div>
            );
          }
        })}
      </div>
      {isActive && (
        <div className="header__select-content">
          {currencies?.map((currency: any) => {
            return (
              <div key={currency.id} className="header__select-item">
                {currency?.id}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

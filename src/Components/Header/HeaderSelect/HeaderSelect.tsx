import { useState, useEffect } from "react";
import "./HeaderSelect.css";

interface Currencies {
  id: string;
  min_size: string;
  name: string;
}

export function HeaderSelect() {
  const [isActive, setIsActive] = useState(false);
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [value, setValue] = useState<Currencies | undefined>();

  useEffect(() => {
    fetch("https://api.coinbase.com/v2/currencies")
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res.data);
        setValue(res.data[0]);
      });
  }, []);

  return (
    <div className="header__select">
      <button
        className="header__select-btn"
        onClick={() => setIsActive(!isActive)}
      >
        {value?.id}
      </button>
      {isActive && (
        <div className="header__select-content">
          {currencies?.map((currency) => {
            return (
              <div
                onClick={() => setValue(currency)}
                key={currency.id}
                className={`header__select-item`}
              >
                {currency?.id}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

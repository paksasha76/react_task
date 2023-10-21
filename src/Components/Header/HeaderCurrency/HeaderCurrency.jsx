import "./HeaderCurrency.css"

export function HeaderCurrency() {
  return (
    <select className="header__currency">
      <option>AED</option>
      <option selected>RUB</option>
      <option>ALL</option>
      <option>AMD</option>
    </select>
  );
}

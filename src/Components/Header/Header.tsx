import { HeaderContainer } from "./HeaderContainer/HeaderContainer";
import { HeaderCurrency } from "./HeaderCurrency/HeaderCurrency";
import { HeaderImg } from "./HeaderImg/HeaderImg";

import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <HeaderContainer />
      </div>
      <HeaderImg />
    </header>
  );
}
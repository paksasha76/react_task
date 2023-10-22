import { HeaderContainer } from "./HeaderContainer/HeaderContainer";
import { HeaderCurrency } from "./HeaderCurrency/HeaderCurrency";
import { HeaderImg } from "./HeaderImg/HeaderImg";

import "./Header.css";
import { HeaderSelect } from "./HeaderSelect/HeaderSelect";

export function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <HeaderContainer />
        <HeaderSelect />
      </div>
      <HeaderImg />
    </header>
  );
}

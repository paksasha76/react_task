import { HeaderContainer } from "./HeaderContainer/HeaderContainer";
import { HeaderSelect } from "./HeaderSelect/HeaderSelect";
import { HeaderImg } from "./HeaderImg/HeaderImg";

import "./Header.css";

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

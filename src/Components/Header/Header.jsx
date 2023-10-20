import { HeaderContainer } from "./HeaderContainer/HeaderContainer";
import { HeaderCurrency } from "./HeaderCurrency/HeaderCurrency";
import { HeaderContainerImg } from "./HeaderContainerImg/HeaderContainerImg";

export function Header() {
  return (
    <header className="header">
      <div>
        <HeaderContainer />
        <HeaderCurrency />
        <HeaderContainerImg />
      </div>
    </header>
  );
}

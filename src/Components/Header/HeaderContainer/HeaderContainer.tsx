import "./HeaderContainer.css"

import {HeaderLogo} from "./HeaderLogo/HeaderLogo"

import {HeaderDescription} from "./HeaderDescription/HeaderDescription"

export function HeaderContainer() {
  return (
    <div className="header__container">
      <HeaderLogo />
      <HeaderDescription />
    </div>
  );
}

import logo from "../../../images/Kitten.png";

import "./HeaderImg.css";

export function HeaderImg() {
  return (
    <div className="header__container-img">
      <img className="header__img" src={logo} alt="картинка кота"></img>
    </div>
  );
}

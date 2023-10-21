import logo from "../../../images/Kitten.png"

export function HeaderImg() {
  return (
    <div className="header__right">
    <div className="header__container-img">
      <img className="header__img" src={logo} alt="картинка кота"></img>
      </div>
      </div>
  );
}

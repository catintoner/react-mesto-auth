import Logo from '../images/Logo.png';

function Header() {
  return (
    <header className="header">
    <img className="header__logo" src= {Logo} alt="Логотип" />
  </header>
  );
}

export default Header;

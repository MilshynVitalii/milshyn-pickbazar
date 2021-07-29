import React from 'react';
import Logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <img src={Logo} alt="logo" />
          <input type="text" name="search" placeholder="Search your products from here" className="header__search" />
          <button type="button" className="header__login">Join</button>
        </div>
      </div>
    </header>
  )
}

export default Header;

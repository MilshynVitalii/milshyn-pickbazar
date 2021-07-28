import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Some Header</h1>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;

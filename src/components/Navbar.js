import React from 'react';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">Turisme Girona </div>
      <ul className="nav-links">
        <li><a href="#hero">Inici</a></li>
        <li><a href="#multimedia">Galeria</a></li>
        <li><a href="#activities">Rutes</a></li>
      </ul>
      <div className="cart-icon">
        🛒 <span className="badge">{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
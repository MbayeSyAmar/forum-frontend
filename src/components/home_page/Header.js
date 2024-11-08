import React from 'react';

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="auth-buttons">
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </header>
  );
}

export default Header;

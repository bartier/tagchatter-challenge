import React from 'react'
import './styles.css'

class Header extends React.Component {
  render() {
    return <header className="header">
      <h1 className="header__title">#tagchatter</h1>
      <div className="header__parrots-count">
        <span className="header__title" id="parrots-counter">0</span>
      </div>
    </header>
  }
};

export default Header;
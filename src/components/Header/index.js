import React from 'react'
import ParrotsCounter from '../ParrotsCounter'

import './styles.css'

class Header extends React.Component {
  render() {
    return <header className="header">
      <h1 className="header__title">#tagchatter</h1>
      <div className="header__parrots-count">
        <ParrotsCounter className="header__title" parrots={this.props.parrots}/>
      </div>
    </header>
  }
};

export default Header;
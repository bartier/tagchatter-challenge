import React from 'react'
import ParrotsCounter from '../ParrotsCounter'

import './styles.css'

class Header extends React.Component {
  render() {
    return <header className="header">
      <h1 className="title">#tagchatter</h1>

      <div className="parrots-count">
        <ParrotsCounter className="title" parrots={this.props.parrots}/>
      </div>
      
    </header>
  }
};

export default Header;
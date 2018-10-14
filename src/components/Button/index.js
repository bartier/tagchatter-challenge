import React from 'react';
import './styles.css'

class Button extends React.Component {
  render() {
    return <span className="button" onClick={this.props.onClick}>
      {this.props.children}
    </span>
  }
}

export default Button;
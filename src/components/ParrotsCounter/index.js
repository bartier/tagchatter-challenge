import React from 'react'
import './styles.css'

const ParrotsCounter = (props) => (
  <span className="header__title" id="parrots-counter">{props.parrots}</span>
)

export default ParrotsCounter;
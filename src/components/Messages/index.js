import React from 'react'


import './styles.css'

import Message from '../Message'


class Messages extends React.Component {

  componentDidUpdate() {
    if (!this.props.scrollMessagesList) {
      return;
    }
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="messages">
        {
          this.props.messages.map(message => (
            <Message key={message.id} updateMessageParrot={this.props.updateMessageParrot} {...message}/>
          ))
        }
        <div ref={el => { this.el = el; }} />
      </div>
    )
  }
};

export default Messages;
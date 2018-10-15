import React from 'react'


import './styles.css'

import Message from '../Message'


class Messages extends React.Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'instant' });
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
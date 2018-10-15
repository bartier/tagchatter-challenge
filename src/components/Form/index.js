import React from 'react'

import './styles.css'
import Button from '../Button'


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }

  handleSubmitMessage = (event) => {
    const messageContent = this.state.message;
    this.props.sendMessage(messageContent);
  }

  onTextAreaChange = (event) => {
    this.setState({ message: event.target.value });
  }


  render() {
    return <div className="form">

    <img className="form-avatar" src={this.props.avatar} alt="Avatar"/>

    <textarea className="form-text-area" onChange={this.onTextAreaChange}>
    </textarea>

    <Button onClick={this.handleSubmitMessage}>
      <img className="send-icon" src="send-icon.svg" alt="Button: Submit a message" />
    </Button>
    
    </div>
  }
};

export default Form;
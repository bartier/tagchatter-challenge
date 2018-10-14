import React from 'react'
import moment from 'moment';

import './styles.css'


class Message extends React.Component {

 formateDate = (date) => {
  const currentDate = new moment(date);

  return currentDate.format("HH:mm");
}

handleParrotClick = (event) => {
  const message = {
    id: this.props.id,
    content: this.props.content,
    has_parrot: this.props.has_parrot,
    created_at: this.props.created_at,
    author: this.props.author
  }
  console.log(message);

  this.props.updateMessageParrot(message);
}

  render() {
    return <div className="message">

      <img className="author-img" src={this.props.author.avatar} alt="Avatar of message's author"/>

      <div className="message-right">
      
        <span className="author-name">{this.props.author.name}</span>


        <span className="message-date">{this.formateDate(this.props.created_at)}</span>


        <img className="parrot"
             onClick={this.handleParrotClick} 
             src={this.props.has_parrot ? "parrot.svg" : "parrot-grey.svg"} 
             alt="Parrot" /> : 

        <p className="message-content">
          {this.props.content}
        </p>
      
      </div>

    </div>
  }
}

export default Message;
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

  this.props.updateMessageParrot(message);
}

  render() {
    return <div className={"message " + (this.props.has_parrot ? "message__yellow" : "")}>

      <img className="message__authorImg" src={this.props.author.avatar} alt="Avatar of message's author"/>

      <div className="message__right">
      
        <span className="message__authorName">{this.props.author.name}</span>

        <span className="message__date">{this.formateDate(this.props.created_at)}</span>

        <img className="message__parrot"
             onClick={this.handleParrotClick} 
             src={this.props.has_parrot ? "parrot.gif" : "parrot-grey.svg"} 
             alt="Parrot" /> 

        <p className="message__content">
          {this.props.content}
        </p>
      
      </div>

    </div>
  }
}

export default Message;
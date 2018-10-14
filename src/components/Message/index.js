import React from 'react'
import moment from 'moment';

import './styles.css'


class Message extends React.Component {

 formateDate = (date) => {
  const currentDate = new moment(date);

  return currentDate.format("HH:mm");
}

  render() {
    return <div className="message">

      <img className="author-img" src={this.props.author.avatar} alt="Avatar of message's author"/>

      <div className="message-right">
      
        <span className="author-name">{this.props.author.name}</span>


        <span className="message-date">{this.formateDate(this.props.created_at)}</span>


        {this.props.has_parrot ? 
        <img className="parrot" src="parrot.svg" alt="Parrot" /> : 
        <img className="parrot" src="parrot-grey.svg" alt="Parrot" />}

        <p className="message-content">
          {this.props.content}
        </p>
      
      </div>

    </div>
  }
}

export default Message;
import React from 'react'


import SideBar from './components/SideBar'
import Header from './components/Header'
import Messages from './components/Messages'
import Form from './components/Form'

import './reset.css'
import './styles.css'

import api from './services/api'

class TagChatter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        avatar: '',
        id: '',
        name: ''
      },
      messages: [],
      parrots: 0,
      sendErrorAlert: false,
      scrollMessagesList: true,
      
    }

    window.setInterval(() => {
      this.updateMessages();
    }, 3000);
  }

  componentDidMount() {
    this.loadUserData();
    this.loadMessages();
    this.loadParrots();
  }

  loadUserData = async () => {
    const response = await api.get('/me');

    this.setState({ user: response.data });

    console.log('User data loaded');
  }

  loadMessages = async () => {
    const response = await api.get("/messages");

    this.setState({ messages: response.data });

    console.log('Messages loaded');
  }

  updateMessages = async () => {
    this.setState({ scrollMessagesList: false}) // do scroll only 1st time
    this.loadMessages();
  }

  loadParrots = async () => {
    const response = await api.get("/messages/parrots-count");

    this.setState({ parrots: response.data });

    console.log('Parrots loaded');
  }

  sendMessage = async (messageContent) => {
    const newMessage = {
      author_id: this.state.user.id,
      message: messageContent
    }

    await api.post('/messages', newMessage).then((response) => {
      const responseMessage = response.data;

      this.setState({ messages: this.state.messages.concat(responseMessage) })

    }).catch((error) => {
      this.setState({sendErrorAlert: true});
    });

    console.log('Sent message');
  }

  updateMessageParrot = async (message) => {

    if (message.has_parrot) {
      console.log('message has parrot');

      await api.put(`/messages/${message.id}/unparrot`, {}).then((response) => {

        const messageWithParrot = response.data;
        const newParrotsCount = this.state.parrots - 1;

        const newMessages = Array.from(this.state.messages).map((message) => {
          if (message.id == messageWithParrot.id) {
            message.has_parrot = false;
          }
          return message;
        });

        console.log(newMessages);

        this.setState({ parrots: newParrotsCount, messages: newMessages, scrollMessagesList: false });
      });
    }
    else {
      console.log('message has NOT parrot');

      await api.put(`/messages/${message.id}/parrot`, {}).then((response) => {

        const messageWithParrot = response.data;
        const newParrotsCount = this.state.parrots + 1;

        const newMessages = Array.from(this.state.messages).map((message) => {
          if (message.id == messageWithParrot.id) {
            message.has_parrot = true;
          }
          return message;
        });

        console.log(newMessages);

        this.setState({ parrots: newParrotsCount, messages: newMessages, scrollMessagesList: false});
    })
  }
}


  render() {

    return <div className="wrapper">
      <SideBar />
      <div className="content">
        <Header parrots={this.state.parrots} />
        <Messages messages={this.state.messages} 
                  updateMessageParrot={this.updateMessageParrot}
                  scrollMessagesList={this.state.scrollMessagesList} />

        <Form avatar={this.state.user.avatar}
              sendMessage={this.sendMessage} />
      </div>
    </div>
  }
}

export default TagChatter;
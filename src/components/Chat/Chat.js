import React, { PureComponent } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
      count: 0
    };

    this.changeInputMessage = this.changeInputMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
  }

  changeInputMessage(e) {
    this.setState({ messageInput: e.target.value });
  }
  componentDidUpdate() {
    const messageList = document.querySelector('.message-list');
    if (messageList)
      messageList.scrollTop =
        messageList.scrollHeight - messageList.offsetHeight;
  }

  sendMessageOnEnter(e) {
    if (e.key === 'Enter' && this.state.messageInput !== '') {
      this.setState(prevState => {
        return {
          messages: [...prevState.messages, { text: prevState.messageInput }],
          count: prevState.count + 1,
          messageInput: ''
        };
      });
    }
  }

  render() {
    const { messages, messageInput } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((item, index) => {
              return <Message key={index} text={item.text} />;
            })}
          </div>
        </div>
        <input
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;

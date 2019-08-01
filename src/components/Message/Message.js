import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <span className="message">{this.props.text}</span>
      </li>
    );
  }
}

export default Message;

import React from 'react';

function Message(props) {
  return (
    <li>
      <span className="message">{props.text}</span>
    </li>
  );
}

export default Message;

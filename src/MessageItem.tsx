import * as React from 'react';

interface IMessageProps {
  message: string;
  type: string;
}

const MessageItem: React.FunctionComponent<IMessageProps> = ({ message }) => {
  return (
    <div className='qa-m-item'>
      <div className='qa-m-content qa-m-success'>{message}</div>
    </div>
  )
}

export default MessageItem;

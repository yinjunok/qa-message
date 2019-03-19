import * as React from 'react';

interface IMessageProps {
  message: React.ReactNode;
  type: string;
}

const MessageItem: React.FunctionComponent<IMessageProps> = ({ message, type }) => {
  return (
    <div className='qa-m-item'>
      <div className={`qa-m-content qa-m-${type}`}>{message}</div>
    </div>
  )
}

export default MessageItem;

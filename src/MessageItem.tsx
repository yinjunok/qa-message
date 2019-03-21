import * as React from 'react';
import { useEffect } from 'react';
import { IMessage } from './Message';

export interface IMessageItemProps extends IMessage {
  remove: () => void;
}

const MessageItem: React.FunctionComponent<IMessageItemProps> = (m) => {
  useEffect(() => {
    setTimeout(() => {
      m.remove();
    }, 3000);
  });

  return (
    <div className='qa-m-item'>
      <div className={`qa-m-content qa-m-${m.type}`}>{m.message}</div>
    </div>
  );
};

export default MessageItem;

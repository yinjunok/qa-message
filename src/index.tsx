import * as React from 'react';
import Message, { TMessageType } from './Message';

interface IApi {
  [p: string]: (m: React.ReactNode, onClose?: () => void) => void;
}

let instance: Message;
Message.getInstance(n => instance = n);

const api: IApi = {};
['info', 'error', 'success', 'warn'].forEach(type => {
  api[type] = function(m: React.ReactNode, onClose?: () => void) {
    instance.add(m, type as TMessageType, onClose);
  }
});

export default api;
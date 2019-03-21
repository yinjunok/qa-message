import * as React from 'react';
import Message, { TMessageType } from './Message';

type TApiMethod = (m: React.ReactNode, onClose?: () => void) => void;

interface IApi {
  info: TApiMethod;
  error: TApiMethod;
  success: TApiMethod;
  warn: TApiMethod;
}

let instance: Message;
Message.getInstance((n) => instance = n);

const api: any = {};
['info', 'error', 'success', 'warn'].forEach((type) => {
  api[type] = (m: React.ReactNode, onClose?: () => void) => {
    instance.add(m, type as TMessageType, onClose);
  };
});

export default api as IApi;

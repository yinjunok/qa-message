interface IMessage {
  id: number;
  message: string;
  type: 'info' | 'warn' | 'error' | 'success',
  duration: number;
  onClose: () => void;
}

let ID = 0;

export default function messageCreator(message: string, type: string): IMessage {
  return ''
}

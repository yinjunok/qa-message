import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import MessageItem from './MessageItem';

export type TMessageType = 'info' | 'error' | 'success' | 'warn';
export interface IMessage {
  id: number;
  type: TMessageType;
  message: React.ReactNode;
  onClose: () => void;
}

interface IMessageState {
  messages: IMessage[];
}

// tslint:disable-next-line
const noop = () => {};

let ID = 0;
class Message extends React.Component<{}, IMessageState> {
  /**
   * 获取 Message 实例静态方法
   * @param {Function} cb ref 回调, 获取 Message 实例
   */
  public static getInstance(cb: (n: Message) => void) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let called = false;

    function ref(instance: Message) {
      if (called) {
        return;
      }
      called = true;

      cb(instance);
    }

    ReactDOM.render(<Message ref={ref} />, div);
  }

  public state = {
    messages: [],
  };

  /**
   * 添加 message 方法
   *
   * @memberof Message
   * @param {React.ReactNode} message 添加的 message
   * @param {TMessageType} type message 类型
   * @param {Function} onClose message 关闭后的回调
   */
  public add = (
    message: React.ReactNode,
    type: TMessageType,
    onClose: () => void = noop,
  ) => {
    const { messages } = this.state;

    const newMessage = {
      id: ID++,
      type,
      message,
      onClose,
    };

    this.setState({
      messages: [ ...messages, newMessage ],
    });
  }

  /**
   * 删除 message 方法
   *
   * @memberof Message
   * @param {number} id 要删除 message 的 id
   */
  public remove = (id: number) => {
    const { messages } = this.state;

    this.setState({
      messages: messages.filter((m: IMessage) => m.id !== id),
    });
  }

  public render() {
    const { messages } = this.state;

    return (
      <TransitionGroup className='qa-m-container'>
        {
          messages.map((m: IMessage) => (
            <CSSTransition
              key={m.id}
              timeout={300}
              classNames='fade'
              onExited={m.onClose}
            >
              <MessageItem
                remove={() => this.remove(m.id)}
                {...m}
              />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    );
  }
}

export default Message;

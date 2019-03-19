import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import MessageItem from './MessageItem';
import './style.less';

let ID = 0;

type TMessageType = 'info' | 'warn' | 'error' | 'success';
export interface IMessage {
  id: number;
  message: React.ReactNode;
  type: TMessageType,
  duration: number;
  onClose: () => void;
}

interface IMessageState {
  messages: IMessage[];
}

interface IMessageConfig {
  duration?: number;
  onClose?: () => void
}

export default class Message extends React.Component<{}, IMessageState> {
  static newInstance(cb: Function) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    let called = false;
    function ref(notice: Message) {

      if (called) {
        return;
      }
      called = true;

      cb({
        info(message: React.ReactNode, { duration = 3000, onClose = () => {} }) {
          const m = {
            id: ID++,
            type: 'info' as TMessageType,
            message,
            duration,
            onClose,
          }
          notice.add(m);
        },
        warn(message: React.ReactNode, { duration = 3000, onClose = () => {} }) {
          const m = {
            id: ID++,
            type: 'warn' as TMessageType,
            message,
            duration,
            onClose,
          }
          notice.add(m);
        },
        error(message: React.ReactNode, { duration = 3000, onClose = () => {} }) {
          const m = {
            id: ID++,
            type: 'error' as TMessageType,
            message,
            duration,
            onClose,
          }
          notice.add(m);
        },
        success(message: React.ReactNode, { duration = 3000, onClose = () => {} }) {
          const m = {
            id: ID++,
            type: 'success' as TMessageType,
            message,
            duration,
            onClose,
          }
          notice.add(m);
        }
      })
    }
    
    ReactDOM.render(<Message ref={ref} />, div);
  }

  state = {
    messages: []
  }

  public add(message: IMessage) {
    this.setState({
      messages: [
        message,
        ...this.state.messages,
      ]
    }, () => {
      // setTimeout(() => {
      //   this.setState({
      //     messages: this.state.messages.filter((m: IMessage) => id !== m.id),
      //   });
      // }, 5000)
    });
  }

  render() {
    const { messages } = this.state;
    
    return (
      <TransitionGroup className='qa-m-container' component='span'>
        {
          messages.map((m: IMessage) => (
            <CSSTransition key={m.id} timeout={500} classNames='fade'>
              <MessageItem message={m.message} type={m.type} />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    )
  }
}

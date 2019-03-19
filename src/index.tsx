import * as React from 'react';
import * as ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.less';

let ID = 0;

const div = document.createElement('div');

interface IMessage {
  id: number;
  message: string;
  // type: 'info' | 'warn' | 'error' | 'success',
  // duration: number;
  // onClose: () => void;
}

interface IMessageState {
  messages: IMessage[];
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
        notice(message: string){
          notice.add(message);
        }
      })
    }
    
    ReactDOM.render(<Message ref={ref} />, div);
  }

  state = {
    messages: []
  }

  public add(message: string) {
    const id = ID++;
    this.setState({
      messages: [
        {
          id,
          message,
        },
        ...this.state.messages,
      ]
    }, () => {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.filter((m: IMessage) => id !== m.id),
        });
      }, 5000)
    });
  }

  render() {
    const { messages } = this.state;
    
    return (
      <TransitionGroup>
        {
          messages.map((m: IMessage) => (
            <CSSTransition key={m.id} timeout={500} classNames='fade'>
              <div>{m.message}</div>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    )
  }
}

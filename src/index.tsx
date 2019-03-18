import * as React from 'react';
import * as ReactDOM from "react-dom";

let ID = 0;

const div = document.createElement('div');

interface IMessage {
  id: number;
  message: string;
}
interface IMessageState {
  messages: IMessage[];
}
export default class Message extends React.Component<{}, IMessageState> {
  state = {
    messages: []
  }

  componentDidMount() {
    document.body.appendChild(div);
  }

  public add(message: string) {
    this.setState({
      messages: [
        {
          id: ID++,
          message,
        },
        ...this.state.messages,
      ]
    });
  }

  render() {
    return ReactDOM.createPortal(this.renderItems(), div);
  }

  private renderItems = (): React.ReactNode => {
    return this.state.messages.map((item: IMessage) => (
      <div key={item.id}>{item.message}</div>
    ))
  }
}

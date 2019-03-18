import * as React from 'react';
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import './sty.less';
import Message from '../src';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
});

class App extends React.Component {
  render() {
    return (
      <div className='demo'>
        <Message ref={this.messageRef} />
        <button onClick={this.clickHandler}>message</button>
      </div>
    );
  }

  private clickHandler = () => {
    if (this.messageRef !== null) {
      this.messageRef.current.add('abcd')
    }
  }

  private messageRef = React.createRef<Message>();
}

export default hot(App);
// export default App;

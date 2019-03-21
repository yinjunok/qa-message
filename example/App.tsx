import * as React from 'react';
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import './sty.less';
import message from '../src';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
});

class App extends React.Component {
  render() {
    return (
      <div className='demo'>
        <button onClick={this.clickHandler('info')}>info</button> <br/>
        <button onClick={this.clickHandler('warn')}>warn</button> <br/>
        <button onClick={this.clickHandler('error')}>error</button> <br/>
        <button onClick={this.clickHandler('success')}>success</button>
      </div>
    );
  }

  private clickHandler = (type) => () => {
    message[type](<span>{type}这是一段超级长的 message, 看看他是怎么显示的</span>)
  }
}

export default hot(App);
// export default App;

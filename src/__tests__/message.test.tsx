/* tslint:disable */
import * as React from 'react';
import { mount } from 'enzyme';
import { CSSTransition } from 'react-transition-group';

import Message from '../Message';

describe('渲染测试', () => {
  it('添加 message', () => {
    const wrapper = mount(<Message />);
    const messages = [
      {
        id: 0,
        message: '0',
        type: 'info',
        onClose: () => {},
      }
    ];
    wrapper.setState({ messages, })

    expect(wrapper.find(CSSTransition).length).toBe(1);
  });

  it('删除 message', () => {
    const wrapper = mount(<Message />);
    const messages = [
      {
        id: 0,
        message: '0',
        type: 'info',
        onClose: () => {},
      }, {
        id: 1,
        message: '1',
        type: 'info',
        onClose: () => {},
      }, {
        id: 2,
        message: '2',
        type: 'info',
        onClose: () => {},
      }
    ];
    wrapper.setState({ messages, })

    expect(wrapper.find(CSSTransition).length).toBe(3);
    
    const instance = wrapper.instance();
    (instance as Message).remove(1);
    setTimeout(() => {
      expect(wrapper.find(CSSTransition).length).toBe(2);
    }, 1000)
  });
});

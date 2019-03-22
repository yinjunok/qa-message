/* tslint:disable */
import * as React from 'react';
import { mount } from 'enzyme';
import { TMessageType } from '../Message';
import MessageItem, { IMessageItemProps } from '../MessageItem';

jest.useFakeTimers();

describe('渲染测试', () => {
  it('传入 message 渲染测试', () => {
    const message: IMessageItemProps = {
      id: 0,
      message: <div className='demo'>test component</div>,
      type: 'info',
      onClose: () => {},
      remove: () => {},
    };

    const com = mount(<MessageItem  {...message} />);
    expect(com.contains(<div className='demo'>test component</div>)).toBe(true);
  });

  it('message 传入类型测试', () => {
    
    const types: TMessageType[] = ['error', 'info', 'success', 'warn'];

    types.forEach((type) => {
      const message: IMessageItemProps = {
        id: 0,
        type: type,
        message: <div className='demo'>test component</div>,
        onClose: () => {},
        remove: () => {},
      };
      
      const wrapper = mount(<MessageItem  {...message} />);
      expect(wrapper.find(`.qa-m-${type}`).length).toBe(1);
    });
  });
});

describe('回调测试', () => {
  it('remove 回调', () => {
    const remove = jest.fn(() => {});
    const message: IMessageItemProps = {
      id: 0,
      type: 'info',
      message: <div className='demo'>test component</div>,
      onClose: () => {},
      remove: remove,
    };

    mount(<MessageItem  {...message} />);
    jest.runAllTimers();
    expect(remove).toBeCalled();
  });
});

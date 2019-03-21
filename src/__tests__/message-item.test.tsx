/* tslint:disable */
import * as React from 'react';
import { mount } from 'enzyme';
import MessageItem, { IMessageItemProps } from '../MessageItem';

describe('渲染测试', () => {
  it('渲染测试 info', () => {
    const message: IMessageItemProps = {
      id: 0,
      message: <div className='demo'>test component</div>,
      type: 'info',
      onClose: () => {},
      remove: () => {},
    };

    const com = mount(<MessageItem  {...message} />);

    expect(com.hasClass('qa-m-item')).toBe(true);
  });
});

import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header>
      <div className='symbol'>HarelShop</div>
      <Menu theme='dark' mode='horizontal'>
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/products'>Products</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/about'>About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;

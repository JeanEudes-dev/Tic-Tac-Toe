import React from 'react';
import { Layout, Menu } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './App.css';
import Game from './Components/Game';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <a href="https://github.com/JeanEudes-dev/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> GitHub
            </a>
          </Menu.Item>
        </Menu>
        <div className="logo"><h2>Tic-Tac-Toe</h2></div>
      </Header>
      <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
        <Game />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Tic-Tac-Toe ©2024 Jean-Eudes-dev</Footer>
    </Layout>
  );
};

export default App;

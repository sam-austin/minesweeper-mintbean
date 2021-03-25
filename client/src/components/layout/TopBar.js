import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const TopBar = props => {
  
  return (
    <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white', borderBottom: '3px', padding: 0}}>
      <Menu mode="horizontal" style={{fontSize: "18px", border: 0, padding: '0 75px' }}>
        <Menu.Item disabled key="1" style={{float: "left", margin: 0 }}>
          <img className="bomb-icon" alt="bomb" src="https://mine-sweeper-s3.s3.amazonaws.com/mine.svg" />
        </Menu.Item>
        <Menu.Item key="2" style={{float: "left"}}>
          <Link to="/">
            BombBroomer
          </Link>
        </Menu.Item>
        <Menu.Item key="3" style={{float: "left"}}>
          <Link to="/game">
            Play!
          </Link>
        </Menu.Item>  
      </Menu>
    </Header>
  );
};

export default TopBar;

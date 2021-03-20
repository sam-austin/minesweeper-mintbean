import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const TopBar = props => {
  
  return (
    <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white', borderBottom: '3px', padding: 0}}>
      <Menu mode="horizontal" style={{fontSize: "16px", border: 0, padding: '0 100px'}}>
        <Menu.Item disabled key="1" style={{float: "left"}}>
          <img className="bomb-icon" alt="bomb" src="https://around-the-block.s3.amazonaws.com/bomb-header.png" />
        </Menu.Item>
        <Menu.Item key="2" style={{float: "left"}}>
          <Link to="/">
            BombSweeper
          </Link>
        </Menu.Item>
        <Menu.Item key="3" style={{float: "left"}}>Play!</Menu.Item>  
      </Menu>
    </Header>
  );
};

export default TopBar;

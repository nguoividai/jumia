import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SideNavToggle from './components/SideNavToggle';
import logo from 'src/assets/images/logo.png';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="side-nav-icon">
        <SideNavToggle />
      </div>
      <div className="logo text-center">
        <strong>
          <img src={logo} alt="logo" />
        </strong>
      </div>

      <div className="nav-link">
        <List layout="horizontal">
          <List.ListItem>Home</List.ListItem>
          <List.ListItem>Login</List.ListItem>
          <List.ListItem>Delivery Menu</List.ListItem>
          <List.ListItem>Collection Menu</List.ListItem>
          <List.ListItem>Coupons</List.ListItem>
        </List>
      </div>
      <div className="action">
        <div className="open">
          <div className="ellipse"></div>
          <span>Open</span>
        </div>
      </div>
    </header>
  );
};

export default React.memo(AppHeader);

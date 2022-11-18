import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SideNavToggle from './components/SideNavToggle';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="side-nav-icon">
        <SideNavToggle />
      </div>
      <div className="logo">
        <strong>LOGO</strong>
      </div>
      <div className="nav-link">
        <List layout="horizontal">
          <List.ListItem>3D Printing</List.ListItem>
          <List.ListItem>Materials</List.ListItem>
          <List.ListItem>Resources</List.ListItem>
          <List.ListItem>Company</List.ListItem>
        </List>
      </div>
      <div className="action">
        <a href="#/login">My account</a>
        <Button> Get an instant quote </Button>
      </div>
    </header>
  );
};

export default React.memo(AppHeader);

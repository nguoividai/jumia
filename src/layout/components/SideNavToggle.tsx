import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../../components/list/List';
import SideNav from '../../components/sideNav/SideNav';

const SideNavToggle = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <span className="sidenav-toggle" onClick={() => setVisible(true)}>
        <i className="icofont-navigation-menu"></i>
      </span>
      <SideNav
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <List className="sidebar-list">
          <List.ListItem
            onClick={() => {
              navigate('/');
              setVisible(false);
            }}
          >
            Home
          </List.ListItem>
          <List.ListItem>Login</List.ListItem>
          <List.ListItem
            onClick={() => {
              navigate('menu');
              setVisible(false);
            }}
          >
            Delivery Menu
          </List.ListItem>
          <List.ListItem>Collection Menu</List.ListItem>
          <List.ListItem>Coupons</List.ListItem>
        </List>

        <div className="sidenav-footer">
          <List>
            <List.ListItem className="active">Contact</List.ListItem>
            <List.ListItem>Terms & Conditions</List.ListItem>
            <List.ListItem>Privacy Policy</List.ListItem>
          </List>
        </div>
      </SideNav>
    </>
  );
};

export default React.memo(SideNavToggle);

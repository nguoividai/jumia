import React, { useState } from 'react';
import List from '../../components/list/List';
import SideNav from '../../components/sideNav/SideNav';

const SideNavToggle = () => {
  const [visible, setVisible] = useState<boolean>(false);

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
        <List style={{ fontSize: '1.25rem' }}>
          <List.ListItem>3D Printing</List.ListItem>
          <List.ListItem>Materials</List.ListItem>
          <List.ListItem>Resources</List.ListItem>
          <List.ListItem>Company</List.ListItem>
        </List>
      </SideNav>
    </>
  );
};

export default React.memo(SideNavToggle);

import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SocialLink from '../components/social/SocialLink';

const AppFooter = () => {
  return (
    <div role="contentinfo" className="app-footer">
      <div className="footer-1">
        <List title="3D Printing">
          <List.ListItem>DMLS</List.ListItem>
          <List.ListItem>FDM</List.ListItem>
          <List.ListItem>PolyJet</List.ListItem>
          <List.ListItem>SLS</List.ListItem>
          <List.ListItem>Metal 3D Printing</List.ListItem>
        </List>
      </div>
      <div className="footer-2">
        <List title="Materials">
          <List.ListItem>Metal</List.ListItem>
          <List.ListItem>Photopolymers</List.ListItem>
          <List.ListItem>Thermoplastic</List.ListItem>
          <List.ListItem>Resin</List.ListItem>
        </List>
      </div>
      <div className="footer-3">
        <List title="Resources">
          <List.ListItem>3D printing guide</List.ListItem>
          <List.ListItem>Metal 3D printing guide</List.ListItem>
          <List.ListItem>Case studies</List.ListItem>
          <List.ListItem>Blog</List.ListItem>
          <List.ListItem>FAQ</List.ListItem>
          <List.ListItem>API</List.ListItem>
        </List>
      </div>
      <div className="footer-4">
        <List title="Company">
          <List.ListItem>About us</List.ListItem>
          <List.ListItem>Out Platform</List.ListItem>
          <List.ListItem>Quality Assurance</List.ListItem>
          <List.ListItem>Security</List.ListItem>
          <List.ListItem>Privacy Policy</List.ListItem>
          <List.ListItem>Terms of Service</List.ListItem>
        </List>
      </div>
      <div className="footer-5">
        <h4 className="list-title">Connect V1hub</h4>
        <div className="icon">
          <SocialLink icon="icofont-facebook" />
          <SocialLink icon="icofont-youtube-play" />
          <SocialLink icon="icofont-whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AppFooter);

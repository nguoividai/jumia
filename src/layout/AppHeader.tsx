import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SideNavToggle from './components/SideNavToggle';
import logo from 'src/assets/images/logo.png';

import home from 'src/assets/images/jumia/icons/home.png';
import menu from 'src/assets/images/jumia/icons/menu.png';
import account from 'src/assets/images/jumia/icons/account.png';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="side-nav-icon">
        <SideNavToggle />
      </div>
      <div style={{ cursor: 'pointer' }} className="logo text-center" onClick={() => navigate('')}>
        <strong>
          <img src={logo} alt="logo" />
        </strong>
      </div>

      <div className="nav-link">
        <List className="list-header" layout="horizontal">
          <a href="#/">
            <List.ListItem>
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.71967 10.4695C0.426777 10.7624 0.426777 11.2373 0.71967 11.5302C1.01256 11.8231 1.48744 11.8231 1.78033 11.5302L0.71967 10.4695ZM10.2045 2.04533L10.7348 2.57566V2.57566L10.2045 2.04533ZM11.7955 2.04532L12.3258 1.51499L12.3258 1.51499L11.7955 2.04532ZM20.2197 11.5302C20.5126 11.8231 20.9874 11.8231 21.2803 11.5302C21.5732 11.2373 21.5732 10.7624 21.2803 10.4695L20.2197 11.5302ZM4.25 8.74983C4.25 8.33562 3.91421 7.99983 3.5 7.99983C3.08579 7.99983 2.75 8.33562 2.75 8.74983H4.25ZM19.25 8.74983C19.25 8.33562 18.9142 7.99983 18.5 7.99983C18.0858 7.99983 17.75 8.33562 17.75 8.74983H19.25ZM8.75 19.9998V20.7498C9.16421 20.7498 9.5 20.414 9.5 19.9998H8.75ZM13.25 19.9998H12.5C12.5 20.414 12.8358 20.7498 13.25 20.7498V19.9998ZM7.25 19.2498C6.83579 19.2498 6.5 19.5856 6.5 19.9998C6.5 20.414 6.83579 20.7498 7.25 20.7498V19.2498ZM15.5 20.7498C15.9142 20.7498 16.25 20.414 16.25 19.9998C16.25 19.5856 15.9142 19.2498 15.5 19.2498V20.7498ZM1.78033 11.5302L10.7348 2.57566L9.67417 1.515L0.71967 10.4695L1.78033 11.5302ZM11.2652 2.57566L20.2197 11.5302L21.2803 10.4695L12.3258 1.51499L11.2652 2.57566ZM10.7348 2.57566C10.8813 2.42921 11.1187 2.42921 11.2652 2.57566L12.3258 1.51499C11.5936 0.782762 10.4064 0.782762 9.67417 1.515L10.7348 2.57566ZM2.75 8.74983V18.8748H4.25V8.74983H2.75ZM19.25 18.8748V8.74983H17.75V18.8748H19.25ZM4.625 20.7498H8.75V19.2498H4.625V20.7498ZM13.25 20.7498H17.375V19.2498H13.25V20.7498ZM9.5 19.9998V15.1248H8V19.9998H9.5ZM9.875 14.7498H12.125V13.2498H9.875V14.7498ZM12.5 15.1248V19.9998H14V15.1248H12.5ZM12.125 14.7498C12.3321 14.7498 12.5 14.9177 12.5 15.1248H14C14 14.0893 13.1605 13.2498 12.125 13.2498V14.7498ZM17.75 18.8748C17.75 19.0819 17.5821 19.2498 17.375 19.2498V20.7498C18.4105 20.7498 19.25 19.9104 19.25 18.8748H17.75ZM9.5 15.1248C9.5 14.9177 9.66789 14.7498 9.875 14.7498V13.2498C8.83947 13.2498 8 14.0893 8 15.1248H9.5ZM2.75 18.8748C2.75 19.9104 3.58947 20.7498 4.625 20.7498V19.2498C4.41789 19.2498 4.25 19.0819 4.25 18.8748H2.75ZM7.25 20.7498H15.5V19.2498H7.25V20.7498Z"
                  fill="#0F172A"
                />
              </svg>
              Home
            </List.ListItem>
          </a>

          <a href="#/menu">
            <List.ListItem>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11.25C0 10.8358 0.335786 10.5 0.75 10.5H9C9.41421 10.5 9.75 10.8358 9.75 11.25C9.75 11.6642 9.41421 12 9 12H0.75C0.335786 12 0 11.6642 0 11.25Z"
                  fill="#0F172A"
                />
              </svg>
              Menu
            </List.ListItem>
          </a>

          <a href="#/">
            <List.ListItem>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 5C12.75 7.07107 11.0711 8.75 9.00002 8.75C6.92896 8.75 5.25002 7.07107 5.25002 5C5.25002 2.92893 6.92896 1.25 9.00002 1.25C11.0711 1.25 12.75 2.92893 12.75 5Z"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.50116 19.1182C1.57146 15.0369 4.9019 11.75 9.00002 11.75C13.0983 11.75 16.4287 15.0371 16.4989 19.1185C14.2161 20.166 11.6764 20.75 9.00034 20.75C6.32402 20.75 3.78412 20.1659 1.50116 19.1182Z"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              My Account
            </List.ListItem>
          </a>
          <List.ListItem className="open-hour">
            <span className="d-block open-text">Open</span>
            Accepting DoorDash orders until 11:39 PM
          </List.ListItem>
        </List>
      </div>
      <div className="action">
        <div className="d-flex d-xs-flex d-sm-flex d-md-flex d-lg-none open">
          <div className="ellipse"></div>
          <span>OPEN</span>
        </div>
        <a className="d-none d-lg-block cart" href="#/checkout">
          <i className="icofont-cart-alt"></i> 2
        </a>
      </div>
    </header>
  );
};

export default React.memo(AppHeader);

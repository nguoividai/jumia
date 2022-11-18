import React from 'react';

const DefaultReact = React.lazy(() => import('./pages/test/DefaultReact'));
const Login = React.lazy(() => import('./pages/login/Login'));
const ForgotPassword = React.lazy(() => import('./pages/forgotPassword/ForgotPassword'));
const CreateAccount = React.lazy(() => import('./pages/createAccount/CreateAccount'));
const HomePage = React.lazy(() => import('./pages/b2c/HomePage'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', element: HomePage },
  { path: '/login', exact: true, name: 'Login', element: Login },
  { path: '/forgot-password', exact: true, name: 'ForgotPassword', element: ForgotPassword },
  { path: '/sign-up', exact: true, name: 'ForgotPassword', element: CreateAccount },
];

export default routes;

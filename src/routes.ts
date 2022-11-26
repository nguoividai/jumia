import React from 'react';
import JCheckout from './pages/jumia/JCheckout';

const DefaultReact = React.lazy(() => import('./pages/test/DefaultReact'));
const Login = React.lazy(() => import('./pages/login/Login'));
const ForgotPassword = React.lazy(() => import('./pages/forgotPassword/ForgotPassword'));
const CreateAccount = React.lazy(() => import('./pages/createAccount/CreateAccount'));
const JHomePage = React.lazy(() => import('./pages/jumia/JHomePage'));
const JMenu = React.lazy(() => import('./pages/jumia/JMenu'));
const JTest = React.lazy(() => import('./pages/jumia/JTest'));
const JRecommendMobile = React.lazy(() => import('./pages/jumia/mobile/JRecommendMobile'));
const JChooseSizeMobile = React.lazy(() => import('./pages/jumia/mobile/JChooseSizeMobile'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', element: JHomePage },
  { path: '/menu', exact: true, name: 'Menu', element: JMenu },
  { path: '/test', exact: true, name: 'Menu', element: JTest },
  { path: '/login', exact: true, name: 'Login', element: Login },
  { path: '/forgot-password', exact: true, name: 'ForgotPassword', element: ForgotPassword },
  { path: '/sign-up', exact: true, name: 'ForgotPassword', element: CreateAccount },
  {
    path: '/checkout',
    exact: true,
    name: 'JCheckout',
    element: JCheckout,
  },
];

export default routes;

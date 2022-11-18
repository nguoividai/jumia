import React from 'react';
import { Outlet } from 'react-router-dom';

const AppContent = () => {
  return (
    <div className="app-content">
      <Outlet />
    </div>
  );
};

export default React.memo(AppContent);

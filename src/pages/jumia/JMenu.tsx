import React from 'react';
import MenuDesktop from './menu/MenuDesktop';
import MenuMobile from './menu/MenuMobile';

const JMenu = () => {
  return (
    <>
      <div className="d-none d-sm-block d-md-none mt-4">
        <MenuMobile />
      </div>

      <div className="d-none d-md-block d-lg-block d-xl-block mt-4">
        <MenuDesktop />
      </div>
    </>
  );
};

export default React.memo(JMenu);

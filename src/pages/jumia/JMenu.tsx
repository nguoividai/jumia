import React from 'react';
import { MAX_SCREEN_MOBILE } from 'src/default/app.default';
import useWindowSize from 'src/hooks/useWindowSize';
import MenuDesktop from './menu/MenuDesktop';
import MenuMobile from './menu/MenuMobile';

const JMenu = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width && width <= MAX_SCREEN_MOBILE && (
        <div className="d-block d-md-block d-lg-none mt-4">
          <MenuMobile />
        </div>
      )}

      {width && +width > MAX_SCREEN_MOBILE && (
        <div className="d-none d-md-block d-lg-block d-xl-block mt-4">
          <MenuDesktop />
        </div>
      )}
    </>
  );
};

export default React.memo(JMenu);

import React from 'react';
import JConfirmDesktop from './confirm/JConfirmDesktop';
import JConfirmMobile from './confirm/JConfirmMobile';

const JConfirm = () => {
  return (
    <>
      <div className="d-block d-md-block d-lg-none">
        <JConfirmMobile />
      </div>

      <div className="d-none d-md-none d-lg-block d-xl-block ">
        <JConfirmDesktop />
      </div>
    </>
  );
};

export default React.memo(JConfirm);

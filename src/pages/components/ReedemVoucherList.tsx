import React from 'react';
import CardVoucher from 'src/components/card/CardVoucher';

const ReedemVoucherList = () => {
  return (
    <>
      {[...Array(10)].map((e, idx) => (
        <CardVoucher key={idx} validDate="12/12/12" title="incentive for shoppingat "></CardVoucher>
      ))}
    </>
  );
};

export default React.memo(ReedemVoucherList);

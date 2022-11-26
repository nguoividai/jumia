import React, { useState } from 'react';
import { CardProductToAddProps } from 'src/components/card/CardProductToAdd';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import JChooseSizeMobile from '../jumia/mobile/JChooseSizeMobile';

type ProductWithPopupProps = CardProductToAddProps & {
  trigger?: React.ReactNode;
};

const ProductWithPopup: React.FC<ProductWithPopupProps> = ({ trigger }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      <ModalOverPage
        trigger={<span onClick={() => setVisible(true)}>{trigger}</span>}
        visible={visible}
        onClose={handleClose}
      >
        <JChooseSizeMobile onClose={handleClose} />
      </ModalOverPage>
    </>
  );
};

export default React.memo(ProductWithPopup);

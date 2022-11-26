import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

type ModalOverPageProps = {
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
};

const ModalOverPage: React.FC<ModalOverPageProps> = ({
  trigger,
  children,
  visible,
  footer,
  onClose,
}) => {
  const [show, setShow] = useState<boolean>(visible || false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(visible || false);
  }, [visible]);

  return (
    <>
      <span onClick={handleShow}>{trigger}</span>

      <Modal
        className="modal-product"
        show={show}
        fullscreen={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onClose={onClose}
      >
        <Modal.Body>{children}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal>
    </>
  );
};

export default React.memo(ModalOverPage);

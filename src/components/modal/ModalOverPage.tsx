import React, { useEffect, useState } from 'react';
import { Modal, ModalProps } from 'react-bootstrap';

type ModalOverPageProps = {
  trigger?: React.ReactNode;
  title?: React.ReactNode | string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
} & ModalProps;

const ModalOverPage: React.FC<ModalOverPageProps> = ({
  trigger,
  children,
  visible,
  footer,
  onClose,
  title,
  ...rest
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
        fullscreen={rest.fullscreen || true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onClose={onClose}
        {...rest}
      >
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal>
    </>
  );
};

export default React.memo(ModalOverPage);

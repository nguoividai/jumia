import React, { useEffect, useState } from 'react';
import { Modal, Offcanvas, OffcanvasProps } from 'react-bootstrap';

type OffCanvasOverPageProps = {
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
  title?: string;
} & OffcanvasProps;

const OffCanvasOverPage: React.FC<OffCanvasOverPageProps> = ({
  trigger,
  children,
  visible,
  title,
  onClose,
  ...offcanvasProps
}) => {
  const [show, setShow] = useState<boolean>(visible || false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(visible || false);
  }, [visible]);

  return (
    <>
      <div onClick={handleShow}>{trigger}</div>

      <Offcanvas
        backdrop="static"
        placement="bottom"
        show={show}
        onHide={handleClose}
        onClose={onClose}
        {...offcanvasProps}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default React.memo(OffCanvasOverPage);

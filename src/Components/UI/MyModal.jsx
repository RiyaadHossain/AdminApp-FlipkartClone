import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyModal({
  show,
  children,
  handleSubmit,
  setShow,
  title,
  buttonName,
  size,
}) {
  return (
    <Modal show={show} onHide={() => setShow(false)} size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      {buttonName && (
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            {buttonName}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default MyModal;

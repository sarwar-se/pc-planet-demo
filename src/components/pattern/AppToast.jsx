import { Toast, ToastBody, ToastContainer, ToastHeader } from "react-bootstrap";

const AppToast = ({
  show,
  onClose,
  header,
  message,
  delay,
  position,
  colorVarient,
}) => {
  return (
    <ToastContainer className="position-fixed p-2" position={position}>
      <Toast
        show={show}
        onClose={onClose}
        delay={delay | 2000}
        autohide
        bg={colorVarient}
      >
        <ToastHeader>
          <strong className="me-auto">{header}</strong>
        </ToastHeader>
        <ToastBody>{message}</ToastBody>
      </Toast>
    </ToastContainer>
  );
};

export default AppToast;

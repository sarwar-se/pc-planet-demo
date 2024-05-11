import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { colorVarient } from "../../constants/appConstant";

const AppModal = ({
  show,
  handleAccept,
  handleCancel,
  normalTitle,
  headerTitle,
  acceptText = "Ok",
  cancelText = "Close",
  acceptBtnColor = colorVarient.PRIMARY,
  cancelBtnColor = colorVarient.SECONDARY,
  showTitle = false,
  showHeader = true,
  showFooter = true,
  children,
  animation,
  closeButton = false,
  ...rest
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleCancel} animation={animation} {...rest}>
        {showTitle && <ModalTitle variant="right">{normalTitle}</ModalTitle>}

        {showHeader && (
          <ModalHeader closeButton={closeButton}>
            <ModalTitle>{headerTitle}</ModalTitle>
          </ModalHeader>
        )}

        <ModalBody>{children}</ModalBody>

        {showFooter && (
          <Modal.Footer>
            <Button variant={acceptBtnColor} onClick={handleAccept}>
              {acceptText}
            </Button>
            <Button variant={cancelBtnColor} onClick={handleCancel}>
              {cancelText}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
};

export default AppModal;

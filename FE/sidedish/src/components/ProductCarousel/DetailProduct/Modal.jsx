import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import DetailProduct from "./DetailProduct";

const ModalOverlay = styled.div``;

const ModalWrapper = styled.div``;

const ModalDetail = styled.div``;

const ModalHeader = styled.div``;

const Close = styled.button``;

const Modal = ({ isShowing, hide, hash }) => {
  return (
    <div>
      {isShowing &&
        ReactDOM.createPortal(
          <>
            <ModalOverlay />
            <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
              <ModalDetail>
                <ModalHeader>
                  <Close type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </Close>
                </ModalHeader>
                <DetailProduct hash={hash}></DetailProduct>
              </ModalDetail>
            </ModalWrapper>
          </>,
          document.getElementById("root")
        )}
    </div>
  );
};

export default Modal;

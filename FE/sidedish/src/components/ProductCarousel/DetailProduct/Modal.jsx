import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import DetailProduct from "./DetailProduct";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

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

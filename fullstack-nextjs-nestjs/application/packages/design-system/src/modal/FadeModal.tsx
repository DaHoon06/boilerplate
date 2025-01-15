import React, { ReactElement, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const ModalLayout = styled(motion.dialog)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.54);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 9999;
  border: none;
  margin: 0;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 8px;
    border: 1px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (max-width: 769px) {
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const ModalBody = styled(motion.div)<{
  $showClose?: boolean;
  $maxWidth?: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $showClose }) =>
    $showClose ? "flex-start" : "center"};
  align-items: center;
  width: auto;
  min-width: 200px;
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : "100%")};
  min-height: 200px;
  height: auto;
  border-radius: 16px;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid #999999;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ModalCloseButtonWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
`;

export const ModalContentsBox = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
`;

interface FadeModalProps {
  isOpen: boolean;
  showClose?: boolean;
  outClickEvent?: (e: React.MouseEvent) => void;
  onCloseModal: () => void;
  outClick?: boolean;
  ele: any;
  maxWidth?: number;
  children: ReactNode;
}

export const FadeModal = (props: FadeModalProps): ReactElement => {
  const { isOpen, showClose, outClick = true, ele, maxWidth, children } = props;
  const { onCloseModal, outClickEvent } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalLayout
          key={"fade-modal"}
          onClick={outClick ? outClickEvent : () => {}}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ModalContainer>
            <ModalBody ref={ele} $showClose={showClose} $maxWidth={maxWidth}>
              {!!showClose && (
                <ModalCloseButtonWrapper>
                  <button
                    type={"button"}
                    aria-label={"modal-close-button"}
                    onClick={onCloseModal}
                  >
                    X
                  </button>
                </ModalCloseButtonWrapper>
              )}
              <ModalContentsBox ref={ele}>{children}</ModalContentsBox>
            </ModalBody>
          </ModalContainer>
        </ModalLayout>
      )}
    </AnimatePresence>
  );
};

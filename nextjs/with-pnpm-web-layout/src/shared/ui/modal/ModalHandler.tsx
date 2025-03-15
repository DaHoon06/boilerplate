"use client";

import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import useModalStore, { ModalType } from "@/shared/store/modalStore";
import { FadeModal } from "./fade-modal";
import useModal from "@/shared/hooks/useModal";

type Modal = PropsWithChildren;

export type ModalProps = {
  isOpen: boolean;
  ele: Element | any;
} & Modal;

interface ModalHandlerProps extends PropsWithChildren {
  outerClick?: boolean;
  modalType: ModalType;
}

export const ModalHandler: React.FC<ModalHandlerProps> = (props) => {
  const [showChild, setShowChild] = useState(false);
  const { children } = props;
  const { isOpen } = useModalStore();
  const ele = useRef<HTMLDivElement>(null);

  const { outerClickEvent, onRequestClose } = useModal(ele);

  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#modal") as HTMLDivElement);

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  if (!showChild) return null;

  const modalHandler = (children: ReactNode): ReactElement => {
    return (
      <>
        {/* <div
          className={styles.modalBackGroundLayer}
          onClick={outerClickEvent}
          style={{
            opacity: isOpen ? "1" : "0",
            visibility: isOpen ? "visible" : "hidden",
          }}
        /> */}
        <FadeModal ele={ele} isOpen={isOpen} onCloseModal={onRequestClose}>
          {children}
        </FadeModal>
      </>
    );
  };

  if (!element) return <></>;
  else return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};

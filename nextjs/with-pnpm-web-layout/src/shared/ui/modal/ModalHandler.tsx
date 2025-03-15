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
import styles from "./modal.module.css";

type Modal = PropsWithChildren;

export type ModalProps = {
  isOpen: boolean;
  ele: Element | any;
} & Modal;

interface ModalHandlerProps extends PropsWithChildren {
  outerClick?: boolean;
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
        <FadeModal
          ele={ele}
          isOpen={isOpen}
          onCloseModal={onRequestClose}
          outClickEvent={outerClickEvent}
        >
          {children}
        </FadeModal>
      </>
    );
  };

  if (!element) return <></>;
  else return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};

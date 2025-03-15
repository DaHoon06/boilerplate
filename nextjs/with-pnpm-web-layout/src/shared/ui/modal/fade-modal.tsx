"use client";

import React, { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./fade-modal.module.css";

interface FadeModalProps {
  isOpen: boolean;
  showClose?: boolean;
  outClickEvent?: (e: React.MouseEvent) => void;
  onCloseModal: () => void;
  outClick?: boolean;
  ele: any;
  children: React.ReactNode;
}

export const FadeModal = (props: FadeModalProps): ReactElement => {
  const { isOpen, showClose, outClick = true, ele, children } = props;
  const { onCloseModal, outClickEvent } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          key={"fade-modal"}
          onClick={outClick ? outClickEvent : () => {}}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles["modal-layout"]}
        >
          <motion.div className={styles["modal-container"]}>
            <motion.div ref={ele} className={styles["modal-body"]}>
              {!!showClose && (
                <motion.header className={styles["modal-close-button-wrapper"]}>
                  <button
                    type="button"
                    aria-label={"modal-close-button"}
                    onClick={onCloseModal}
                  >
                    x
                  </button>
                </motion.header>
              )}
              <motion.div className={styles["modal-content-box"]}>
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

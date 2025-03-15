"use client";

import { Header as BaseHeader } from "@/shared/ui/layouts";
import { ReactElement } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/shared/ui/buttons";
import useModalStore, { ModalType } from "@/shared/store/modalStore";
import { ModalHandler } from "@/shared/ui/modal/ModalHandler";

export const Header = (): ReactElement => {
  const { isOpen, type, setIsOpen, setModalType } = useModalStore();
  const handleClickModal = () => {
    if (isOpen) {
      setIsOpen(false);
      setModalType(ModalType.EMPTY);
    } else {
      setModalType(ModalType.TEST_MODAL);
      setIsOpen(true);
    }
  };
  return (
    <BaseHeader>
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/">
          <span className="text-xl font-bold">로고</span>
        </Link>
        <input
          type="text"
          className="border rounded-md px-2 py-1"
          placeholder="검색..."
        />

        <button type="button" onClick={handleClickModal}>
          테스트 모달
        </button>

        <ThemeToggleButton />
      </nav>

      {type === ModalType.TEST_MODAL && (
        <ModalHandler>
          <div>테스트</div>
        </ModalHandler>
      )}
    </BaseHeader>
  );
};

"use client";

import Image from "next/image";
import Contact from "../forms/contact-form";

interface ModalProps {
  setShowModal?: (arg: boolean) => void;
  showModal?: boolean;
}

export default function Modal({ setShowModal, showModal }: ModalProps) {
  if (!showModal || !setShowModal) return null;

  return (
    <div className="z-80 fixed left-0 top-0 z-[1055] flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden  overscroll-none bg-slate-900/70 outline-none">
      <div className="font-text-regular-light relative mt-[4rem] box-border flex max-w-3xl flex-col items-center justify-start gap-[2.5rem] overflow-hidden overscroll-none bg-white px-[1.5rem] py-[2.5rem] text-center text-[1.5rem] text-black sm:py-5 mq623:mt-[16rem]">
        <figure
          className="m-0 mr-4 cursor-pointer self-end"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          <Image
            width={35}
            height={35}
            src="/icons/close.svg"
            alt="close modal icon"
          />
        </figure>
        <Contact />
      </div>
    </div>
  );
}

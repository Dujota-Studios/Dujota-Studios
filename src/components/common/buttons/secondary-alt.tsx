"use client";

import Modal from "../modals";
import { useModal } from "~/hooks/use-modal";

export default function SecondaryAltButton() {
  const { open, setOpen } = useModal();

  return (
    <>
      <button
        className="hover:bg-gold box-border flex w-[15.56rem] cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-none border-b-[5px] border-r-[5px] border-solid border-secondary-2 bg-secondary-4 px-[2.31rem] py-[0.75rem] [border:none] mq623:hidden"
        aria-label="Contact us for custom software solutions"
        onClick={() => setOpen(true)}
      >
        <span className="relative text-left font-paragraph-regular-semibold text-[1rem] font-medium leading-[1rem] text-black">
          Get Free Consultancy
        </span>
      </button>

      {open && <Modal showModal={open} setShowModal={setOpen} />}
    </>
  );
}

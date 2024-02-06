"use client";

import Modal from "../modals";
import { useModal } from "~/hooks/use-modal";

export default function ButtonPrimary() {
  const { open, setOpen } = useModal();
  return (
    <>
      <button
        className="flex cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-2xl bg-secondary-3 px-[2.5rem] py-[1rem] [border:none] hover:bg-teal mq623:self-stretch mq450:py-[0.75rem]"
        aria-label="Contact us for custom software solutions"
        onClick={() => setOpen(true)}
      >
        <span className="relative text-left font-paragraph-regular-semibold text-[1.25rem] font-medium leading-[1.5rem] text-colors-background-bg-primary">
          Get in Touch
        </span>
      </button>

      {open && <Modal showModal={open} setShowModal={setOpen} />}
    </>
  );
}

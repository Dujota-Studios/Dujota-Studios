"use client";
import { useModal } from "~/hooks/use-modal";
import Modal from "../modals";

export default function ButtonSecondary() {
  const { open, setOpen } = useModal();

  return (
    <>
      <button
        className="flex cursor-pointer flex-col items-center justify-center self-stretch whitespace-nowrap rounded-2xl bg-secondary-1 px-[3rem] py-[0.75rem] [border:none] hover:bg-goldenrod mq450:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem]"
        aria-label="Get a free consultation"
        onClick={() => setOpen(true)}
      >
        <span className="relative text-left font-paragraph-regular-semibold text-[1.25rem] font-medium leading-[1.5rem] text-primary-1">
          Get A Free Consultation
        </span>
      </button>
      {open && <Modal showModal={open} setShowModal={setOpen} />}
    </>
  );
}

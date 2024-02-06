"use client";

import Image from "next/image";
import { useModal } from "~/hooks/use-modal";

export default function MobileMenu() {
  const { open, setOpen } = useModal();

  return (
    <button
      aria-label="Toggle mobile menu"
      className="mq900:inline hidden cursor-pointer border-none bg-transparent"
      onClick={() => setOpen(true)}
    >
      <Image
        className="relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden"
        id="mobile-menu-icon"
        alt="Mobile Menu Icon"
        role="presentation"
        width={0}
        height={0}
        src="/icons/mobile-menu.svg"
      />
    </button>
  );
}

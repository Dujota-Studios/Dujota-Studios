import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-[0] z-[99] flex flex-row items-center justify-between gap-[1.25rem] self-stretch bg-primary-2 px-[1rem] py-[1.5rem]">
      <Image
        className="relative h-[2rem] w-[9.44rem] shrink-0 overflow-hidden"
        loading="eager"
        alt="Dujota Studios Logo"
        width={0}
        height={0}
        src="/logos/primary-tagline.svg"
      />
      <Image
        className="relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden"
        id="mobile-menu-icon"
        alt="Mobile Menu Icon"
        width={0}
        height={0}
        src="/icons/mobile-menu.svg"
      />
    </header>
  );
}

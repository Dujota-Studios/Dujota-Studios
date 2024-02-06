import Logo from "~/components/logo";
import Navbar from "./navbar";
import SecondaryAltButton from "../../buttons/secondary-alt";
import MobileMenu from "../../buttons/mobile-menu";

export default function Header() {
  return (
    <header className="sticky top-[0] z-[99] flex flex-row items-center justify-between gap-[1.25rem] self-stretch bg-primary-2 px-[1rem] py-[1.5rem]">
      <Logo />
      <Navbar />
      <SecondaryAltButton />
      <MobileMenu />
    </header>
  );
}

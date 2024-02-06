import Link from "next/link";
// TODO: Add ids to body and navbar item href
export default function Navbar() {
  return (
    <nav
      aria-label="desktop navigation menu"
      className="flex max-w-full flex-row items-center justify-end gap-[2rem] self-stretch mq450:gap-[2rem]"
    >
      <ul className="mq900:hidden flex  max-w-full list-none flex-row items-center justify-center gap-[1.5rem] ">
        <li className="relative">
          <Link
            href="#"
            className="text-primary-1 no-underline hover:underline"
          >
            Projects
          </Link>
        </li>
        <li className="relative">
          <Link
            href="#"
            className="text-primary-1 no-underline hover:underline"
          >
            About us
          </Link>
        </li>
        <li className="relative">
          <Link
            className="text-primary-1 no-underline hover:underline"
            href="#"
          >
            Services
          </Link>
        </li>
        <li className="relative">
          <Link
            className="text-primary-1 no-underline hover:underline"
            href="#"
          >
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}

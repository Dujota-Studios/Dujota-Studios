import Image from "next/image";

export default function CloseButton({
  label,
  toggle,
}: {
  toggle: (arg: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="submit"
      onClick={() => toggle(false)}
      className="bg-primary1 box-border flex cursor-pointer flex-row items-center justify-center gap-[0.5rem] rounded-lg px-[1.5rem] py-[0.5rem]"
    >
      <Image
        width={50}
        height={50}
        className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
        alt=""
        src="/icons/forms/save.svg"
      />
      <div className="bg-primary1 font-text-regular-light relative text-left text-[1.25rem] font-light leading-[150%] text-white">
        {label}
      </div>
    </button>
  );
}

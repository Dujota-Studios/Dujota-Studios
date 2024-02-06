import Image from "next/image";

export default function ServicesImage() {
  return (
    <figure className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-[0rem] py-[0rem]">
      <div className="box-border flex w-[23.75rem] max-w-[106%] shrink-0 flex-row items-center justify-center overflow-hidden px-[1.88rem] py-[2.06rem]">
        <Image
          className="h-full w-full max-w-full flex-1 overflow-hidden object-contain [transform:scale(1.18)]"
          loading="eager"
          alt="A detailed dashboard showcasing various UI components and data visualization."
          width={300}
          height={400}
          src="/hero/dashboard.png"
        />
      </div>
    </figure>
  );
}

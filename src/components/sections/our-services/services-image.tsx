import Image from "next/image";

export default function ServicesImage() {
  return (
    <figure className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-[0rem] py-[0rem]">
      <div className="box-border flex w-[52.5rem] max-w-[106%] shrink-0 flex-row items-center justify-center overflow-hidden px-[1.88rem] py-[2.06rem] mq450:w-[23.75rem] mq450:p-0">
        <Image
          className="h-full w-full max-w-full flex-1 overflow-hidden object-contain [transform:scale(1.33)] mq450:[transform:scale(1.18)]"
          loading="eager"
          alt="A detailed dashboard showcasing various UI components and data visualization."
          width={800}
          height={600}
          src="/hero/dashboard.png"
        />
      </div>
    </figure>
  );
}

import Image from "next/image";

export default function ServicesImage() {
  return (
    <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-[0rem] py-[0rem]">
      <div className="box-border flex w-[23.75rem] max-w-[106%] shrink-0 flex-row items-center justify-center overflow-hidden px-[1.88rem] py-[2.06rem]">
        <div className="relative flex h-[15.89rem] flex-1 items-center justify-center">
          <Image
            className="absolute left-[-0.19rem] top-[0.63rem] h-full w-full max-w-full flex-1 overflow-hidden object-contain [transform:scale(1.18)]"
            loading="eager"
            alt="our services image"
            width={300}
            height={400}
            src="/hero/dashboard.png"
          />
        </div>
      </div>
    </div>
  );
}

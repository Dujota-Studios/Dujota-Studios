import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="mq900:h-[3rem] relative h-[4rem] w-[18.89rem] shrink-0 overflow-hidden mq1100:w-[16rem] mq450:h-[2rem] mq450:w-[9.44rem]"
      loading="eager"
      alt="Dujota Studios Logo"
      width={0}
      height={0}
      src="/logos/primary-tagline.svg"
    />
  );
}

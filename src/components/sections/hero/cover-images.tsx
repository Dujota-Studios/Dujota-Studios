import Image from "next/image";

export default function CoverImages() {
  return (
    <aside
      aria-label="Gallery of cover images"
      className="z-[1] mt-[-5rem] box-border flex min-h-[25.81rem] flex-row flex-wrap items-center justify-center gap-[1.5rem] self-stretch px-[0rem] py-[2.5rem]"
    >
      <Image
        className="relative h-[18.13rem] w-[28.13rem] object-cover mq1100:h-[9.67rem]  mq1100:w-[20rem]"
        loading="eager"
        alt="Food services digital interface mockup"
        width={300}
        height={300}
        src="/hero/food-services.png"
      />
      <Image
        className="relative h-[18.13rem] w-[28.13rem] object-cover mq1100:h-[9.67rem]  mq1100:w-[20rem]"
        loading="eager"
        alt="Preview of various card designs"
        width={300}
        height={300}
        src="/hero/cards.png"
      />
      <Image
        className="relative h-[18.13rem] w-[28.13rem] object-cover mq1100:h-[9.67rem] mq1100:w-[20rem]"
        loading="eager"
        alt="Eco-friendly mobile app interface"
        width={300}
        height={300}
        src="/hero/green-mobile.png"
      />
      <Image
        className="relative hidden h-[18.13rem] w-[28.13rem] object-cover mq1275:inline  mq1100:h-[9.67rem] mq1100:w-[20rem]"
        loading="eager"
        alt="Dark theme AI interface preview"
        width={300}
        height={300}
        src="/hero/ai-dark.png"
      />
    </aside>
  );
}

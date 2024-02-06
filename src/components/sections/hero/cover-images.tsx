import Image from "next/image";

export default function CoverImages() {
  return (
    <aside className="z-[1] mt-[-5rem] box-border flex min-h-[25.81rem] flex-row flex-wrap items-center justify-center gap-[1.5rem] self-stretch px-[0rem] py-[2.5rem]">
      {/* <div className="flex flex-row items-center justify-center gap-[1.5rem]">

      </div> */}
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="cover-image-1"
        width={300}
        height={300}
        src="/hero/ai-dark.png"
      />
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="cover-image-2"
        width={300}
        height={300}
        src="/hero/cards.png"
      />
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="cover-image-3"
        width={300}
        height={300}
        src="/hero/food-services.png"
      />

      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="cover-image-4"
        width={300}
        height={300}
        src="/hero/green-mobile.png"
      />
      {/* <Image
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt="cover-image-4"
        />
        <Image
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt="cover-image-5"
        /> */}
    </aside>
  );
}

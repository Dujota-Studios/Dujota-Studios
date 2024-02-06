import Image from "next/image";

export default function CoverImages() {
  return (
    <aside
      aria-label="Gallery of cover images"
      className="z-[1] mt-[-5rem] box-border flex min-h-[25.81rem] flex-row flex-wrap items-center justify-center gap-[1.5rem] self-stretch px-[0rem] py-[2.5rem]"
    >
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="Dark theme AI interface preview"
        width={300}
        height={300}
        src="/hero/ai-dark.png"
      />
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="Preview of various card designs"
        width={300}
        height={300}
        src="/hero/cards.png"
      />
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="Food services digital interface mockup"
        width={300}
        height={300}
        src="/hero/food-services.png"
      />
      <Image
        className="relative h-[9.67rem] w-[20rem] object-cover"
        loading="eager"
        alt="Eco-friendly mobile app interface"
        width={300}
        height={300}
        src="/hero/green-mobile.png"
      />
    </aside>
  );
}

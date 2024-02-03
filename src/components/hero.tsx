import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start">
      <article className="self-stretch bg-primary-2 flex flex-col items-center justify-center py-[5rem] px-[1rem] gap-[2.5rem] text-center text-[1.13rem] text-primary-1 font-headings-h4-desktop mq450:pt-[3.25rem] mq450:pb-[3.25rem] mq450:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
          <div className="self-stretch relative tracking-[0.06em] leading-[1.38rem] uppercase font-semibold">
            software development company
          </div>
          <h1 className="m-0 self-stretch relative text-[2rem] leading-[2.25rem] font-medium font-inherit">
            We do custom software solutions and consulting
          </h1>
        </div>
        <button className="cursor-pointer [border:none] py-[0.75rem] px-[2.5rem] bg-secondary-3 self-stretch rounded-2xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-teal">
          <div className="relative text-[1.25rem] leading-[1.5rem] font-medium font-paragraph-regular-semibold text-colors-background-bg-primary text-left">
            Get in Touch
          </div>
        </button>
      </article>
      <aside className="self-stretch flex flex-row flex-wrap items-center justify-center py-[2.5rem] px-[0rem] box-border gap-[1.5rem] min-h-[25.81rem] z-[1] mt-[-5rem]">
        <img
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt=""
        />
        <img
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt=""
        />
        <img className="h-[9.67rem] w-[15rem] relative object-cover" alt="" />
        <img
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt=""
        />
        <img
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt=""
        />
        <img
          className="h-[9.67rem] w-[15rem] relative object-cover"
          loading="eager"
          alt=""
        />
        <img className="h-[9.67rem] w-[15rem] relative object-cover" alt="" />
        <img className="h-[9.67rem] w-[15rem] relative object-cover" alt="" />
        <img
          className="h-[9.81rem] w-[15rem] relative object-cover hidden"
          alt=""
        />
      </aside>
    </section>
  );
};

export default Hero;

import type { NextPage } from "next";
import CoverImages from "./cover-images";

const Hero: NextPage = () => {
  return (
    <section
      aria-labelledby="main-heading"
      className="flex flex-col items-start justify-start self-stretch"
    >
      <header className="flex flex-col items-center justify-center gap-[2.5rem] self-stretch bg-primary-2 px-[1rem] py-[5rem] text-center font-headings-h4-desktop text-[1.13rem] text-primary-1 mq450:box-border mq450:pb-[3.25rem] mq450:pt-[3.25rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem] self-stretch">
          {/* <div className="relative self-stretch font-semibold uppercase leading-[1.38rem] tracking-[0.06em]">
            software development company
          </div> */}
          <h1
            id="main-heading"
            className="font-inherit relative m-0 self-stretch text-[2rem] font-medium leading-[2.25rem]"
          >
            We do custom software solutions and consulting
          </h1>
        </div>
        <button
          className="flex cursor-pointer flex-row items-center justify-center self-stretch whitespace-nowrap rounded-2xl bg-secondary-3 px-[2.5rem] py-[0.75rem] [border:none] hover:bg-teal"
          aria-label="Contact us for custom software solutions"
        >
          <span className="relative text-left font-paragraph-regular-semibold text-[1.25rem] font-medium leading-[1.5rem] text-colors-background-bg-primary">
            Get in Touch
          </span>
        </button>
      </header>
      <CoverImages />
    </section>
  );
};

export default Hero;

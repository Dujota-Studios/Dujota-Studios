import type { NextPage } from "next";
import CoverImages from "./cover-images";
import ButtonPrimary from "~/components/common/buttons/primary";

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
            className="font-inherit relative m-0 mx-auto w-[60%] self-stretch text-[6rem] font-medium leading-[5.5rem] mq1100:w-full mq1100:text-[5rem] mq750:text-[4rem] mq750:leading-[3.5rem] mq623:text-[3rem] mq450:text-[2rem] mq450:leading-[2.25rem]"
          >
            We do custom software solutions and consulting
          </h1>
          <ButtonPrimary />
        </div>
      </header>
      <CoverImages />
    </section>
  );
};

export default Hero;

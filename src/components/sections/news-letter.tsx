import type { NextPage } from "next";

const NewsLetter: NextPage = () => {
  return (
    <section className="box-border flex min-h-[15rem] flex-col items-start justify-center gap-[2.5rem] self-stretch bg-primary-1 px-[1rem] py-[0rem] text-left font-headings-h4-desktop text-[1.5rem] text-colors-background-bg-primary">
      <div className="flex w-full min-w-[30rem] max-w-[48rem] flex-col items-start justify-start gap-[0.75rem] mq750:max-w-full">
        <h3 className="font-inherit relative m-0 self-stretch text-inherit font-semibold leading-[1.75rem]">
          Join 2,000+ subscribers
        </h3>
        <div className="relative self-stretch font-paragraph-regular-semibold text-[1rem] leading-[1.5rem] text-grey-200">
          Stay in the loop with everything you need to know.
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-start gap-[0.5rem] self-stretch rounded-radius-md border-[1px] border-solid border-colors-border-border-primary bg-colors-background-bg-primary py-spacing-lg pl-[1.19rem] pr-[1.31rem] font-text-sm-semibold text-[1rem] text-colors-text-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
        <div className="flex min-w-[8.5rem] flex-1 flex-row items-center justify-start">
          <div className="relative flex-1 overflow-hidden text-ellipsis whitespace-nowrap leading-[1.5rem]">
            Enter your email
          </div>
        </div>
        <button className="flex cursor-pointer flex-row items-center justify-center gap-[0.25rem] overflow-hidden rounded-radius-md border-[1px] border-solid border-secondary-1 bg-secondary-1 px-[0.81rem] py-[0.63rem] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
          <img
            className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
            alt=""
          />
          <div className="flex flex-row items-center justify-center px-spacing-xxs py-[0rem]">
            <div className="relative text-left font-text-sm-semibold text-[0.88rem] font-semibold leading-[1.25rem] text-primary-1">
              Subscribe
            </div>
          </div>
          <img
            className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;

import type { NextPage } from "next";

const NewsLetter: NextPage = () => {
  return (
    <section className="self-stretch bg-primary-1 flex flex-col items-start justify-center py-[0rem] px-[1rem] box-border gap-[2.5rem] min-h-[15rem] text-left text-[1.5rem] text-colors-background-bg-primary font-headings-h4-desktop">
      <div className="w-full flex flex-col items-start justify-start gap-[0.75rem] min-w-[30rem] max-w-[48rem] mq750:max-w-full">
        <h3 className="m-0 self-stretch relative text-inherit leading-[1.75rem] font-semibold font-inherit">
          Join 2,000+ subscribers
        </h3>
        <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-paragraph-regular-semibold text-grey-200">
          Stay in the loop with everything you need to know.
        </div>
      </div>
      <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row flex-wrap items-center justify-start py-spacing-lg pr-[1.31rem] pl-[1.19rem] gap-[0.5rem] text-[1rem] text-colors-text-text-placeholder font-text-sm-semibold border-[1px] border-solid border-colors-border-border-primary">
        <div className="flex-1 flex flex-row items-center justify-start min-w-[8.5rem]">
          <div className="flex-1 relative leading-[1.5rem] overflow-hidden text-ellipsis whitespace-nowrap">
            Enter your email
          </div>
        </div>
        <button className="cursor-pointer py-[0.63rem] px-[0.81rem] bg-secondary-1 rounded-radius-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] border-[1px] border-solid border-secondary-1">
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
            alt=""
          />
          <div className="flex flex-row items-center justify-center py-[0rem] px-spacing-xxs">
            <div className="relative text-[0.88rem] leading-[1.25rem] font-semibold font-text-sm-semibold text-primary-1 text-left">
              Subscribe
            </div>
          </div>
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden min-h-[1.25rem]"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;

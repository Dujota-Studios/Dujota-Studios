import type { NextPage } from "next";

const NewsLetter: NextPage = () => {
  return (
    <section
      className="mq900:gap-0 mq900:pl-[2.5rem] mq900:pr-[2.5rem] mq900:box-border mq900:flex-wrap mq900:justify-center mq900:items-center box-border flex h-[20rem] min-h-[15rem] max-w-full flex-row items-center gap-[2rem] self-stretch bg-primary-1 px-[5rem] py-[0rem] text-left font-headings-h4-desktop text-[1.88rem] text-colors-background-bg-primary mq450:h-[25rem]"
      aria-labelledby="newsletter-heading"
    >
      <header className="mq900:max-w-full  mq1150:w-[30rem] box-border flex w-[46rem] max-w-[48rem] flex-col items-start justify-start gap-[1rem] px-[0rem] py-[1.25rem]">
        <h2
          id="newsletter-heading"
          className="mq900:text-center font-inherit relative m-0 mt-1 self-stretch text-inherit font-semibold leading-[1.75rem]"
        >
          Join 2,000+ subscribers
        </h2>

        <p className="mq900:text-center relative m-0 self-stretch font-paragraph-regular-semibold text-[1rem] leading-[1.5rem] text-grey-200">
          Stay in the loop with everything you need to know.
        </p>
      </header>

      <form
        className="font-text-md-semibold mq900:w-[40rem] mq900:flex-wrap box-border flex w-[40rem] min-w-[20.81rem] max-w-full flex-row items-center justify-start gap-[0.5rem] rounded-radius-md border-[1px] border-solid border-colors-border-border-primary bg-colors-background-bg-primary py-spacing-lg pl-[1.19rem] pr-[1.31rem] text-[1rem] text-colors-text-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] mq450:flex-wrap"
        action="#"
        method="POST"
      >
        <label htmlFor="email" className="sr-only">
          Enter your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="min-w-[8.5rem] flex-1 rounded-radius-md border-none bg-transparent px-4 py-2 text-lg text-black mq450:py-5 mq450:text-sm"
          placeholder="Enter your email"
          aria-required="true"
        />
        <button
          type="submit"
          className="flex cursor-pointer flex-row items-center justify-center gap-[0.38rem] overflow-hidden rounded-radius-md border-[1px] border-solid border-secondary-1 bg-secondary-1 px-[1.06rem] py-spacing-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] mq450:w-full"
          aria-label="Subscribe to newsletter"
        >
          <span className="font-text-md-semibold relative text-left text-[1rem] font-semibold leading-[1.5rem] text-primary-1">
            Subscribe
          </span>
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;

import type { NextPage } from "next";

const NewsLetter: NextPage = () => {
  return (
    <section
      className="box-border flex min-h-[15rem] flex-col items-start justify-center gap-[0.75rem] self-stretch bg-primary-1 px-[1rem] py-[0rem] text-left font-headings-h4-desktop text-[1.5rem] text-colors-background-bg-primary"
      aria-labelledby="newsletter-heading"
    >
      <h2
        id="newsletter-heading"
        className="font-inherit relative m-0 mt-1 self-stretch text-inherit font-semibold leading-[1.75rem]"
      >
        Join 2,000+ subscribers
      </h2>
      <p className="relative m-0 self-stretch font-paragraph-regular-semibold text-[1rem] leading-[1.5rem] text-grey-200">
        Stay in the loop with everything you need to know.
      </p>
      <form
        className="m-0 mt-10 flex flex-row flex-wrap items-center justify-start gap-[0.5rem] self-stretch rounded-radius-md border-[1px] border-solid border-colors-border-border-primary bg-colors-background-bg-primary py-spacing-lg pl-[1.19rem] pr-[1.31rem] font-text-sm-semibold text-[1rem] text-colors-text-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]"
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
          className="min-w-[8.5rem] flex-1 rounded-radius-md border-none bg-transparent px-4 py-2 text-lg text-black"
          placeholder="Enter your email"
          aria-required="true"
        />
        <button
          type="submit"
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-radius-md bg-secondary-1 px-[0.81rem] py-[0.63rem] text-primary-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]"
          aria-label="Subscribe to newsletter"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;

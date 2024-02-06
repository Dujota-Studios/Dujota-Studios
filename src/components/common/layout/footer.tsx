import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="box-border flex max-w-full flex-row flex-wrap items-start justify-center self-stretch overflow-hidden bg-primary-2 px-[2rem] py-[4rem] text-left font-headings-h4-desktop text-[1.5rem] text-primary-1 mq750:box-border mq750:pb-[2.63rem] mq750:pt-[2.63rem]">
      <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[2rem] mq450:gap-[2rem]">
        <div className="flex min-h-[19.31rem] flex-row flex-wrap items-start justify-start gap-[4rem] self-stretch mq750:gap-[4rem] mq450:gap-[4rem]">
          {/* Services Section */}
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <h2 className="font-inherit relative m-0 text-inherit font-semibold leading-[2rem]">
              Services
            </h2>
            <ul className="my-0 flex list-none flex-col items-start justify-start gap-[0.5rem] p-0 font-paragraph-regular-semibold text-[1rem]">
              <li>UI UX Design</li>
              <li>Software Development</li>
              <li>Software Consulting</li>
            </ul>
          </div>
          {/* Social Section */}
          <div className="flex w-[4.63rem] flex-col items-start justify-start gap-[0.75rem]">
            <h2 className="font-inherit relative m-0 text-inherit font-semibold leading-[2rem]">
              Social
            </h2>
            <ul className="my-0 flex list-none flex-col items-start justify-start gap-[0.5rem] self-stretch p-0 font-paragraph-regular-semibold text-[1rem]">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          {/* Contact Us Section */}
          <div className="flex w-[12.5rem] flex-col items-start justify-start gap-[0.75rem]">
            <h2 className="font-inherit relative m-0 text-inherit font-semibold leading-[2rem]">
              Contact Us
            </h2>
            <address className="flex flex-col items-start justify-start gap-[0.5rem] self-stretch font-paragraph-regular-semibold text-[1rem] not-italic">
              <Link
                className="text-primary-1 no-underline hover:underline"
                href="mailto:dujotastudios@gmail.com"
              >
                Email Us
              </Link>
              <Link
                className="text-primary-1 no-underline hover:underline"
                href="https://wa.me/14168270213"
                target="_blank"
              >
                Chat on WhatsApp
              </Link>
            </address>
          </div>
        </div>
        {/* Contact Form Prompt */}
        <div className="flex flex-col items-start justify-start gap-[1rem] self-stretch font-paragraph-regular-semibold text-[1.25rem]">
          <p className="m-0">Want us to contact you?</p>
          {/* <form className="flex flex-col items-start justify-start self-stretch overflow-hidden rounded-lg border-[1px] border-solid border-secondary-4 bg-khaki py-[0.94rem] pl-[0.94rem] pr-[1.06rem] text-[1rem] mq450:gap-[10rem]">
            <label
              htmlFor="user-contact"
              className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch"
            >
              <input
                id="user-contact"
                type="text"
                placeholder="Your Email or Phone Number"
                className="max-w-full flex-1 rounded-lg border-none bg-transparent py-2 text-lg text-black"
                aria-label="Enter your email or phone number"
              />
              <figure className="m-0">
                <img
                  className="relative h-[1.5rem] w-[1.5rem]"
                  alt="submit arrow"
                />
              </figure>
            </label>
          </form> */}
          <form
            className="m-0 mt-10 flex flex-row flex-wrap items-center justify-start gap-[0.5rem] self-stretch rounded-radius-md border-[1px] bg-khaki py-spacing-lg pl-[1.19rem] pr-[1.31rem] font-text-sm-semibold text-[1rem] text-colors-text-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]"
            action="#"
            method="POST"
          >
            <label htmlFor="email" className="sr-only">
              Email or Phone
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="min-w-[8.5rem] flex-1 rounded-radius-md border-none bg-transparent px-4 py-2 text-lg text-black"
              placeholder="Email or Phone number"
              aria-required="true"
            />
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-radius-md border-none bg-khaki px-[0.81rem] py-[0.63rem] text-primary-1"
              aria-label="Send your email or phone number to us"
            >
              <figure className="m-0">
                <Image
                  className="relative h-[1.5rem] w-[1.5rem]"
                  alt="submit arrow icon"
                  width={0}
                  height={0}
                  src="/icons/submit-left-arrow.svg"
                />
              </figure>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

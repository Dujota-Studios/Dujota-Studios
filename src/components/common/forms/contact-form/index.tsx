import type { NextPage } from "next";
import ContactForm from "./form-body";

const Contact: NextPage = () => {
  return (
    <div className="relative flex w-full flex-row items-center justify-center tracking-[normal]">
      <section className="bg-input-bg-dark py-new-style-section-section-vertical-padding px-new-style-section-section-horizontal-padding text-content-secondary-base font-paragraph-tiny-normal box-border flex max-w-full flex-1 flex-col items-center justify-start gap-[3rem] overflow-hidden text-center text-[1.25rem] mq750:box-border mq750:pb-[2.63rem] mq750:pt-[2.63rem] mq450:gap-[3rem]">
        <div className="flex w-full min-w-[32.5rem] max-w-[48rem] flex-col items-start justify-start gap-[1rem] mq750:max-w-full">
          <div className="flex max-w-full flex-row items-center justify-center gap-[0.5rem] self-stretch">
            <h1 className="font-headings-h2-tablet text-input-text-typed relative m-0 inline-block max-w-full flex-1 text-[2rem] font-semibold leading-[2.25rem]">
              Contact us
            </h1>
          </div>
          <div className="flex max-w-full flex-row items-center justify-center self-stretch font-paragraph-regular-semibold text-[1rem] text-content-dark-base">
            <div className="relative inline-block max-w-full flex-1 leading-[1.5rem]">
              In case of a question, you can always contact us
            </div>
          </div>
        </div>
        <ContactForm />
        <button className="box-border flex w-[6.88rem] cursor-pointer flex-row items-center justify-center gap-[0.5rem] overflow-hidden rounded-rounded-lg bg-interactions-buttons-primary-default p-[0.69rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] [border:none]">
          <div className="flex flex-1 flex-row items-center justify-center px-[0.31rem] py-[0rem]">
            <div className="relative text-left font-paragraph-regular-semibold text-[1.13rem] leading-[1.38rem] text-content-light-main">
              Contact
            </div>
          </div>
        </button>
      </section>
    </div>
  );
};

export default Contact;

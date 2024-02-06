import type { NextPage } from "next";
import FrameInstance from "./frame-instance";

const Contact: NextPage = () => {
  return (
    <div className="flex w-[390px] flex-row items-center justify-center tracking-[normal]">
      <section className="bg-input-bg-dark py-new-style-section-section-vertical-padding text-content-secondary-base font-paragraph-tiny-normal mq800:pt-[42px] mq800:pb-[42px] mq800:box-border box-border flex max-w-full flex-1 flex-col items-center justify-start gap-[48px] overflow-hidden px-4 text-center text-base mq450:box-border mq450:pb-[27px] mq450:pt-[27px]">
        <div className="flex w-full min-w-[300px] max-w-[410px] flex-col items-start justify-start gap-[16px] mq450:max-w-full">
          <div className="flex max-w-full flex-row items-center justify-center gap-[8px] self-stretch">
            <h3 className="font-headings-h2-mobile text-input-text-typed relative m-0 inline-block max-w-full flex-1 text-5xl font-semibold leading-[28px]">
              Contact us
            </h3>
          </div>
          <div className="flex max-w-full flex-row items-center justify-center self-stretch text-sm text-content-dark-base">
            <div className="relative inline-block max-w-full flex-1 leading-[20px]">
              In case of a question, you can always contact us
            </div>
          </div>
        </div>
        <div className="mq800:max-w-full flex w-full min-w-[320px] max-w-[720px] flex-col items-start justify-start gap-[16px] text-left font-paragraph-regular-semibold text-sm text-content-dark-base">
          <FrameInstance />
          <div className="flex flex-row items-start justify-start gap-[8px] py-0 pl-0 pr-5">
            <input
              className="rounded-radius-xs relative m-0 box-border h-4 w-4 shrink-0 overflow-hidden border-[1px] border-solid border-border-dark-subtle"
              type="checkbox"
            />
            <div className="flex flex-row items-center justify-center gap-[4px]">
              <div className="relative leading-[16px]">
                <span>I accept the</span>
                <span className="text-royalblue font-medium">
                  Terms and Conditions
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="box-border flex w-[110px] cursor-pointer flex-row items-center justify-center gap-[8px] overflow-hidden rounded-rounded-lg bg-interactions-buttons-primary-default p-[11px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] [border:none] mq450:w-[calc(100%_-_40px)]">
          <div className="flex flex-1 flex-row items-center justify-center px-[5px] py-0">
            <div className="relative text-left font-paragraph-regular-semibold text-lg leading-[22px] text-content-light-main">
              Contact
            </div>
          </div>
        </button>
      </section>
    </div>
  );
};

export default Contact;

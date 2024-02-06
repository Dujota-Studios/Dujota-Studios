import type { NextPage } from "next";
import Input from "./input";

const ContactForm: NextPage = () => {
  return (
    <div className="flex w-full min-w-[20rem] max-w-[45rem] flex-col items-start justify-start gap-[1rem] text-left font-paragraph-regular-semibold text-[1rem] text-input-text-title mq750:max-w-full">
      <div className="flex max-w-full flex-col items-start justify-start gap-[1rem] self-stretch">
        <div className="flex flex-row flex-wrap items-start justify-start gap-[1rem] self-stretch">
          <Input inputLabel=" First Name" inputDataPlaceholder="Ex. John" />
          <Input inputLabel="Last Name" inputDataPlaceholder="Ex.Dee" />
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start gap-[1rem] self-stretch">
          <Input
            inputLabel="Email address"
            inputDataPlaceholder="Ex. design@blockbusterui.com"
          />
          <div className="flex h-[4.63rem] min-w-[17.5rem] flex-1 flex-col items-start justify-start gap-[0.38rem]">
            <div className="flex flex-1 flex-col items-start justify-start gap-[0.38rem] self-stretch">
              <div className="relative font-medium leading-[1.25rem]">
                Phone Number
              </div>
              <div className="bg-input-bg-dark text-input-text-typed font-paragraph-tiny-normal flex flex-1 flex-row items-center justify-center self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
                <div className="box-border flex w-[4.31rem] shrink-0 flex-row items-center justify-between gap-[0rem] self-stretch overflow-hidden py-[0.63rem] pl-[0.88rem] pr-[0.75rem] [row-gap:20px]">
                  <div className="relative leading-[1.25rem]">CA</div>
                  <img
                    className="relative h-[1.25rem] w-[1.25rem]"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className="box-border flex h-[3rem] flex-1 flex-row items-center justify-start gap-[0.5rem] py-[0.94rem] pl-[0rem] pr-[0.75rem] font-paragraph-regular-semibold text-input-text-placeholder">
                  <div className="relative flex-1 leading-[1.5rem]">
                    +1 (888) 555-1234
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-full flex-col items-start justify-start gap-[0.38rem] self-stretch">
          <div className="flex max-w-full flex-col items-start justify-start gap-[0.38rem] self-stretch">
            <div className="relative font-medium leading-[1.25rem]">
              Topic of Discussion
            </div>
            <div className="bg-input-bg-dark text-input-text-hint font-paragraph-tiny-normal box-border flex h-[3rem] max-w-full shrink-0 flex-row items-center justify-center self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
              <div className="box-border flex max-w-[calc(100%_-_48px)] flex-1 shrink-0 flex-row items-center justify-start gap-[0.5rem] py-[0rem] pl-[0.75rem] pr-[0rem]">
                <div className="box-border flex max-w-full flex-1 flex-row items-start justify-start gap-[0.5rem] px-[0rem] py-[0.94rem]">
                  <div className="relative inline-block max-w-full flex-1 font-paragraph-regular-semibold leading-[1.25rem] text-input-text-placeholder">
                    Letter of Increment
                  </div>
                </div>
              </div>
              <div className="box-border flex w-[3rem] shrink-0 flex-row items-center justify-between gap-[-2.12rem] overflow-hidden p-[0.88rem] text-content-dark-base">
                <img
                  className="relative h-[1.25rem] w-[1.25rem]"
                  alt=""
                  src="/icon-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.38rem] self-stretch">
          <div className="flex flex-col items-start justify-start gap-[0.38rem] self-stretch">
            <div className="relative font-medium leading-[1.25rem]">
              Description
            </div>
            <textarea
              className="bg-input-bg-dark box-border flex h-[9.5rem] w-auto shrink-0 flex-row items-start justify-center self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle p-[0.75rem] font-paragraph-regular-semibold text-[1rem] text-input-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] [outline:none]"
              placeholder="Enter a description"
              rows={8}
              cols={29}
            />
          </div>
          <div className="text-input-text-hint relative self-stretch text-[0.88rem] leading-[1rem]">
            We won&apos;t be spamming.
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem] text-content-dark-base">
        <input
          className="rounded-radius-xs relative m-0 box-border h-[1rem] w-[1rem] shrink-0 overflow-hidden border-[1px] border-solid border-border-dark-subtle"
          type="checkbox"
        />
        <div className="flex flex-row items-center justify-center gap-[0.25rem]">
          <div className="relative leading-[1rem]">
            <span>I accept the</span>
            <span className="text-royalblue font-medium">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

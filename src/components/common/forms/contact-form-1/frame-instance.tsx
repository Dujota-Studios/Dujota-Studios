import type { NextPage } from "next";
import Input from "./input";

const FrameInstance: NextPage = () => {
  return (
    <div className="flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch text-left font-paragraph-regular-semibold text-base text-input-text-title">
      <div className="flex min-h-[164px] max-w-full flex-row flex-wrap items-start justify-start gap-[16px] self-stretch">
        <Input inputLabel=" First Name" inputDataPlaceholder="Ex. John" />
        <Input
          inputLabel="Last Name"
          inputDataPlaceholder="Ex.Dee"
          propWidth="105px"
        />
      </div>
      <div className="flex min-h-[164px] max-w-full flex-row flex-wrap items-start justify-start gap-[16px] self-stretch">
        <Input
          inputLabel="Email address"
          inputDataPlaceholder="Ex. design@blockbusterui.com"
          propWidth="131px"
        />
        <div className="flex w-[358px] min-w-[280px] max-w-full flex-col items-start justify-start gap-[6px]">
          <div className="flex max-w-full flex-col items-start justify-start gap-[6px] self-stretch">
            <div className="relative inline-block w-[137px] pr-5 font-medium leading-[20px]">
              Phone Number
            </div>
            <div className="bg-input-bg-dark text-input-text-typed font-paragraph-tiny-normal box-border flex max-w-full flex-row items-center justify-center self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] [row-gap:20px] mq450:flex-wrap">
              <div className="box-border flex h-12 w-[109px] shrink-0 flex-row items-center justify-between gap-[0px] overflow-hidden px-5 py-2.5 [row-gap:20px]">
                <div className="relative leading-[20px]">CA</div>
                <img className="relative h-5 w-5" alt="" src="/icon.svg" />
              </div>
              <div className="box-border flex h-12 w-[329px] min-w-[214px] max-w-full flex-row items-center justify-start gap-[8px] py-[15px] pl-5 pr-8 font-paragraph-regular-semibold text-input-text-placeholder">
                <div className="relative flex-1 leading-[24px]">
                  +1 (888) 555-1234
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-full flex-col items-start justify-start gap-[6px] self-stretch">
        <div className="flex max-w-full flex-col items-start justify-start gap-[6px] self-stretch">
          <div className="relative inline-block w-[171px] pr-5 font-medium leading-[20px]">
            Topic of Discussion
          </div>
          <div className="bg-input-bg-dark text-input-text-hint font-paragraph-tiny-normal box-border flex h-12 max-w-full shrink-0 flex-row items-center justify-center self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
            <div className="box-border flex w-[350px] max-w-[calc(100%_-_88px)] flex-row items-center justify-start gap-[8px] py-0 pl-5 pr-8">
              <div className="flex flex-1 flex-row items-start justify-start gap-[8px] px-0 py-[15px]">
                <div className="relative flex-1 font-paragraph-regular-semibold leading-[20px] text-input-text-placeholder">
                  Letter of Increment
                </div>
              </div>
            </div>
            <div className="box-border flex w-[88px] shrink-0 flex-row items-center justify-between gap-[-34px] overflow-hidden px-5 py-3.5 text-content-dark-base">
              <img className="relative h-5 w-5" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[6px] self-stretch">
        <div className="flex flex-col items-start justify-start gap-[6px] self-stretch">
          <div className="relative inline-block w-[110px] pr-5 font-medium leading-[20px]">
            Description
          </div>
          <textarea
            className="bg-input-bg-dark box-border flex h-[152px] w-auto shrink-0 flex-row items-start justify-center self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle p-3 font-paragraph-regular-semibold text-base text-input-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] [outline:none]"
            placeholder="Enter a description"
            rows={8}
            cols={18}
          />
        </div>
        <div className="text-input-text-hint relative self-stretch text-sm leading-[16px]">
          We won't be spamming.
        </div>
      </div>
    </div>
  );
};

export default FrameInstance;

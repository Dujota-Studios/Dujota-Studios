import type { NextPage } from "next";

type InputType = {
  inputLabel?: string;
  inputDataPlaceholder?: string;
};

const Input: NextPage<InputType> = ({ inputLabel, inputDataPlaceholder }) => {
  return (
    <div className="flex h-[74px] min-w-[280px] flex-1 flex-col items-start justify-start gap-[6px] text-left font-paragraph-regular-semibold text-base text-input-text-title">
      <div className="flex flex-1 flex-col items-start justify-start gap-[6px] self-stretch">
        <div className="relative font-medium leading-[20px]">{inputLabel}</div>
        <div className="flex flex-1 flex-row items-center justify-center gap-[8px] self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle bg-colors-background-bg-primary px-[11px] py-0 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
          <input
            className="flex h-5 w-full min-w-[154px] flex-1 flex-row items-center justify-start bg-[transparent] font-paragraph-regular-semibold text-base text-input-text-placeholder [border:none] [outline:none]"
            placeholder={inputDataPlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type InputType = {
  inputLabel?: string;
  inputDataPlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Input: NextPage<InputType> = ({
  inputLabel,
  inputDataPlaceholder,
  propWidth,
}) => {
  const inputLabelStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex h-[74px] w-[358px] min-w-[280px] max-w-full flex-col items-start justify-start gap-[6px] text-left font-paragraph-regular-semibold text-base text-input-text-title">
      <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[6px] self-stretch">
        <div
          className="relative inline-block w-28 pr-5 font-medium leading-[20px]"
          style={inputLabelStyle}
        >
          {inputLabel}
        </div>
        <div className="bg-input-bg-dark box-border flex max-w-full flex-1 flex-row items-center justify-center gap-[8px] self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle px-[11px] py-0 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
          <input
            className="flex h-5 w-full min-w-[200px] max-w-full flex-1 flex-row items-center justify-start bg-[transparent] font-paragraph-regular-semibold text-base text-input-text-placeholder [border:none] [outline:none]"
            placeholder={inputDataPlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

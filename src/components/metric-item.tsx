import type { NextPage } from "next";

type MetricItemType = {
  number?: string;
  heading?: string;
};

const MetricItem: NextPage<MetricItemType> = ({ number, heading }) => {
  return (
    <div className="w-[22.38rem] flex flex-col items-start justify-start gap-[0.75rem] min-w-[15rem] max-w-full text-left text-[3rem] text-secondary-1 font-headings-h4-desktop">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
        <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
          {number}
        </div>
        <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-semibold font-paragraph-regular-semibold text-colors-text-text-primary-900">
          {heading}
        </div>
      </div>
      <div className="w-[7.25rem] overflow-hidden hidden flex-row items-center justify-center gap-[0.75rem] text-[1rem] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg font-text-sm-semibold">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
        <div className="h-[1.5rem] flex-1 relative leading-[1.5rem] font-semibold inline-block shrink-0 whitespace-nowrap">
          Learn more
        </div>
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default MetricItem;

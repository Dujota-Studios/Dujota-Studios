import type { NextPage } from "next";

type MetricItemType = {
  number?: string;
  heading?: string;
};

const MetricItem: NextPage<MetricItemType> = ({ number, heading }) => {
  return (
    <div className="flex w-[22.38rem] min-w-[15rem] max-w-full flex-col items-start justify-start gap-[0.75rem] text-left font-headings-h4-desktop text-[3rem] text-secondary-1">
      <div className="flex flex-col items-start justify-start gap-[0.75rem] self-stretch">
        <div className="relative self-stretch font-semibold leading-[2.5rem] tracking-[-0.02em]">
          {number}
        </div>
        <div className="relative self-stretch font-paragraph-regular-semibold text-[1rem] font-semibold leading-[1.5rem] text-colors-text-text-primary-900">
          {heading}
        </div>
      </div>
      <div className="hidden w-[7.25rem] flex-row items-center justify-center gap-[0.75rem] overflow-hidden font-text-sm-semibold text-[1rem] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
        <img
          className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
          alt=""
        />
        <div className="relative inline-block h-[1.5rem] flex-1 shrink-0 whitespace-nowrap font-semibold leading-[1.5rem]">
          Learn more
        </div>
        <img
          className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default MetricItem;

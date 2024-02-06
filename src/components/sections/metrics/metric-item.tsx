import type { NextPage } from "next";

type MetricItemType = {
  number?: string;
  heading?: string;
};

const MetricItem: NextPage<MetricItemType> = ({ number, heading }) => {
  return (
    <figure className="m-0 flex w-[22.38rem] min-w-[15rem] max-w-full flex-col items-start justify-start gap-[0.75rem] text-left font-headings-h4-desktop text-[3rem] text-secondary-1">
      <figcaption
        className="flex flex-col items-start justify-start gap-[0.75rem] self-stretch"
        aria-labelledby="metric-number metric-heading"
      >
        <strong
          id="metric-number"
          className="relative self-stretch font-semibold leading-[2.5rem] tracking-[-0.02em]"
        >
          {number}
        </strong>
        <p
          id="metric-heading"
          className="relative my-0 self-stretch font-paragraph-regular-semibold text-[1rem] font-semibold leading-[1.5rem] text-colors-text-text-primary-900"
        >
          {heading}
        </p>
      </figcaption>
    </figure>
  );
};

export default MetricItem;

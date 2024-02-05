import type { NextPage } from "next";
import MetricItem from "./metric-item";

const MetricsSection: NextPage = () => {
  return (
    <section className="self-stretch bg-colors-background-bg-secondary overflow-hidden flex flex-col items-center justify-start py-[2rem] px-[0rem] box-border max-w-full text-left text-[1.13rem] text-secondary-3 font-headings-h4-desktop mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border mq1275:pt-[1.31rem] mq1275:pb-[1.31rem] mq1275:box-border">
      <div className="w-full flex flex-col items-start justify-center py-[0rem] px-[1rem] box-border gap-[3rem] max-w-[80rem] mq1275:max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq450:gap-[2.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch relative tracking-[0.06em] leading-[1.38rem] uppercase font-semibold">
              WHY US
            </div>
            <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.75rem] font-semibold font-inherit text-colors-text-text-primary-900">
              We’re only just getting started on our journey
            </h3>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem] min-h-[25rem] max-w-full text-[3rem] text-secondary-1 mq750:gap-[2rem]">
            <MetricItem number="400+" heading="Projects completed" />
            <MetricItem number="600%" heading="Return on investment" />
            <MetricItem number="10k" heading="Global downloads" />
            <MetricItem number="200+" heading="5-star reviews" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

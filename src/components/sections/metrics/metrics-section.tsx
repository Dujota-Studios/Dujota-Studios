import type { NextPage } from "next";
import MetricItem from "./metric-item";

const MetricsSection: NextPage = () => {
  return (
    <section className="box-border flex max-w-full flex-col items-center justify-start self-stretch overflow-hidden bg-colors-background-bg-secondary px-[0rem] py-[2rem] text-left font-headings-h4-desktop text-[1.13rem] text-secondary-3 mq1275:box-border mq1275:pb-[1.31rem] mq1275:pt-[1.31rem] mq750:box-border mq750:pb-[1.25rem] mq750:pt-[1.25rem]">
      <div className="box-border flex w-full max-w-[80rem] flex-col items-start justify-center gap-[3rem] px-[1rem] py-[0rem] mq1275:max-w-full">
        <div className="flex max-w-full flex-col items-start justify-start gap-[2.5rem] self-stretch mq450:gap-[2.5rem]">
          <div className="flex flex-col items-start justify-start gap-[0.75rem] self-stretch">
            <h3 className="font-inherit relative m-0 self-stretch text-[1.5rem] font-semibold leading-[1.75rem] text-secondary-3 ">
              {"We’re just getting started on our journey"}
            </h3>
          </div>
          <div className="flex min-h-[25rem] max-w-full flex-row flex-wrap items-start justify-start gap-[2rem] self-stretch text-[3rem] text-secondary-1 mq750:gap-[2rem]">
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

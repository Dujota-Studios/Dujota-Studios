import type { NextPage } from "next";
import MetricItem from "./metric-item";
import Image from "next/image";

const MetricsSection: NextPage = () => {
  return (
    <section
      aria-labelledby="metrics-section-heading"
      className="box-border flex max-w-full flex-col items-center justify-start self-stretch overflow-hidden bg-colors-background-bg-secondary px-[0rem] py-[2rem] text-left font-headings-h4-desktop text-[1.13rem] text-secondary-3 mq1275:box-border mq1275:pb-[1.31rem] mq1275:pt-[1.31rem] mq750:box-border mq750:pb-[1.25rem] mq750:pt-[1.25rem]"
    >
      <h2
        id="metrics-section-heading"
        className="font-inherit relative self-stretch text-center text-[1.5rem] font-semibold leading-[1.75rem] text-secondary-3"
      >
        Why Us
      </h2>
      <div className="px-container-padding-desktop mq800:gap-[4rem] box-border flex w-full max-w-[80rem] flex-row flex-wrap items-center justify-start gap-[4rem] py-[0rem] mq1275:max-w-full mq1275:justify-center mq450:gap-[4rem]">
        <Image
          className="relative h-[35rem] w-[37rem] min-w-[24.06rem] max-w-full overflow-hidden object-cover mq1275:max-h-full mq1275:max-w-full mq1275:self-stretch mq450:min-w-full"
          width={800}
          height={600}
          loading="eager"
          alt=""
          src="/hero/why-us.png"
        />
        <div className="mq800:gap-[4rem] mq800:max-w-full box-border flex w-[35rem] min-w-[22.75rem] max-w-[35rem] flex-col items-start justify-start gap-[4rem] px-[0rem] py-[1.25rem] mq623:mx-[1rem] mq450:w-full mq450:gap-[4rem]">
          <header className="flex flex-col items-start justify-start gap-[0.75rem] self-stretch">
            <p className="font-inherit mq800:text-[2rem] mq800:leading-[2.38rem] relative m-0 self-stretch text-[2.5rem] font-semibold leading-[3rem] tracking-[-0.03em] text-colors-text-text-primary-900 mq450:text-[1.5rem] mq450:leading-[1.81rem]">
              We’re only just getting started on our journey
            </p>
          </header>
          <article
            role="list"
            aria-label="Key metrics"
            className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[2rem] self-stretch text-[3rem] text-secondary-1 mq750:gap-[2rem] mq623:items-center mq623:justify-center"
          >
            <MetricItem number="400+" heading="Projects completed" />
            <MetricItem number="600%" heading="Return on investment" />
            <MetricItem number="10k" heading="Global downloads" />
            <MetricItem number="200+" heading="5-star reviews" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

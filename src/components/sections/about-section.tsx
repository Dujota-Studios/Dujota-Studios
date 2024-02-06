import type { NextPage } from "next";
import FeatureColumn from "../feature-column";

const AboutSection: NextPage = () => {
  return (
    <section
      className="box-border flex w-[24.38rem] max-w-full flex-col flex-wrap items-start justify-start gap-[2.5rem] px-[1rem] py-[2rem] text-left font-text-sm-semibold text-[1.13rem] text-secondary-3 mq1100:box-border mq1100:pb-[1.31rem] mq1100:pt-[1.31rem] mq750:box-border mq750:pb-[1.25rem] mq750:pt-[1.25rem]"
      id="about-us"
      aria-labelledby="about-heading"
    >
      <article className="flex w-[22.38rem] flex-col items-start justify-center gap-[2.5rem]">
        <header className="flex max-w-full flex-col items-start justify-start gap-[1.5rem] self-stretch">
          <h2
            id="about-heading"
            className="font-inherit relative m-0 self-stretch text-[1.5rem] font-semibold leading-[1.75rem] text-secondary-3"
          >
            About Dujota Studio
          </h2>
        </header>
        <div
          role="list"
          className="flex min-h-[14.75rem] max-w-full flex-row flex-wrap items-start justify-start gap-[1.5rem] self-stretch font-headings-h4-desktop text-content-dark-main"
        >
          <FeatureColumn cardTitle="Mission" />
          <FeatureColumn cardTitle="Vision" />
        </div>
      </article>
    </section>
  );
};

export default AboutSection;

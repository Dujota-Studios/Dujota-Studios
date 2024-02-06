import type { NextPage } from "next";
import FeatureColumn from "../feature-column";
import Image from "next/image";

const AboutSection: NextPage = () => {
  return (
    <section
      className="font-text-md-semibold mq800:gap-[2.5rem] mq800:py-[3.25rem] mq800:px-[2.5rem] mq800:box-border box-border flex max-w-full flex-row flex-wrap items-start justify-start gap-[2.5rem] self-stretch overflow-hidden p-[5rem] text-left text-[1rem] text-secondary-3 mq623:p-4 mq450:box-border mq450:pb-[2.13rem] mq450:pt-[2.13rem]"
      id="about-us"
      aria-labelledby="about-heading"
    >
      <article className="mq800:gap-[2.5rem] flex min-h-[40rem] min-w-[25.19rem] max-w-full flex-1 flex-col items-start justify-center gap-[2.5rem] mq1100:max-h-full mq1100:min-h-[10rem] mq1100:min-w-full">
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
          className="flex flex-row flex-wrap items-start justify-start gap-[1.5rem] self-stretch font-headings-h4-desktop text-[1.5rem] text-content-dark-main"
        >
          <FeatureColumn cardTitle="Mission" />
          <FeatureColumn cardTitle="Vision" />
        </div>
      </article>

      <aside className="mq800:gap-[5rem] mq800:max-w-full mq800:min-w-full flex min-w-[25.19rem] max-w-[40rem] flex-1 flex-row items-start justify-start overflow-hidden mq450:gap-[5rem]">
        <div className="flex h-[40rem] min-w-[20rem] max-w-full flex-1 flex-col items-start justify-start">
          <div className="flex min-w-[15rem] flex-1 flex-col items-start justify-start self-stretch">
            <Image
              className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden object-cover"
              loading="eager"
              alt="Image of a team of people working together"
              src="/hero/about-us.png"
              width={600}
              height={800}
            />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default AboutSection;

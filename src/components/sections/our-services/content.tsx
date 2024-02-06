import type { NextPage } from "next";

const ServicesContent: NextPage = () => {
  return (
    <article className="flex max-w-full flex-col items-start justify-start gap-[2.5rem] self-stretch mq450:gap-[2.5rem]">
      <div className="flex flex-col items-start justify-start gap-[1.5rem] self-stretch text-left font-headings-h4-desktop text-[1.13rem] text-content-dark-main">
        <section className="box-border flex min-w-[16.88rem] flex-col items-center justify-start gap-[0.75rem] self-stretch border-l-[6px] border-solid border-secondary-2 px-new-style-container-md py-new-style-container-md">
          <h4 className="relative mb-0 self-stretch font-semibold leading-[1.38rem]">
            UI/UX Design
          </h4>
          <p className="relative self-stretch font-text-sm-semibold text-[1rem] leading-[1.5rem] text-content-dark-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </section>
        <section className="box-border flex min-w-[16.88rem] flex-col items-center justify-start gap-[0.75rem] self-stretch p-[1rem]">
          <h4 className="relative mb-0 self-stretch font-semibold leading-[1.38rem]">
            Front End Development
          </h4>
          <p className="relative self-stretch font-text-sm-semibold text-[1rem] leading-[1.5rem] text-content-dark-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </section>
        <section className="box-border flex min-w-[16.88rem] flex-col items-center justify-start gap-[0.75rem] self-stretch p-[1rem]">
          <h4 className="relative mb-0 self-stretch font-semibold leading-[1.38rem]">
            Back End Development
          </h4>
          <p className="relative self-stretch font-text-sm-semibold text-[1rem] leading-[1.5rem] text-content-dark-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </section>
      </div>
    </article>
  );
};

export default ServicesContent;

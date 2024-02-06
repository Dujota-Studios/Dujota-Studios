import type { NextPage } from "next";
import Project from "./project";
import ButtonSecondary from "~/components/common/buttons/secondary";

const Projects: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-[2.5rem] self-stretch px-[1rem] text-center font-headings-h4-desktop text-[1.13rem] text-secondary-3 mq1275:box-border mq1275:pb-[3.25rem] mq1275:pt-[3.25rem] mq1100:box-border mq1100:pb-[2.13rem] mq1100:pt-[2.13rem] mq750:box-border mq750:pb-[1.38rem] mq450:py-[5rem]">
      <header className="flex flex-col items-center justify-center gap-[1rem] self-stretch">
        <h2 className="font-inherit relative m-0 self-stretch text-[1.5rem] font-semibold leading-[1.75rem] text-secondary-3">
          Recent Projects
        </h2>
      </header>
      <div className="flex flex-col items-center justify-start gap-[2.5rem] self-stretch text-left text-[1.25rem] text-black mq450:gap-[2.5rem]">
        <article
          role="list"
          className="flex flex-col items-start justify-start gap-[2.5rem] self-stretch mq450:gap-[2.5rem]"
        >
          <Project projectName="Fashion Landing page" />
          <Project projectName="Furniture Shop" />
          <Project projectName="Health & Fitness" />
          <Project projectName="IT Solution Provider" />
        </article>
      </div>
      <ButtonSecondary />
    </section>
  );
};

export default Projects;

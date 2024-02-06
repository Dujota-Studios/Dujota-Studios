import type { NextPage } from "next";
import Project from "./project";

const Projects: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-[2.5rem] self-stretch px-[1rem] py-[5rem] text-center font-headings-h4-desktop text-[1.13rem] text-secondary-3 mq1275:box-border mq1275:pb-[3.25rem] mq1275:pt-[3.25rem] mq1100:box-border mq1100:pb-[2.13rem] mq1100:pt-[2.13rem] mq750:box-border mq750:pb-[1.38rem] mq750:pt-[1.38rem]">
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
        <button
          className="flex cursor-pointer flex-col items-center justify-center self-stretch whitespace-nowrap rounded-2xl bg-secondary-1 px-[3rem] py-[0.75rem] [border:none] hover:bg-goldenrod mq450:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem]"
          aria-label="Get a free consultation"
        >
          <span className="relative text-left font-paragraph-regular-semibold text-[1.25rem] font-medium leading-[1.5rem] text-primary-1">
            Get A Free Consultation
          </span>
        </button>
      </div>
    </section>
  );
};

export default Projects;

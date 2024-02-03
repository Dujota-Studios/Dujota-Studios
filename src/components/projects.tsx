import type { NextPage } from "next";
import Project from "./project";

const Projects: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[5rem] px-[1rem] gap-[2.5rem] text-center text-[1.13rem] text-secondary-3 font-headings-h4-desktop mq750:pt-[1.38rem] mq750:pb-[1.38rem] mq750:box-border mq1100:pt-[2.13rem] mq1100:pb-[2.13rem] mq1100:box-border mq1275:pt-[3.25rem] mq1275:pb-[3.25rem] mq1275:box-border">
      <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
        <div className="self-stretch relative tracking-[0.06em] leading-[1.38rem] uppercase font-semibold">
          Our Previous projects
        </div>
        <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.75rem] font-semibold font-inherit text-black">
          OUR SELECTED WORKS
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[2.5rem] text-left text-[1.25rem] text-black mq450:gap-[2.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] mq450:gap-[2.5rem]">
          <Project fashionLandingPage="Fashion Landing page" />
          <Project fashionLandingPage="Furniture Shop" />
          <Project fashionLandingPage={`Health & Fitness`} />
          <Project fashionLandingPage="IT Solution Provider" />
        </div>
        <button className="cursor-pointer [border:none] py-[0.75rem] px-[3rem] bg-secondary-1 self-stretch rounded-2xl flex flex-col items-center justify-center whitespace-nowrap hover:bg-goldenrod mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="relative text-[1.25rem] leading-[1.5rem] font-medium font-paragraph-regular-semibold text-primary-1 text-left">
            Get Free Consultancy
          </div>
        </button>
      </div>
    </section>
  );
};

export default Projects;

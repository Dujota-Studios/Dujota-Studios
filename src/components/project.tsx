import type { NextPage } from "next";

type ProjectType = {
  fashionLandingPage?: string;
};

const Project: NextPage<ProjectType> = ({ fashionLandingPage }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-end gap-[1.5rem] text-left text-[1.25rem] text-black font-headings-h4-desktop">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
      />
      <div className="flex flex-col items-start justify-end py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0.75rem]">
        <div className="relative leading-[1.5rem] font-semibold">
          {fashionLandingPage}
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.75rem] text-center text-[1rem] text-secondary-3 font-paragraph-regular-semibold">
          <img
            className="h-[0.75rem] w-[0.75rem] relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
          />
          <div className="relative leading-[1.25rem] uppercase font-semibold">
            View Details
          </div>
          <img className="h-[0.75rem] w-[0.75rem] relative hidden" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;

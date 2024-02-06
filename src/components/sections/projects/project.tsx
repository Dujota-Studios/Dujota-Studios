import type { NextPage } from "next";

type ProjectType = {
  fashionLandingPage?: string;
};

const Project: NextPage<ProjectType> = ({ fashionLandingPage }) => {
  return (
    <div className="flex flex-col items-start justify-end gap-[1.5rem] self-stretch text-left font-headings-h4-desktop text-[1.25rem] text-black">
      <img
        className="relative max-h-full max-w-full self-stretch overflow-hidden object-cover"
        loading="eager"
        alt=""
      />
      <div className="flex flex-col items-start justify-end gap-[0.75rem] py-[0rem] pl-[0rem] pr-[1.25rem]">
        <div className="relative font-semibold leading-[1.5rem]">
          {fashionLandingPage}
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.75rem] text-center font-paragraph-regular-semibold text-[1rem] text-secondary-3">
          <img
            className="relative hidden h-[0.75rem] w-[0.75rem] shrink-0 overflow-hidden object-cover"
            alt=""
          />
          <div className="relative font-semibold uppercase leading-[1.25rem]">
            View Details
          </div>
          <img className="relative hidden h-[0.75rem] w-[0.75rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;

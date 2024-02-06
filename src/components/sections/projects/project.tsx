import type { NextPage } from "next";
import Link from "next/link";

type ProjectType = {
  projectName?: string;
  projectImageSrc?: string;
  detailImageSrc?: string;
  url?: string;
};

const Project: NextPage<ProjectType> = ({
  projectName,
  projectImageSrc,
  url,
}) => {
  return (
    <div className="flex flex-col items-start justify-end gap-[1.5rem] self-stretch text-left font-headings-h4-desktop text-[1.25rem] text-black">
      <img
        className="relative max-h-full max-w-full self-stretch overflow-hidden object-cover"
        loading="eager"
        src={projectImageSrc}
        alt={`Image representing the project: ${projectName}`}
      />
      <div className="flex flex-col items-start justify-end gap-[0.75rem] py-[0rem] pl-[0rem] pr-[1.25rem]">
        <h3 className="relative my-0 font-semibold leading-[1.5rem]">
          {projectName}
        </h3>
        <Link
          href={url ?? "/#"}
          className="flex flex-row items-center justify-start gap-[0.75rem] text-center font-paragraph-regular-semibold text-[1rem] text-secondary-3 no-underline"
          aria-label={`View details about ${projectName}`}
        >
          <span className="relative font-semibold uppercase leading-[1.25rem]">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Project;

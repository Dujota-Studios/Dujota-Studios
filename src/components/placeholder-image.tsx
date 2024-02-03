import type { NextPage } from "next";

const PlaceholderImage: NextPage = () => {
  return (
    <article className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq450:gap-[2.5rem]">
      <article className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.13rem] text-content-dark-main font-headings-h4-desktop">
        <div className="self-stretch box-border flex flex-col items-center justify-start py-new-style-container-md px-new-style-container-md gap-[0.75rem] min-w-[16.88rem] border-l-[6px] border-solid border-secondary-2">
          <div className="self-stretch relative leading-[1.38rem] font-semibold">
            UI/UX Design
          </div>
          <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-text-sm-semibold text-content-dark-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start p-[1rem] box-border gap-[0.75rem] min-w-[16.88rem]">
          <div className="self-stretch relative leading-[1.38rem] font-semibold">
            Front End Development
          </div>
          <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-text-sm-semibold text-content-dark-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start p-[1rem] box-border gap-[0.75rem] min-w-[16.88rem]">
          <div className="self-stretch relative leading-[1.38rem] font-semibold">
            Back End Development
          </div>
          <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-text-sm-semibold text-content-dark-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
        </div>
      </article>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full">
        <div className="w-[23.75rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[2.06rem] px-[1.88rem] box-border max-w-[106%]">
          <div className="h-[15.89rem] flex-1 relative flex items-center justify-center">
            <img
              className="h-full flex-1 max-w-full overflow-hidden object-contain absolute left-[-0.19rem] top-[0.63rem] w-full [transform:scale(1.18)]"
              loading="eager"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlaceholderImage;

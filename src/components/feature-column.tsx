import type { NextPage } from "next";

type FeatureColumnType = {
  cardTitle?: string;
};

const FeatureColumn: NextPage<FeatureColumnType> = ({ cardTitle }) => {
  return (
    <div className="w-[22.38rem] overflow-hidden flex flex-col items-start justify-start gap-[1.5rem] min-w-[15rem] max-w-[40rem] text-left text-[1.13rem] text-content-dark-main font-headings-h4-desktop mq750:max-w-full">
      <div className="hidden flex-row items-center justify-center">
        <div className="h-[2.5rem] w-[2.5rem] rounded-rounded bg-background-primary-muted overflow-hidden shrink-0 flex flex-row items-center justify-center min-w-[2.5rem] max-w-[2.5rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] min-w-[16.88rem]">
        <div className="self-stretch relative leading-[1.38rem] font-semibold">
          {cardTitle}
        </div>
        <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-paragraph-regular-semibold text-content-dark-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </div>
      </div>
      <div className="self-stretch h-[2.5rem] rounded-rounded-lg bg-interactions-buttons-primary-default shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden shrink-0 hidden flex-row items-center justify-center py-[0rem] px-[1rem] box-border gap-[0.5rem] text-[1rem] text-content-light-main font-text-sm-semibold">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
        <div className="h-[1.25rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
          <div className="self-stretch relative leading-[1.25rem] flex items-center">
            Contact
          </div>
        </div>
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureColumn;

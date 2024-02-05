import type { NextPage } from "next";

type FeatureColumnType = {
  cardTitle?: string;
};

const FeatureColumn: NextPage<FeatureColumnType> = ({ cardTitle }) => {
  return (
    <div className="flex w-[22.38rem] min-w-[15rem] max-w-[40rem] flex-col items-start justify-start gap-[1.5rem] overflow-hidden text-left font-headings-h4-desktop text-[1.13rem] text-content-dark-main mq750:max-w-full">
      <div className="hidden flex-row items-center justify-center">
        <div className="flex h-[2.5rem] w-[2.5rem] min-w-[2.5rem] max-w-[2.5rem] shrink-0 flex-row items-center justify-center overflow-hidden rounded-rounded bg-background-primary-muted">
          <img
            className="relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden"
            alt=""
          />
        </div>
      </div>
      <div className="flex min-w-[16.88rem] flex-col items-start justify-start gap-[0.75rem] self-stretch">
        <div className="relative self-stretch font-semibold leading-[1.38rem]">
          {cardTitle}
        </div>
        <div className="relative self-stretch font-paragraph-regular-semibold text-[1rem] leading-[1.5rem] text-content-dark-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </div>
      </div>
      <div className="box-border hidden h-[2.5rem] shrink-0 flex-row items-center justify-center gap-[0.5rem] self-stretch overflow-hidden rounded-rounded-lg bg-interactions-buttons-primary-default px-[1rem] py-[0rem] font-text-sm-semibold text-[1rem] text-content-light-main shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
        <img
          className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
          alt=""
        />
        <div className="box-border flex h-[1.25rem] flex-row items-center justify-center px-[0.25rem] py-[0rem]">
          <div className="relative flex items-center self-stretch leading-[1.25rem]">
            Contact
          </div>
        </div>
        <img
          className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureColumn;

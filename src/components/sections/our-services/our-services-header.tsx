import type { NextPage } from "next";

const OurServicesHeader: NextPage = () => {
  return (
    <header className="flex max-w-full flex-row items-center justify-center gap-[1.5rem] self-stretch text-left font-text-sm-semibold text-[1rem] text-content-light-main">
      <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[0.5rem] text-center font-headings-h4-desktop text-[1.13rem] text-secondary-3">
        <h2 className="font-inherit relative m-0 self-stretch text-[1.5rem] font-semibold leading-[1.75rem] text-secondary-3">
          Take a look at the Services we provide
        </h2>
      </div>
    </header>
  );
};

export default OurServicesHeader;

import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-primary-2 overflow-hidden flex flex-row flex-wrap items-start justify-center py-[4rem] px-[2rem] box-border max-w-full text-left text-[1.5rem] text-primary-1 font-headings-h4-desktop mq750:pt-[2.63rem] mq750:pb-[2.63rem] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full mq450:gap-[2rem]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4rem] min-h-[19.31rem] mq450:gap-[4rem] mq750:gap-[4rem]">
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <h3 className="m-0 relative text-inherit leading-[2rem] font-semibold font-inherit">
              Services
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] font-paragraph-regular-semibold">
              <div className="relative tracking-[-0.04em]">UI UX Design</div>
              <div className="relative tracking-[-0.04em]">
                Software Development
              </div>
              <div className="relative tracking-[-0.04em]">
                Software Consulting
              </div>
            </div>
          </div>
          <div className="w-[4.63rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <h3 className="m-0 relative text-inherit leading-[2rem] font-semibold font-inherit">
              Social
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] font-paragraph-regular-semibold">
              <div className="relative tracking-[-0.04em]">Facebook</div>
              <div className="relative tracking-[-0.04em]">Twitter</div>
              <div className="relative tracking-[-0.04em]">Linkedin</div>
            </div>
          </div>
          <div className="w-[12.5rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <h3 className="m-0 relative text-inherit leading-[2rem] font-semibold font-inherit">
              Contact Us
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] font-paragraph-regular-semibold">
              <div className="self-stretch relative tracking-[-0.04em]">
                Floor #3, House #23, Road #06, J.Sen Homes, Chittagong
              </div>
              <div className="relative tracking-[-0.04em] whitespace-nowrap">
                +88 01823894527
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1.25rem] font-paragraph-regular-semibold">
          <div className="relative leading-[1.5rem]">
            Want us to contact you?
          </div>
          <div className="self-stretch rounded-lg bg-khaki overflow-hidden flex flex-col items-start justify-start py-[0.94rem] pr-[1.06rem] pl-[0.94rem] text-[1rem] border-[1px] border-solid border-secondary-4 mq450:gap-[10rem]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
              <div className="h-[1rem] w-[13.13rem] relative tracking-[-0.04em] leading-[1rem] inline-block">
                Your Email or Phone Number
              </div>
              <img className="h-[1.5rem] w-[1.5rem] relative" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

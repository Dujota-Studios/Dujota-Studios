import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="box-border flex max-w-full flex-row flex-wrap items-start justify-center self-stretch overflow-hidden bg-primary-2 px-[2rem] py-[4rem] text-left font-headings-h4-desktop text-[1.5rem] text-primary-1 mq750:box-border mq750:pb-[2.63rem] mq750:pt-[2.63rem]">
      <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[2rem] mq450:gap-[2rem]">
        <div className="flex min-h-[19.31rem] flex-row flex-wrap items-start justify-start gap-[4rem] self-stretch mq750:gap-[4rem] mq450:gap-[4rem]">
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <h3 className="font-inherit relative m-0 text-inherit font-semibold leading-[2rem]">
              Services
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] font-paragraph-regular-semibold text-[1rem]">
              <div className="relative tracking-[-0.04em]">UI UX Design</div>
              <div className="relative tracking-[-0.04em]">
                Software Development
              </div>
              <div className="relative tracking-[-0.04em]">
                Software Consulting
              </div>
            </div>
          </div>
          <div className="flex w-[4.63rem] flex-col items-start justify-start gap-[0.75rem]">
            <h3 className="font-inherit relative m-0 text-inherit font-semibold leading-[2rem]">
              Social
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] self-stretch font-paragraph-regular-semibold text-[1rem]">
              <div className="relative tracking-[-0.04em]">Facebook</div>
              <div className="relative tracking-[-0.04em]">Twitter</div>
              <div className="relative tracking-[-0.04em]">Linkedin</div>
            </div>
          </div>
          <div className="flex w-[12.5rem] flex-col items-start justify-start gap-[0.75rem]">
            <h3 className="font-inherit relative m-0 text-inherit font-semibold leading-[2rem]">
              Contact Us
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] self-stretch font-paragraph-regular-semibold text-[1rem]">
              <div className="relative self-stretch tracking-[-0.04em]">
                Floor #3, House #23, Road #06, J.Sen Homes, Chittagong
              </div>
              <div className="relative whitespace-nowrap tracking-[-0.04em]">
                +88 01823894527
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem] self-stretch font-paragraph-regular-semibold text-[1.25rem]">
          <div className="relative leading-[1.5rem]">
            Want us to contact you?
          </div>
          <div className="flex flex-col items-start justify-start self-stretch overflow-hidden rounded-lg border-[1px] border-solid border-secondary-4 bg-khaki py-[0.94rem] pl-[0.94rem] pr-[1.06rem] text-[1rem] mq450:gap-[10rem]">
            <div className="flex flex-row items-center justify-between gap-[1.25rem] self-stretch">
              <div className="relative inline-block h-[1rem] w-[13.13rem] leading-[1rem] tracking-[-0.04em]">
                Your Email or Phone Number
              </div>
              <img className="relative h-[1.5rem] w-[1.5rem]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

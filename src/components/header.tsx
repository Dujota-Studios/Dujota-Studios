import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center gap-[1.5rem] max-w-full text-left text-[1rem] text-content-light-main font-text-sm-semibold">
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-center text-[1.13rem] text-secondary-3 font-headings-h4-desktop">
        <div className="self-stretch relative tracking-[0.06em] leading-[1.38rem] uppercase font-semibold">
          our Services
        </div>
        <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.75rem] font-semibold font-inherit text-content-dark-main">
          Take a look at the Services we provide
        </h3>
      </div>
      <div className="w-[25rem] hidden flex-row items-center justify-center max-w-full text-center text-content-dark-base">
        <div className="h-[4.5rem] flex-1 relative leading-[1.5rem] inline-block max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </div>
      </div>
      <div className="w-[25rem] hidden flex-row flex-wrap items-center justify-start py-[1.25rem] px-[0rem] box-border gap-[0.5rem] max-w-[25rem] text-input-text-title mq450:max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.38rem] min-w-[11.56rem] max-w-[35rem] mq750:max-w-full">
          <div className="self-stretch h-[2.75rem] flex flex-col items-start justify-start gap-[0.38rem]">
            <div className="w-[6.69rem] relative leading-[1.25rem] font-medium hidden">
              Email address
            </div>
            <div className="self-stretch flex-1 rounded-rounded-lg bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-[0.69rem] gap-[0.5rem] text-input-text-placeholder border-[1px] border-solid border-border-dark-subtle">
              <div className="h-[1.25rem] flex-1 flex flex-row items-center justify-start">
                <div className="self-stretch flex-1 relative leading-[1.25rem]">
                  Enter Your Email
                </div>
              </div>
              <img className="h-[1rem] w-[1rem] relative hidden" alt="" />
            </div>
          </div>
          <div className="self-stretch h-[1rem] relative text-[0.88rem] leading-[1rem] text-content-dark-subtle hidden">
            Hint: We won't be spamming.
          </div>
        </div>
        <div className="h-[2.75rem] flex flex-row items-start justify-start gap-[1.5rem] text-[1.13rem] text-content-light-main">
          <div className="self-stretch rounded-rounded-lg bg-interactions-buttons-primary-default shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-component-trbl-padding gap-[0.5rem]">
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="h-[1.38rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
              <div className="self-stretch relative leading-[1.38rem] flex items-center whitespace-nowrap">
                Sign Up
              </div>
            </div>
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
          <div className="h-[3.5rem] rounded-rounded-lg bg-content-dark-main shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden hidden flex-row items-center justify-center py-[0rem] px-component-trbl-padding box-border gap-[0.5rem] text-[1.5rem]">
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
              alt=""
            />
            <div className="h-[1.75rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
              <div className="self-stretch relative leading-[1.75rem] font-medium flex items-center">
                Demo
              </div>
            </div>
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-[3rem] rounded-rounded-lg bg-whitesmoke [backdrop-filter:blur(12px)] box-border hidden flex-row items-start justify-start py-[0.5rem] pr-[0.56rem] pl-[0.44rem] gap-[0.5rem] text-[0.88rem] text-content-dark-subtle border-[1px] border-solid border-border-dark-subtle">
        <div className="self-stretch rounded bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start p-[0.5rem] text-content-dark-main">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">Monthly</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">Yearly</div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start p-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative hidden min-h-[1rem]"
              alt=""
            />
            <div className="self-stretch relative leading-[1rem]">
              Live chat
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5rem] hidden flex-row items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[0.5rem]">
        <div className="self-stretch rounded-rounded-lg bg-interactions-buttons-primary-default shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-component-trbl-padding gap-[0.5rem]">
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="h-[1.25rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
            <div className="self-stretch relative leading-[1.25rem] flex items-center whitespace-nowrap">
              Sign Up
            </div>
          </div>
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
            alt=""
          />
        </div>
        <div className="self-stretch rounded-rounded-lg bg-content-dark-main shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-component-trbl-padding gap-[0.5rem]">
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
            alt=""
          />
          <div className="h-[1.25rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
            <div className="self-stretch relative leading-[1.25rem] flex items-center">
              Demo
            </div>
          </div>
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
            alt=""
          />
        </div>
      </div>
      <div className="h-[2.5rem] rounded-rounded-lg bg-interactions-buttons-primary-default shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden hidden flex-row items-center justify-center py-[0rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
        <div className="h-[1.25rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
          <div className="self-stretch relative leading-[1.25rem] flex items-center">
            Button Label
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

export default Header;

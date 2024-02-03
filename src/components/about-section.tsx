import type { NextPage } from "next";
import FeatureColumn from "./feature-column";

const AboutSection: NextPage = () => {
  return (
    <section
      className="w-[24.38rem] overflow-x-auto flex flex-col items-start justify-start py-[2rem] px-[1rem] box-border gap-[2.5rem] max-w-full text-left text-[1.13rem] text-secondary-3 font-text-sm-semibold mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border mq1100:pt-[1.31rem] mq1100:pb-[1.31rem] mq1100:box-border"
      id="about-us"
    >
      <div className="w-[22.38rem] flex flex-col items-start justify-center gap-[2.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] font-headings-h4-desktop">
            <div className="self-stretch relative tracking-[0.06em] leading-[1.38rem] uppercase font-semibold">
              About us
            </div>
            <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.75rem] font-semibold font-inherit text-content-dark-main">
              About Dujota Studio
            </h3>
          </div>
          <div className="w-full h-[4.88rem] relative leading-[1.63rem] text-content-dark-base hidden max-w-[52.5rem] mq1100:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolo.
          </div>
          <div className="w-full hidden flex-row items-center justify-start gap-[1rem] max-w-[35.5rem] text-[1rem] text-input-text-title mq450:flex-wrap mq750:max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.38rem] min-w-[16.19rem] max-w-[35rem] mq750:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.38rem] max-w-full">
                <div className="w-[6.69rem] relative leading-[1.25rem] font-medium hidden">
                  Email address
                </div>
                <div className="self-stretch rounded-rounded-lg bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row items-center justify-center py-[0rem] px-[0.69rem] gap-[0.5rem] min-h-[3.5rem] max-w-full text-[1.25rem] text-input-text-placeholder border-[1px] border-solid border-border-dark-subtle">
                  <div className="flex-1 flex flex-row items-center justify-start max-w-full">
                    <div className="h-[1.5rem] flex-1 relative leading-[1.5rem] inline-block max-w-full">
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
            <div className="h-[3.5rem] flex flex-row items-start justify-start gap-[1.5rem] text-[1.5rem] text-content-light-main">
              <div className="self-stretch rounded-rounded-lg bg-interactions-buttons-primary-default shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-component-trbl-padding gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <div className="h-[1.75rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
                  <div className="self-stretch relative leading-[1.75rem] font-medium flex items-center whitespace-nowrap">
                    Sign Up
                  </div>
                </div>
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
              </div>
              <div className="self-stretch rounded-rounded-lg bg-content-dark-main shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden hidden flex-row items-center justify-center py-[0rem] px-component-trbl-padding gap-[0.5rem]">
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
          <div className="w-[17.94rem] hidden flex-row items-start justify-start gap-[1rem] text-[1.25rem] text-content-light-main">
            <div className="h-[3rem] rounded-rounded-lg bg-interactions-buttons-primary-default shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-component-trbl-padding box-border gap-[0.5rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                alt=""
              />
              <div className="h-[1.5rem] flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
                <div className="self-stretch relative leading-[1.5rem] flex items-center whitespace-nowrap">
                  Sign Up
                </div>
              </div>
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
            <div className="h-[3rem] flex-1 rounded-rounded-lg bg-content-dark-main shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[0rem] px-component-trbl-padding box-border gap-[0.5rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                alt=""
              />
              <div className="h-[1.5rem] flex-1 flex flex-row items-center justify-center py-[0rem] px-[0.25rem] box-border">
                <div className="self-stretch flex-1 relative leading-[1.5rem] flex items-center">
                  Demo
                </div>
              </div>
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-[12.13rem] rounded-rounded bg-content-light-main box-border hidden flex-row items-start justify-start py-[0.5rem] pr-[0.56rem] pl-[0.44rem] gap-[0.5rem] text-[1rem] text-content-dark-subtle border-[1px] border-solid border-border-dark-subtle">
            <div className="h-[2.25rem] flex-1 rounded bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start p-[0.5rem] box-border text-content-dark-main">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch flex-1 relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] flex-1 flex flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch flex-1 relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="h-[2.25rem] hidden flex-row items-start justify-start p-[0.5rem] box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative hidden min-h-[1.25rem]"
                  alt=""
                />
                <div className="self-stretch relative leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.5rem] min-h-[14.75rem] max-w-full text-content-dark-main font-headings-h4-desktop">
          <FeatureColumn cardTitle="Mission" />
          <FeatureColumn cardTitle="Vision" />
        </div>
      </div>
      <div className="w-[22.38rem] overflow-hidden flex flex-row items-start justify-start max-w-[40rem] mq750:max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[20rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start min-w-[15rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

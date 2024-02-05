import type { NextPage } from "next";
import FeatureColumn from "../feature-column";

const AboutSection: NextPage = () => {
  return (
    <section
      className="box-border flex w-[24.38rem] max-w-full flex-col items-start justify-start gap-[2.5rem] overflow-x-auto px-[1rem] py-[2rem] text-left font-text-sm-semibold text-[1.13rem] text-secondary-3 mq1100:box-border mq1100:pb-[1.31rem] mq1100:pt-[1.31rem] mq750:box-border mq750:pb-[1.25rem] mq750:pt-[1.25rem]"
      id="about-us"
    >
      <div className="flex w-[22.38rem] flex-col items-start justify-center gap-[2.5rem]">
        <div className="flex max-w-full flex-col items-start justify-start gap-[1.5rem] self-stretch">
          <div className="flex flex-col items-start justify-start gap-[0.5rem] self-stretch font-headings-h4-desktop">
            <h3 className="font-inherit relative m-0 self-stretch text-[1.5rem] font-semibold leading-[1.75rem] text-secondary-3 ">
              About Dujota Studio
            </h3>
          </div>
          <div className="relative hidden h-[4.88rem] w-full max-w-[52.5rem] leading-[1.63rem] text-content-dark-base mq1100:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolo.
          </div>
          <div className="hidden w-full max-w-[35.5rem] flex-row items-center justify-start gap-[1rem] text-[1rem] text-input-text-title mq750:max-w-full mq450:flex-wrap">
            <div className="flex min-w-[16.19rem] max-w-[35rem] flex-1 flex-col items-start justify-start gap-[0.38rem] mq750:max-w-full">
              <div className="flex max-w-full flex-col items-start justify-start gap-[0.38rem] self-stretch">
                <div className="relative hidden w-[6.69rem] font-medium leading-[1.25rem]">
                  Email address
                </div>
                <div className="box-border flex min-h-[3.5rem] max-w-full flex-row items-center justify-center gap-[0.5rem] self-stretch overflow-hidden rounded-rounded-lg border-[1px] border-solid border-border-dark-subtle bg-colors-background-bg-primary px-[0.69rem] py-[0rem] text-[1.25rem] text-input-text-placeholder shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]">
                  <div className="flex max-w-full flex-1 flex-row items-center justify-start">
                    <div className="relative inline-block h-[1.5rem] max-w-full flex-1 leading-[1.5rem]">
                      Enter Your Email
                    </div>
                  </div>
                  <img className="relative hidden h-[1rem] w-[1rem]" alt="" />
                </div>
              </div>
              <div className="relative hidden h-[1rem] self-stretch text-[0.88rem] leading-[1rem] text-content-dark-subtle">
                Hint: We won't be spamming.
              </div>
            </div>
            <div className="flex h-[3.5rem] flex-row items-start justify-start gap-[1.5rem] text-[1.5rem] text-content-light-main">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch overflow-hidden rounded-rounded-lg bg-interactions-buttons-primary-default px-component-trbl-padding py-[0rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                  alt=""
                />
                <div className="box-border flex h-[1.75rem] flex-row items-center justify-center px-[0.25rem] py-[0rem]">
                  <div className="relative flex items-center self-stretch whitespace-nowrap font-medium leading-[1.75rem]">
                    Sign Up
                  </div>
                </div>
                <img
                  className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                  alt=""
                />
              </div>
              <div className="hidden flex-row items-center justify-center gap-[0.5rem] self-stretch overflow-hidden rounded-rounded-lg bg-content-dark-main px-component-trbl-padding py-[0rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
                <img
                  className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                  alt=""
                />
                <div className="box-border flex h-[1.75rem] flex-row items-center justify-center px-[0.25rem] py-[0rem]">
                  <div className="relative flex items-center self-stretch font-medium leading-[1.75rem]">
                    Demo
                  </div>
                </div>
                <img
                  className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden w-[17.94rem] flex-row items-start justify-start gap-[1rem] text-[1.25rem] text-content-light-main">
            <div className="box-border flex h-[3rem] flex-row items-center justify-center gap-[0.5rem] overflow-hidden rounded-rounded-lg bg-interactions-buttons-primary-default px-component-trbl-padding py-[0rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
              <img
                className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                alt=""
              />
              <div className="box-border flex h-[1.5rem] flex-row items-center justify-center px-[0.25rem] py-[0rem]">
                <div className="relative flex items-center self-stretch whitespace-nowrap leading-[1.5rem]">
                  Sign Up
                </div>
              </div>
              <img
                className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                alt=""
              />
            </div>
            <div className="box-border flex h-[3rem] flex-1 flex-row items-center justify-center gap-[0.5rem] overflow-hidden rounded-rounded-lg bg-content-dark-main px-component-trbl-padding py-[0rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
              <img
                className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                alt=""
              />
              <div className="box-border flex h-[1.5rem] flex-1 flex-row items-center justify-center px-[0.25rem] py-[0rem]">
                <div className="relative flex flex-1 items-center self-stretch leading-[1.5rem]">
                  Demo
                </div>
              </div>
              <img
                className="relative hidden h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                alt=""
              />
            </div>
          </div>
          <div className="box-border hidden w-[12.13rem] flex-row items-start justify-start gap-[0.5rem] rounded-rounded border-[1px] border-solid border-border-dark-subtle bg-content-light-main py-[0.5rem] pl-[0.44rem] pr-[0.56rem] text-[1rem] text-content-dark-subtle">
            <div className="box-border flex h-[2.25rem] flex-1 flex-row items-start justify-start rounded bg-colors-background-bg-primary p-[0.5rem] text-content-dark-main shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
              <div className="flex flex-1 flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative flex-1 self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border flex h-[2.25rem] flex-1 flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-1 flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative flex-1 self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
            <div className="box-border hidden h-[2.25rem] flex-row items-start justify-start p-[0.5rem]">
              <div className="flex flex-row items-center justify-center gap-[0.5rem] self-stretch">
                <img
                  className="relative hidden h-[1.25rem] min-h-[1.25rem] w-[1.25rem]"
                  alt=""
                />
                <div className="relative self-stretch leading-[1.25rem]">
                  Live chat
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[14.75rem] max-w-full flex-row flex-wrap items-start justify-start gap-[1.5rem] self-stretch font-headings-h4-desktop text-content-dark-main">
          <FeatureColumn cardTitle="Mission" />
          <FeatureColumn cardTitle="Vision" />
        </div>
      </div>
      <div className="flex w-[22.38rem] max-w-[40rem] flex-row items-start justify-start overflow-hidden mq750:max-w-full">
        <div className="flex min-w-[20rem] max-w-full flex-1 flex-col items-start justify-start">
          <div className="flex min-w-[15rem] flex-col items-start justify-start self-stretch">
            <img
              className="relative max-h-full max-w-full self-stretch overflow-hidden object-cover"
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

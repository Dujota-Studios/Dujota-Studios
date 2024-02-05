"use client";

import type { NextPage } from "next";
import { useEffect } from "react";

const SocialProofSection: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      },
    );

    for (const element of scrollAnimElements as unknown as Element[]) {
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      for (const element of scrollAnimElements as unknown as Element[]) {
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, []);
  return (
    <section className="box-border flex max-w-full flex-col items-center justify-start gap-[0.75rem] self-stretch overflow-hidden bg-colors-background-bg-primary px-new-style-section-section-margin py-new-style-container-xxl text-center font-text-sm-semibold text-[1rem] text-secondary-3">
      <div className="box-border flex max-w-full flex-row items-start justify-end self-stretch overflow-hidden px-[0rem] py-[0rem]">
        <div className="box-border flex w-[29.69rem] max-w-[122%] shrink-0 flex-row items-start justify-start px-[0rem] py-[0rem]">
          <div
            className="relative inline-block w-[35rem] shrink-0 whitespace-nowrap font-medium leading-[1.25rem] opacity-[1] [&.animate]:animate-[11s_linear_-5.5s_infinite_normal_forwards_marquee-text]"
            data-animate-on-scroll
          >
            Trusted By World Leaders
          </div>
        </div>
      </div>
      <div className="relative box-border flex w-full max-w-[50rem] flex-row items-center justify-between gap-[1.25rem] pb-[0rem] pl-[6.13rem] pr-[1.5rem] pt-[0.06rem] mq1100:max-w-full mq450:flex-wrap mq450:justify-center">
        <img
          className="absolute bottom-[0.27rem] left-[-18.87rem] mx-[!important] my-0 h-[0.81rem] w-[4.25rem]"
          alt=""
        />
        <img
          className="absolute left-[-12.62rem] top-[0.18rem] mx-[!important] my-0 h-[1.09rem] w-[4.25rem]"
          alt=""
        />
        <img
          className="absolute bottom-[-0.02rem] left-[-6.37rem] top-[0.02rem] mx-[!important] my-0 h-full max-h-full w-[4.25rem]"
          alt=""
        />
        <img
          className="absolute left-[-0.12rem] top-[calc(50%_-_8.9px)] mx-[!important] my-0 h-[1.16rem] w-[4.25rem]"
          alt=""
        />
        <img className="relative h-[1.07rem] w-[4.25rem]" alt="" />
        <img className="relative h-[1.33rem] w-[4.25rem]" alt="" />
        <img className="relative h-[0.91rem] w-[4.25rem]" alt="" />
        <img
          className="absolute right-[-4.75rem] top-[calc(50%_-_9.9px)] mx-[!important] my-0 h-[1.28rem] w-[4.25rem]"
          alt=""
        />
        <img
          className="absolute right-[-11rem] top-[calc(50%_-_7.1px)] mx-[!important] my-0 h-[0.93rem] w-[4.25rem]"
          alt=""
        />
        <img
          className="absolute right-[-18.87rem] top-[calc(50%_-_6.7px)] mx-[!important] my-0 h-[0.89rem] w-[5.88rem]"
          alt=""
        />
      </div>
    </section>
  );
};

export default SocialProofSection;

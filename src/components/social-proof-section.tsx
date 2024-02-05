"use client";

import type { NextPage } from "next";
import { useEffect } from "react";

const SocialProofSection: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
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
      }
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
    <section className="self-stretch bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-new-style-container-xxl px-new-style-section-section-margin box-border gap-[0.75rem] max-w-full text-center text-[1rem] text-secondary-3 font-text-sm-semibold">
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-end py-[0rem] px-[0rem] box-border max-w-full">
        <div className="w-[29.69rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border shrink-0 max-w-[122%]">
          <div
            className="w-[35rem] relative leading-[1.25rem] font-medium inline-block shrink-0 whitespace-nowrap [&.animate]:animate-[11s_linear_-5.5s_infinite_normal_forwards_marquee-text] opacity-[1]"
            data-animate-on-scroll
          >
            Trusted By World Leaders
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between pt-[0.06rem] pb-[0rem] pr-[1.5rem] pl-[6.13rem] box-border relative max-w-[50rem] gap-[1.25rem] mq450:flex-wrap mq450:justify-center mq1100:max-w-full">
        <img
          className="h-[0.81rem] w-[4.25rem] absolute my-0 mx-[!important] bottom-[0.27rem] left-[-18.87rem]"
          alt=""
        />
        <img
          className="h-[1.09rem] w-[4.25rem] absolute my-0 mx-[!important] top-[0.18rem] left-[-12.62rem]"
          alt=""
        />
        <img
          className="h-full w-[4.25rem] absolute my-0 mx-[!important] top-[0.02rem] bottom-[-0.02rem] left-[-6.37rem] max-h-full"
          alt=""
        />
        <img
          className="h-[1.16rem] w-[4.25rem] absolute my-0 mx-[!important] top-[calc(50%_-_8.9px)] left-[-0.12rem]"
          alt=""
        />
        <img className="h-[1.07rem] w-[4.25rem] relative" alt="" />
        <img className="h-[1.33rem] w-[4.25rem] relative" alt="" />
        <img className="h-[0.91rem] w-[4.25rem] relative" alt="" />
        <img
          className="h-[1.28rem] w-[4.25rem] absolute my-0 mx-[!important] top-[calc(50%_-_9.9px)] right-[-4.75rem]"
          alt=""
        />
        <img
          className="h-[0.93rem] w-[4.25rem] absolute my-0 mx-[!important] top-[calc(50%_-_7.1px)] right-[-11rem]"
          alt=""
        />
        <img
          className="h-[0.89rem] w-[5.88rem] absolute my-0 mx-[!important] top-[calc(50%_-_6.7px)] right-[-18.87rem]"
          alt=""
        />
      </div>
    </section>
  );
};

export default SocialProofSection;

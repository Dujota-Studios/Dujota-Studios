import ServicesContent from "./content";
import OurServicesHeader from "./our-services-header";
import ServicesImage from "./services-image";

export default function OurServices() {
  return (
    <section
      aria-labelledby="our-services-header"
      className="box-border flex max-w-full flex-col items-center justify-start gap-[2.5rem] self-stretch overflow-hidden px-new-style-section-section-margin py-[3rem] mq1100:box-border mq1100:pb-[1.94rem] mq1100:pt-[1.94rem] mq750:box-border mq750:pb-[1.25rem] mq750:pt-[1.25rem]"
    >
      <OurServicesHeader />
      <div className="mq800:gap-[5rem] mq1150:flex-wrap flex w-[76rem] max-w-full flex-row items-start justify-center gap-[5rem] text-left font-headings-h4-desktop text-[1.5rem] text-content-dark-main mq1100:flex-wrap mq450:gap-[5rem]">
        <ServicesContent />
        <ServicesImage />
      </div>
    </section>
  );
}

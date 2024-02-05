import ServicesContent from "./content";
import OurServicesHeader from "./our-services-header";
import ServicesImage from "./services-image";

export default function OurServices() {
  return (
    <section className="box-border flex max-w-full flex-col items-center justify-start gap-[2.5rem] self-stretch overflow-hidden px-new-style-section-section-margin py-[3rem] mq1100:box-border mq1100:pb-[1.94rem] mq1100:pt-[1.94rem] mq750:box-border mq750:pb-[1.25rem] mq750:pt-[1.25rem]">
      <OurServicesHeader />
      <ServicesContent />
      <ServicesImage />
    </section>
  );
}

import type { NextPage } from "next";
import Hero from "../components/hero";
import SocialProofSection from "../components/social-proof-section";
import Header from "../components/header";
import PlaceholderImage from "../components/placeholder-image";
import Projects from "../components/projects";
import MetricsSection from "../components/metrics-section";
import AboutSection from "../components/about-section";
import Testimonials from "../components/testimonials";
import NewsLetter from "../components/news-letter";
import Footer from "../components/footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <header className="self-stretch bg-primary-2 flex flex-row items-center justify-between py-[1.5rem] px-[1rem] gap-[1.25rem] sticky top-[0] z-[99]">
        <img
          className="h-[2rem] w-[9.44rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
          id="mobile-menu-icon"
          alt=""
        />
      </header>
      <Hero />
      <SocialProofSection />
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[3rem] px-new-style-section-section-margin box-border gap-[2.5rem] max-w-full mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border mq1100:pt-[1.94rem] mq1100:pb-[1.94rem] mq1100:box-border">
        <Header />
        <PlaceholderImage />
      </section>
      <Projects />
      <MetricsSection />
      <AboutSection />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;

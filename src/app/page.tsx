import type { NextPage } from "next";
import Hero from "../components/sections/hero";
// import SocialProofSection from "../components/sections/social-proof-section";
import OurServices from "../components/sections/our-services";
import PlaceholderImage from "../components/sections/our-services/content";
import Projects from "../components/sections/projects";
import MetricsSection from "../components/sections/metrics/metrics-section";
import AboutSection from "../components/sections/about-section";
import Testimonials from "../components/sections/testimonials";
import NewsLetter from "../components/sections/news-letter";
import Footer from "../components/common/layout/footer";
import PageWrapper from "~/components/common/containers/page-wrapper";
import Header from "~/components/common/layout/header";

const HomePage: NextPage = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      {/* <SocialProofSection /> */}
      <OurServices />
      <Projects />
      <MetricsSection />
      <AboutSection />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;

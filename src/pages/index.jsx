import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import FaqSection from "@/components/home/FaqSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Northstar - Business Consulting & Training</title>
        <meta name="description" content="Expert strategic consulting to drive sustainable growth, operational innovation, and lasting business transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="selection:bg-accent selection:text-white">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <PartnershipSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ScheduleSection />
        <FaqSection />
        <BlogSection />
        <CtaSection />
      </main>
    </>
  );
}

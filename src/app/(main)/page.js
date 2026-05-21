import Browse from "@/components/Browse";
import Challenge from "@/components/Challenge";
import ContactUs from "@/components/Contact";
import FeatureBook from "@/components/FeatureBook";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marque from "@/components/Marque";
import Membership from "@/components/Membership";
import ReadersLoveUs from "@/components/ReadersLoveUs";

export default function Home() {
  return (
    <>
      <div className="container mx-auto w-full">
        {/* Search bar */}
        <Browse />
        <Hero />
        <Marque />
        <FeatureBook />
        <div className="mt-2 grid py-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-10">
          <HowItWorks />
          <div className="hidden self-stretch bg-[#ede5d8] lg:block" />
          <ReadersLoveUs />
        </div>

        <Membership />
        <Challenge />
        <ContactUs />
      </div>
    </>
  );
}

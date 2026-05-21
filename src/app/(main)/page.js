import Browse from "@/components/Browse";
import Challenge from "@/components/Challenge";
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
      </div>
      {/* Hero slider */}

      {/* Scrolling marquee — full width, outside the container */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid py-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-10">
          <HowItWorks />
          <div className="hidden self-stretch bg-[#ede5d8] lg:block" />
          <ReadersLoveUs />
        </div>

        {/* 21-Day Reading Challenge banner */}
        <Membership />
        <Challenge />
      </div>
    </>
  );
}

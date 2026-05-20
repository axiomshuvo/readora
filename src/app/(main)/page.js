import Browse from "@/components/Browse";
import Challenge from "@/components/Challenge";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marque from "@/components/Marque";
import ReadersLoveUs from "@/components/ReadersLoveUs";

export default function Home() {
  return (
    <>
      {/* Hero slider */}
      <Hero />

      {/* Scrolling marquee — full width, outside the container */}
      <Marque />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search bar */}
        <div className="mt-6">
          <Browse />
        </div>

        {/* How It Works + Readers Love Us — side by side on large screens */}
        <div className="mt-2 grid gap-10 py-8 lg:grid-cols-2 lg:divide-x lg:divide-[#ede5d8]">
          <HowItWorks />
          <div className="lg:pl-10">
            <ReadersLoveUs />
          </div>
        </div>

        {/* 21-Day Reading Challenge banner */}
        <Challenge />
      </div>
    </>
  );
}

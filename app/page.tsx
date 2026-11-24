import Banner from "@/components/pages/main/components/banner";
import Discover from "@/components/pages/main/components/discover";
import Drinks from "@/components/pages/main/components/drinks";
import Features from "@/components/pages/main/components/features";
import Cta from "@/components/pages/main/components/cta";
import Morning from "@/components/pages/main/components/morning";
import Testimonials from "@/components/pages/main/components/testimonials";
import Subscribe from "@/components/pages/main/components/subscribe";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Discover />
      <Drinks />
      <Features />
      <Cta />
      <Morning />
      <Testimonials />
      <Subscribe />
    </div>
  );
}

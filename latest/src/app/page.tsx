import { preload } from "react-dom";
import { Hero } from "@/components/sections/Hero";
import { HomeProducts } from "@/components/sections/HomeProducts";
import { Services } from "@/components/sections/Services";
import { RentResell } from "@/components/sections/RentResell";
import { FloLabsGroup } from "@/components/sections/FloLabsGroup";
import { SharedPurpose } from "@/components/sections/SharedPurpose";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/sections/Footer";

const HERO_POSTER = "/assets/hero-lunar-year.webp";

export default function Home() {
  preload(HERO_POSTER, { as: "image", fetchPriority: "high" });

  return (
    <main className="bg-background">
      <Hero />
      <HomeProducts />
      <Services />
      <RentResell />
      <SharedPurpose />
      <FloLabsGroup />
      <Blog />
      <Footer />
    </main>
  );
}

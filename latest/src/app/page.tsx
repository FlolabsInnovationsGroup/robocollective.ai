import { Hero, HomeProducts, FloLabsGroup, Services, RentResell, Blog, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <HomeProducts />
      <Services />
      <RentResell />
      <FloLabsGroup />
      <Blog />
      <Footer />
    </main>
  );
}

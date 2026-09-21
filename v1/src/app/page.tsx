import { Hero, HomeProducts, CAIPO, Services, RentResell, Blog, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <HomeProducts />
      <Services />
      <RentResell />
      <CAIPO />
      <Blog />
      <Footer />
    </main>
  );
}

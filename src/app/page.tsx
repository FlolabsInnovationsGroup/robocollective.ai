import { Hero, HomeProducts, CAIPO, Services, RentResell, Blog, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-black">
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

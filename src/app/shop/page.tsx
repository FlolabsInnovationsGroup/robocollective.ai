import { ShopHero, ShopCategories, ShopScrollRestoration, Footer } from "@/components/sections";

export const metadata = {
    title: "Shop | RoboCollective.ai",
    description: "Browse our full catalog of humanoid robots, robodogs, industrial arms, drones, and more.",
};

export default function ShopPage() {
    return (
        <main className="bg-black min-h-screen selection:bg-[#00DBFF]/30 selection:text-white">
            <ShopScrollRestoration />
            <ShopHero />
            <ShopCategories />
            <Footer />
        </main>
    );
}

import { ShopHero, ShopCategories, Footer } from "@/components/sections";

export const metadata = {
    title: "Shop Categories | RoboCollective.ai",
    description: "Explore our range of personal, educational, and industrial robotics solutions designed for real people.",
};

export default function ShopPage() {
    return (
        <main className="bg-background min-h-screen selection:bg-[#00DBFF]/30 selection:text-foreground">
            <ShopHero />
            <ShopCategories />
            <Footer />
        </main>
    );
}

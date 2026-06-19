import { ProductsGrid } from "./ProductsGrid";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
    title: "Products | RoboCollective.ai",
    description: "Browse our full catalog of humanoid robots, robodogs, industrial arms, drones, and more.",
};

export default function ProductsPage() {
    return (
        <main className="bg-background min-h-screen">
            <ProductsGrid />
            <Footer />
        </main>
    );
}

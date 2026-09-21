import { AboutHero, AboutStory, AboutFeatures, AboutValues, Footer } from "@/components/sections";

export const metadata = {
    title: "About Us | RoboCollective.ai",
    description: "Learn about RoboCollective.ai and our mission to make robotics practical, accessible, and designed for real people.",
};

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen">
            <AboutHero />
            <AboutStory />
            <AboutFeatures />
            <AboutValues />
            <Footer />
        </main>
    );
}

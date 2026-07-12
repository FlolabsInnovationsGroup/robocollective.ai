"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import { catalogData, categories } from "@/data/catalog";

const PRODUCT_IMAGE: Record<string, string> = {
    d1: "/assets/products/flapper-nimble-base-kit_1.png",
    d2: "/assets/products/flapper-nimble-starter-kit_1.png",
    d3: "/assets/products/flapper-nimble-lighthouse-bundle_1.png",
    d4: "/assets/products/base-multi-kit-2x_1.png",
    d5: "/assets/products/flapper-nimble-swarm-bundlex4_1.png",
    d6: "/assets/products/crazyradio-2-usb-dongle_1.png",
    d7: "/assets/products/battery-for-nimble.png",
    d8: "/assets/products/extra-wing-set-for-nimble_1.png",
    d9: "/assets/products/base-multi-kit-3x_1.png",
    d10: "/assets/products/lighthouse-base-station.png",
    d11: "/assets/products/lighthouse-support-kit-for-nimble_1.png",
    d12: "/assets/products/24-ghz-transmitter-with-edge-tx_1.png",
    d13: "/assets/products/frsky-receiver.png",
    d14: "/assets/products/set-of-body-shells-for-nimble.png",
    h1: "/assets/products/Humanoid_G1__BaseEDU__1.png",
    h2: "/assets/products/Humanoid_H1_1.png",
    h3: "/assets/products/Humanoid_Oli_1.png",
    h4: "/assets/products/Humanoid_R1.png",
    h5: "/assets/products/Humanoid_Mini_Hi_1.png",
    r1: "/assets/products/Robodog_Go1_1.png",
    r2: "/assets/products/Robodog_B2.png",
    r3: "/assets/products/Robodog_AlienGo_1.png",
    r4: "/assets/products/Robodog__B2B2-W__1.png",
    r5: "/assets/products/Robodog__Go2Go2-W__1.png",
    e1: "/assets/products/Mini_p_Bipedal_Robot_1.png",
    g1: "/assets/products/Humanoid_G1__BaseEDU__1.png",
    i1: "/assets/products/Robotic_Arm__RM65-6F.png",
    i2: "/assets/products/Robotic_Arm__RM65-B.png",
    i3: "/assets/products/Robotic_Arm__RM75-6F.png",
    i4: "/assets/products/Robotic_Arm__RM75-B.png",
    i5: "/assets/products/Robotic_Arm__RML63-6F.png",
    i6: "/assets/products/Robotic_Arm__RML63-B.png",
    i7: "/assets/products/Robotic_Arm__ECO62-B.png",
    i8: "/assets/products/Robotic_Arm__ECO65-6F.png",
    i9: "/assets/products/Robotic_Arm__ECO65-B.png",
    i10: "/assets/products/Robotic_Arm__GEN72-B.png",
    i11: "/assets/products/Single_Arm_Compound_Robot___Precision__Mobility__and_Versatility.png",
    i12: "/assets/products/Single_Arm_Compound_Robot___Compact__Mobile__and_Intelligent_Automation.png",
    i13: "/assets/products/Single_Arm_Lifting_Compound_Robot_1.png",
    i14: "/assets/products/Dual_Arm_Compound_Robot.png",
    i15: "/assets/products/Heavy_Load_AMR_1.png",
    i16: "/assets/products/Sub_Lift_Robot_1.png",
    i17: "/assets/products/Smart_Forklift.png",
    i18: "/assets/products/Sub_Lift_Robot_1.png",
    i19: "/assets/products/Conveyor_Robot.png",
    i20: "/assets/products/Base_Chassis_1.png",
    i21: "/assets/products/Hermes Chassis_1.png",
    i22: "/assets/products/Gripper__AG-160-95__1.png",
    i23: "/assets/products/Gripper__EG2-SF16__1.png",
    i24: "/assets/products/Gripper__ERG32-150.png",
    i25: "/assets/products/Gripper__EVS08_1.png",
    i26: "/assets/products/Gripper__RG52-050.png",
    i27: "/assets/products/Gripper__RGI-100-30.png",
    i28: "/assets/products/Flexible_Gripper__RM-SFG.png",
    i29: "/assets/products/Dex._Hand__RM56S2B__2L2R_1.png",
    i30: "/assets/products/Camera_RM-MVQ__1.png",
    i31: "/assets/products/Camera__D435C.png",
    i32: "/assets/products/Camera__DaBai_DCW.png",
    s1: "/assets/products/Hotel_Robot_1.png",
    s2: "/assets/products/Delivery_Robot__closed_type__1.png",
    s3: "/assets/products/Factory_Delivery_Robot_1.png",
    s4: "/assets/products/Mars_Smartbot_1.png",
    s5: "/assets/products/Disinfectant_Mini_Robot_1.png",
    s6: "/assets/products/Healthcare_Robot.png",
    s7: "/assets/products/Water 2_1.png",
    sp1: "/assets/products/Tron_1_1.png",
};

<<<<<<< HEAD
// --- Categories (Tabs) Data ---
const categories = [
    { id: "drones", title: "Nimble Drones", color: "from-sky-400 to-blue-600" },
    { id: "educational", title: "Educational Robots", color: "from-emerald-400 to-teal-600" },
    { id: "industrial", title: "Industrial Robots", color: "from-orange-400 to-red-600" },
    { id: "service", title: "Service Robots", color: "from-purple-400 to-indigo-600" },
    { id: "specialty", title: "Specialty Robots", color: "from-pink-400 to-rose-600" }
];

// --- Mock Product Data organized by Sub-categories ---
const catalogData: Record<string, { id: string, title: string, products: any[] }[]> = {
    drones: [
        {
            id: "kits", title: "Kits & Bundles", products: [
                { id: "d1", name: "Nimble Base Kit", description: "Flight-ready Nimble drone with charger and spare wings. Perfect for live demos, outreach, and immediate takeoff. Includes charger, spare set of wings, and protective shells; factory tuned hover with minimal setup.", price: "$350" },
                { id: "d2", name: "Nimble Starter Kit", description: "Everything in the base kit plus more wings and shells so teams can experiment longer between maintenance cycles. Extra wing set and body shells included; ready for campus demos and small swarm pilots.", price: "$500" },
                { id: "d3", name: "Nimble Lighthouse Bundle", description: "Complete bundle with Lighthouse deck and base stations for precise indoor positioning and repeatable trajectories. Includes Lighthouse deck and dual base stations; great for swarm coordination and waypoint flight.", price: "$850" }
            ]
        },
        {
            id: "fleets", title: "Scale to Fleets and Teaching Labs", products: [
                { id: "d4", name: "Base Multi Kit (2x)", description: "Two flight-ready Nimbles with spare wings, chargers, and shells so pairs can prototype quickly. Matched pair for mirrored experiments; includes shared tools for fast turnaround.", price: "$650" },
                { id: "d9", name: "Base Multi Kit (3x)", description: "Three drones, spare wings, and chargers for small teams and formation trials. Great starter pack for lab courses; ships with extra wings and shells.", price: "$950" },
                { id: "d5", name: "Nimble Swarm Bundle (x4)", description: "Four Nimbles, Lighthouse positioning gear, radios, and spares for swarm choreographies and indoor fleets. Includes Lighthouse positioning stack; four Crazyradio 2.0 links for multi-operator control.", price: "$1,200" }
            ]
        },
        {
            id: "spares", title: "Accessories and Spares", products: [
                { id: "d6", name: "Crazyradio 2.0", description: "Low-latency radio link for commanding single drones or swarms.", price: "$40" },
                { id: "d10", name: "Lighthouse Base Station", description: "Indoor positioning beacons for centimeter-level tracking." },
                { id: "d11", name: "Lighthouse Support Kit", description: "Mounts, plates, and wiring to attach Lighthouse decks securely." },
                { id: "d7", name: "Nimble Battery", description: "Stock up on extra flight packs to extend sorties.", price: "$15" },
                { id: "d8", name: "Wing Set", description: "Replacement wings to keep every airframe ready for flight.", price: "$20" },
                { id: "d12", name: "2.4 GHz Transmitter", description: "EdgeTX handheld transmitter for manual flight and training." },
                { id: "d13", name: "FrSky Receiver", description: "Bind to your preferred transmitter for manual modes." },
                { id: "d14", name: "Nimble Shells", description: "Fresh shells to refresh fleets after heavy use." }
            ]
        }
    ],
    educational: [
        {
            id: "robots", title: "Robots", products: [
                { id: "e1", name: "STEM Rover Starter", description: "An introductory autonomous vehicle kit that teaches basic Python programming." },
                { id: "e2", name: "Advanced Research Arm", description: "A highly articulated 6-axis robotic arm with open-source firmware for university research." },
                { id: "g1", name: "Humanoid G1 (Base/EDU)", description: "The Unitree G1 humanoid robot is a next-generation bipedal robotics platform with up to 43 DOF.", href: "/humanoid-g1-base-edu" }
            ]
        },
        {
            id: "bundles", title: "Classroom Bundles", products: [
                { id: "e3", name: "EduBot Classroom Kit (10x)", description: "A comprehensive classroom solution featuring modular robotics components for 10 groups.", price: "$2,499" },
                { id: "e4", name: "Research Lab Starter", description: "Two advanced arms and a central compute node for AI kinematics research.", price: "$6,000" }
            ]
        },
        {
            id: "spares", title: "Spare Parts", products: [
                { id: "e5", name: "Sensor Expansion Pack", description: "Lidar, ultrasonic, and infrared sensors to upgrade basic rovers.", price: "$150" }
            ]
        }
    ],
    industrial: [
        {
            id: "robots", title: "Industrial Arms & Crawlers", products: [
                { id: "i1", name: "HeavyDuty Arm X1", description: "A robust industrial robotic arm capable of precision material handling and welding.", price: "Quote" },
                { id: "i2", name: "Inspection Crawler", description: "Magnetic crawler robot equipped with high-def cameras for pipeline inspections.", price: "Quote" }
            ]
        },
        {
            id: "logistics", title: "Logistics", products: [
                { id: "i3", name: "Logistics Carrier Pro", description: "Autonomous mobile robot (AMR) designed for heavy payload transport in warehouses.", price: "Quote" }
            ]
        }
    ],
    service: [
        {
            id: "hospitality", title: "Hospitality & Delivery", products: [
                { id: "s1", name: "Hospitality Bot-S", description: "Friendly, interactive robot optimized for greeting guests and providing directions.", price: "$8,500" },
                { id: "s2", name: "Delivery Rover Waiter", description: "Multi-tiered autonomous delivery robot designed to serve food and drinks in restaurants.", price: "$6,200" }
            ]
        },
        {
            id: "sanitation", title: "Cleaning & Sanitation", products: [
                { id: "s3", name: "Sanitation Sentinel", description: "Autonomous UV-C disinfecting robot formulated to sanitize hospital rooms safely.", price: "$12,000" }
            ]
        }
    ],
    specialty: [
        {
            id: "marine", title: "Marine Exploration", products: [
                { id: "sp1", name: "AquaBot Submarine", description: "Tethered underwater ROV engineered for deep-sea exploration and marine biology.", price: "$5,400" }
            ]
        },
        {
            id: "space", title: "Extreme Environments", products: [
                { id: "sp2", name: "AstroRover Explorer", description: "Extreme-environment wheeled rover featuring radiation-hardened components.", price: "Quote" }
            ]
        }
    ]
};

// --- Spotlight Main Tab Component ---
function CategoryTab({
    category,
    isActive,
    onClick
}: {
    category: typeof categories[0],
    isActive: boolean,
    onClick: () => void
}) {
    const tabRef = useRef<HTMLButtonElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        if (!tabRef.current) return;
        const { left, top } = tabRef.current.getBoundingClientRect();
        mouseX.current = clientX - left;
        mouseY.current = clientY - top;
        tabRef.current.style.setProperty("--mouse-x", `${mouseX.current}px`);
        tabRef.current.style.setProperty("--mouse-y", `${mouseY.current}px`);
    };

    return (
        <motion.button
            ref={tabRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
                group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 flex-1 min-w-[200px]
                ${isActive
                    ? 'bg-surface/80 border-foreground/20 shadow-lg'
                    : 'bg-surface/50 border-border hover:border-border'
                }
            `}
        >
            {/* Spotlight Hover Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 40%)"
                }}
            />

            {/* Glowing Accent Line */}
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${category.color} ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'} transition-opacity duration-300`} />

            <div className="relative z-10 flex items-center justify-between">
                <span className={`font-bold ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-muted'} transition-colors duration-300`}>
                    {category.title}
                </span>
            </div>
        </motion.button>
    );
}
=======
const allProducts = Object.entries(catalogData).flatMap(([categoryId, subCategories]) =>
    subCategories.flatMap((sub) =>
        sub.products.map((product) => ({
            ...product,
            categoryId,
            colorClass: categories.find((c) => c.id === categoryId)?.color || categories[0].color,
            subCategoryTitle: sub.title,
            image: PRODUCT_IMAGE[product.id] ?? null,
        }))
    )
);
>>>>>>> origin/checkup-branch

// --- Product Card Component ---
function ProductCard({ product, colorClass }: { product: (typeof allProducts)[0]; colorClass: string }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const productHref = product.href || `/products/${product.id}`;

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.current = clientX - left;
        mouseY.current = clientY - top;
        cardRef.current.style.setProperty("--mouse-x", `${mouseX.current}px`);
        cardRef.current.style.setProperty("--mouse-y", `${mouseY.current}px`);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <Link
                ref={cardRef}
                href={productHref}
                onMouseMove={handleMouseMove}
<<<<<<< HEAD
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border p-8 h-full min-h-[320px] hover:border-brand/30 transition-colors duration-500 cursor-pointer"
=======
                aria-label={`View details for ${product.name}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-neutral-800 p-8 h-full min-h-[320px] hover:border-neutral-700 transition-colors duration-500 cursor-pointer no-underline"
>>>>>>> origin/checkup-branch
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background:
                            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%)",
                    }}
                />

                <div className="relative z-10 flex flex-col h-full">
<<<<<<< HEAD
                    {PRODUCT_IMAGE[product.id] ? (
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface shrink-0">
=======
                    {product.image ? (
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-900 shrink-0">
>>>>>>> origin/checkup-branch
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ) : (
                        <div className="flex justify-between items-start mb-4">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${colorClass} bg-opacity-10`}
                            >
                                <div className="w-4 h-4 rounded-full bg-white opacity-90 shadow-lg" />
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground bg-surface border border-border px-3 py-1 rounded-full">
                            {product.subCategoryTitle}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#00DBFF] transition-colors duration-300">
                        {product.name}
                    </h3>
<<<<<<< HEAD
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {product.description}
                    </p>
                </div>

                <div className="relative z-10 mt-8 flex justify-end">
                    <Link href={product.href || `/products/${product.id}`} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-brand transition-colors duration-300">
                        View Details <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
=======
                    <p className="text-neutral-400 text-sm leading-relaxed flex-1">{product.description}</p>
                </div>

                <div className="relative z-10 mt-8 flex justify-end">
                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
                        View Details{" "}
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
>>>>>>> origin/checkup-branch
                </div>
            </Link>
        </motion.div>
    );
}

// --- Main Container ---
export function ShopCategories() {
    return (
<<<<<<< HEAD
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Main Category Tabs Array */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
                    {categories.map((category) => (
                        <CategoryTab
                            key={category.id}
                            category={category}
                            isActive={activeMainTab === category.id}
                            onClick={() => setActiveMainTab(category.id)}
                        />
                    ))}
                </div>

                {/* Sub-Category section */}
                {subCategories.length > 0 && (
                    <div className="border border-border rounded-2xl bg-surface/40 p-6 backdrop-blur-sm">

                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 justify-between">
                            <h2 className="text-2xl font-bold text-foreground uppercase tracking-tight">
                                {activeMainCategoryData?.title}
                            </h2>

                            {/* Sub-category Pills */}
                            <div className="flex flex-wrap gap-2">
                                {subCategories.map((sub) => (
                                    <button
                                        key={sub.id}
                                        onClick={() => setActiveSubTab(sub.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300
                                            ${activeSubTab === sub.id
                                                ? 'bg-white text-black shadow-md'
                                                : 'bg-surface text-muted-foreground hover:bg-surface hover:text-brand'
                                            }
                                        `}
                                    >
                                        {sub.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Animated Products Display */}
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {currentProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={{ ...product, subCategoryTitle: currentSubCategory?.title }}
                                        colorClass={activeMainCategoryData?.color || "from-neutral-400 to-neutral-600"}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>

                    </div>
                )}
=======
        <section className="relative w-full py-24 bg-black min-h-screen">
            <div className="site-container flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                        Full <span className="text-neutral-500">Catalog</span>
                    </h2>
                    <p className="text-neutral-400 w-full">
                        Browse the entire shop below — every robotics solution in one place.
                    </p>
                </div>

                <div className="border border-neutral-800 rounded-2xl bg-neutral-900/40 p-6 backdrop-blur-sm">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {allProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    colorClass={
                                        categories.find((c) => c.id === product.categoryId)?.color ||
                                        "from-neutral-400 to-neutral-600"
                                    }
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
>>>>>>> origin/checkup-branch
            </div>
        </section>
    );
}

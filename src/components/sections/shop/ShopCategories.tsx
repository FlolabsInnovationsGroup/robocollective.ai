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
                aria-label={`View details for ${product.name}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-neutral-800 p-8 h-full min-h-[320px] hover:border-neutral-700 transition-colors duration-500 cursor-pointer no-underline"
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background:
                            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%)",
                    }}
                />

                <div className="relative z-10 flex flex-col h-full">
                    {product.image ? (
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-900 shrink-0">
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
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                            {product.subCategoryTitle}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00DBFF] transition-colors duration-300">
                        {product.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed flex-1">{product.description}</p>
                </div>

                <div className="relative z-10 mt-8 flex justify-end">
                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
                        View Details{" "}
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}

// --- Main Container ---
export function ShopCategories() {
    return (
        <section className="relative w-full py-24 bg-black min-h-screen">
            <div className="site-container flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                        Full <span className="text-neutral-500">Catalog</span>
                    </h2>
                    <p className="text-neutral-400 w-full">
                        Browse the entire shop below. Every robotics solution is in one place.
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
            </div>
        </section>
    );
}

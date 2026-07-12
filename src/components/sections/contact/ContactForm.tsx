"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const HUBSPOT_FORM_CSS = `
  .hs-form label,
  .hs-form .hs-form-field > label,
  .hs-form .hs-field-desc,
  .hs-form legend,
  .hs-form .hs-richtext,
  .hs-form .hs-richtext p,
  .hs-form .legal-consent-container,
  .hs-form .legal-consent-container p {
    color: #171717 !important;
    font-size: 14px !important;
  }
  .hs-form .hs-input,
  .hs-form input,
  .hs-form textarea,
  .hs-form select {
    background-color: #ffffff !important;
    border: 1px solid #a3a3a3 !important;
    color: #171717 !important;
  }
  .hs-form .hs-input::placeholder,
  .hs-form input::placeholder,
  .hs-form textarea::placeholder {
    color: #525252 !important;
    opacity: 1 !important;
  }
`;

export function ContactForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;
        script.onload = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const hbspt = (window as any).hbspt;
            if (hbspt) {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "45023159",
                    formId: "ec2d8bcf-7b45-40ab-8055-b76d06ec37ff",
                    target: "#hubspot-form-container",
                    cssRequired: "",
                    css: HUBSPOT_FORM_CSS,
                });
            }
        };
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
        >
<<<<<<< HEAD
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00DBFF]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 mb-10">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Send a Message</h2>
                    <p className="text-muted-foreground">
=======
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="relative z-10 mb-10">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">Send a Message</h2>
                    <p className="text-neutral-600">
>>>>>>> origin/checkup-branch
                        Please share the details of your question so we can route you to the right specialist.
                    </p>
                </div>
                <div className="relative z-10 contact-hubspot-form">
                    <div id="hubspot-form-container" />
                </div>
            </div>
        </motion.div>
    );
}

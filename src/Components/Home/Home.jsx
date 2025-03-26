import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

export default function Home() {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex justify-center items-center min-h-[80vh] md:h-screen w-full select-none relative bg-gradient-to-r from-orange-500 to-blue-500">
                    
                    {/* Background Image - Responsive */}
                    <img
                        src="/accounting.jpeg"
                        alt="Accounting Background"
                        className="absolute w-full h-full object-cover opacity-30"
                    />
                    
                    {/* Animated Heading - Adjusted for Mobile */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 font-helvetica text-[6vw] sm:text-[5vw] md:text-[4vw] font-black text-center text-white px-4 leading-tight"
                    >
                        Welcome to <br />
                        Your Trusted Partner for Outsourced
                        <br />
                        Accounting and Bookkeeping Services
                    </motion.h1>
                </div>
            </div>
            <WhyChooseUs />
            <TeamSection />
            <TestimonialSection />
        </>
    );
}

import React, { useState, useRef, useEffect } from "react";
import "./About.css";

function About() {
    const [showMore, setShowMore] = useState(false);
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        if (showMore && aboutSectionRef.current) {
            aboutSectionRef.current.style.height = `${aboutSectionRef.current.scrollHeight}px`;
        } else if (aboutSectionRef.current) {
            aboutSectionRef.current.style.height = "auto";
        }
    }, [showMore]);

    return (
        <div>
            <div className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 mt-4">
                <h1 className="font-helvetica text-3xl text-center font-bold">About Us</h1>
                <h3 className="font-helvetica text-gray-400 mt-2 text-center">
                    Let's Build Trust Together
                </h3>
                <img src="/Aboutus1.jpg" className="w-full h-full mb-4" alt="" />
            </div>

            {/* About section with dynamic height */}
            <div id="about" ref={aboutSectionRef} className={showMore ? "expanded" : ""}>
                <div id="left" className="flex justify-center">
                    <img
                        src="/about.png"
                        className="w-full max-w-[400px] h-auto object-cover rounded-lg mt-12"
                        alt="About"
                    />
                </div>

                <div id="right">
                    <h2 className="text-2xl mt-16">
                        Quantum Accounting and Business Solution
                    </h2>
                    <div className="border-black border-2 p-3">
                        <p className="mt-5">
                            At Quantum Accounting & Business Solutions, we provide{" "}
                            <strong>end-to-end accounting, taxation, accounts receivable & payable, and payroll services </strong> 
                            tailored for growing enterprises. Our customer-centric approach, deep domain expertise, and advanced technology ensure seamless financial management, allowing businesses to focus on growth.
                            <br />

                            <strong>Why Choose Us?</strong>
                            <br />
                            ✅ <strong>Comprehensive Financial Solutions</strong> – From bookkeeping to taxation, we handle it all.
                            <br />
                            ✅ <strong>Cutting-Edge Technology</strong> – We leverage the latest tools to enhance efficiency.
                            <br />
                            ✅ <strong>Expert-Led Services</strong> – A team of seasoned professionals ensuring accuracy & compliance.
                            <br />
                            ✅ <strong>Your Growth Partner</strong> – Scalable solutions designed to support your business expansion.
                            <br />

                            {showMore && (
                                <>
                                    <br />
                                    Founded in <strong>2025 by Mr. Aryan Singh</strong>, Quantum Accounting entered the **outsourcing industry** with a vision to redefine financial operations. By focusing on **strong systems and streamlined processes**, we have positioned ourselves as a trusted name in Accounting & Finance solutions.
                                    <br />
                                    <br />
                                    Let us handle your financial complexities while you focus on what truly matters – growing your business!
                                    <br />
                                    <br />
                                    📩 <strong>Get in touch with us today!</strong>
                                </>
                            )}
                        </p>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-3 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                        >
                            {showMore ? "SHOW LESS" : "ABOUT MORE"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

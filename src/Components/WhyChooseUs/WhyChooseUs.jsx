import React from "react";
import { FaUsersCog, FaShieldAlt, FaReact, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionDiv = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <MotionDiv>
        <div className="text-center mb-10">
          <h5 className="font-bold text-lg text-[#EEA124] uppercase tracking-wide">
            Why Choose Us
          </h5>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-black">
            We Help Your Business Grow Exponentially 🚀
          </h1>
        </div>
      </MotionDiv>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center justify-center">
        {/* Left Column */}
        <div className="space-y-8">
          <MotionDiv delay={0.2}>
            <div className="flex items-start space-x-5">
              <div className="w-14 h-14 bg-[#EEA124] rounded-full flex items-center justify-center shadow-md">
                <FaUsersCog className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mt-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">
                  Our team consists of highly skilled professionals with extensive experience.
                </p>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv delay={0.4}>
            <div className="flex items-start space-x-5">
              <div className="w-14 h-14 bg-[#EEA124] rounded-full flex items-center justify-center shadow-md">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mt-2">Confidentiality Assured</h4>
                <p className="text-gray-600 text-sm">We prioritize security and ensure your data remains safe.</p>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Center Image */}
        <MotionDiv delay={0.6}>
          <div className="w-full flex justify-center">
            <img
              src="/pic2.jpg"
              alt="Feature"
              className="w-80 h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </MotionDiv>

        {/* Right Column */}
        <div className="space-y-8">
          <MotionDiv delay={0.8}>
            <div className="flex items-start space-x-5">
              <div className="w-14 h-14 bg-[#EEA124] rounded-full flex items-center justify-center shadow-md">
                <FaReact className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mt-2">Cost-Effective Solutions</h4>
                <p className="text-gray-600 text-sm">Save costs while ensuring high-quality results.</p>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv delay={1.0}>
            <div className="flex items-start space-x-5">
              <div className="w-14 h-14 bg-[#EEA124] rounded-full flex items-center justify-center shadow-md">
                <FaTools className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mt-2">Customized Services</h4>
                <p className="text-gray-600 text-sm">We tailor solutions to meet your business needs.</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

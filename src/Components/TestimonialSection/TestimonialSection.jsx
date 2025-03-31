import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/ee/60/85/ee60853a44569c1d477591d8952ba35d.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/6f/dc/96/6fdc96169741c8a2780007d6fc13f160.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/b5/9c/30/b59c3077ad37ae5ddad395e1a6389553.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/ba/03/c0/ba03c04929d19a98b0f44525507603b9.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
];

const TestimonialSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={ref} className="container mx-auto py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto mb-12">
        <h5 className="text-[#EEA124] font-bold uppercase">Testimonial</h5>
        <h1 className="text-3xl font-semibold leading-tight">
          What Our Clients Say About Our Digital Services
        </h1>
      </div>
      <div className="relative w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col items-center"
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-20 h-20 rounded-full mb-4 object-cover"
              src={testimonials[index].image}
              alt={testimonials[index].name}
            />
            <h4 className="text-black font-semibold text-lg">{testimonials[index].name}</h4>
            <p className="text-sm text-gray-600 uppercase mb-2">
              {testimonials[index].profession}
            </p>
            <p className="text-gray-700 text-center max-w-md">
              {testimonials[index].feedback}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Tools Section */}
      <div className="w-full mt-20 flex flex-col items-center">
        <h5 className="text-[#EEA124] font-bold uppercase text-center mb-2">
          Tools that Accelerate the Working Efficiency
        </h5>
        <h1 className="text-3xl font-semibold text-center mb-6">
          We use these tools for seamless Accounting
        </h1>
        <img
          src="/Tools1.png"
          className="w-[800px] h-[600px] object-contain"
          alt="Tools"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
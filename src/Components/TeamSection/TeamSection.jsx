import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Shinu Goswami",
    role: "Co-Founder",
    image: "/Pic2.jpeg",
  },
  {
    name: "Aryan Singh",
    role: "Founder & CEO",
    image: "/Pic1.jpeg",
  },
  {
    name: "Aditya Shrivastava",
    role: "IT Director",
    image: "/Pic3.png",
  },
];

const TeamSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h5 className="text-[#EEA124] font-bold uppercase tracking-wider">Meet Our Team</h5>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-black">
          Professional Team Ready to Support You 🚀
        </h1>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Image Container - Full Image Without Cropping */}
            <motion.div 
              className="w-full flex justify-center items-center bg-gray-100 p-4"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-auto max-h-[300px] object-contain rounded-md"
                src={member.image}
                alt={member.name}
              />
            </motion.div>

            {/* Name & Role */}
            <div className="text-center py-5">
              <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
              <p className="uppercase text-sm text-gray-600">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

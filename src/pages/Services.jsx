
import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";


import { FaStar, FaArrowUp, FaCheckCircle, FaCode, FaServer, FaDatabase, FaLink, FaRocket, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { MdArrowUpward } from 'react-icons/md';


const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-5 md:py-10 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >

          <Title>Services I Provide</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
           
            {servicesData?.map((item) => (
              <div
                key={item?._id}
                className="flex flex-col p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-lightSky/10 hover:border-lightSky/30 rounded-xl shadow-lg group hover:shadow-lightSky/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
             
                <div className="w-full flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-lightSky/20 to-cyan-500/20 group-hover:from-lightSky/30 group-hover:to-cyan-500/30">
                      {item?.icon}
                    </div>
                    <div>
                      <p className="text-sm font-mono text-lightSky/60">0{item?._id}</p>
                      <h2 className="text-xl font-bold text-white">{item?.title}</h2>
                    </div>
                  </div>
                  <Link
                    href={item?.href}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-lightSky/10 hover:bg-lightSky/20 transition-colors duration-200 group-hover:scale-110"
                    aria-label={`Learn more about ${item?.title}`}
                  >
                    <MdArrowUpward className="rotate-45 w-5 h-5" />
                  </Link>
                </div>

                
                <p className="text-gray-300 mb-6 flex-grow line-clamp-3">
                  {item?.description}
                </p>

               
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-lightSky/10 text-lightSky rounded-full border border-lightSky/20 hover:bg-lightSky/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white/80">Key Features:</h4>
                  <ul className="space-y-1">
                    {item?.features?.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-lightSky mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {item?.features?.length > 3 && (
                    <p className="text-xs text-lightSky/70 mt-2">
                      +{item.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Stats & Footer */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-400">Available</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs text-gray-400">Expert</span>
                      </div>
                    </div>
                    <button className="text-sm text-lightSky hover:text-white font-medium group-hover:underline transition-colors duration-200">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPage;
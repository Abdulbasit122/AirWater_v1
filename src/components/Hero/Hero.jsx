import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import WaterDrops from "./WaterDrops";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();

      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      heroRef.current.style.setProperty("--mouse-x", x);
      heroRef.current.style.setProperty("--mouse-y", y);
    };

    const element = heroRef.current;

    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-16 flex items-center water-bg overflow-hidden"
      style={{
        "--mouse-x": 0.5,
        "--mouse-y": 0.5,
      }}
    >
      <WaterDrops />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-600 rounded-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Leading Water Management Solutions
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 leading-tight mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Aqua Air Management <br /> Company
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Efficient, sustainable solutions for water purification and air
              quality management. Our innovative technologies ensure clean
              resources for a healthier future.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.button
                className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full shadow-lg transition-all water-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>

              <motion.button
                className="bg-white hover:bg-gray-50 text-primary-600 py-3 px-8 rounded-full shadow-md border border-primary-200 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>

              <motion.button
                className="bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-8 rounded-full shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          ></motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

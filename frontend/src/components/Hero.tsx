import { motion } from "framer-motion";
import heroImage from "../assets/hero-collaboration.png"; // Import the image

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
      {/* Soft Background Gradients for Trendy Feel */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[80%] bg-gradient-to-bl from-teal-100/50 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-block px-4 py-1.5 bg-white border border-indigo-100 rounded-full shadow-sm mb-2">
            <span className="text-indigo-600 font-bold tracking-wide text-xs uppercase">
              Innovating Retail & Beyond
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] text-gray-900 tracking-tight drop-shadow-sm">
            Where thoughts <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              become one.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-body max-w-lg leading-relaxed">
            Mindreamers employees strive to provide services par excellence to
            all its clients every day. We build accessible solutions for the
            retail industry and beyond.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-teal-600 text-white font-bold rounded-full shadow-lg shadow-teal-200/50 hover:shadow-xl hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300 font-sans tracking-wide">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white border-2 border-indigo-100 text-indigo-700 font-bold rounded-full hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 font-sans tracking-wide">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Content - Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full h-[85%] rounded-[3rem] overflow-hidden shadow-2xl bg-white border-4 border-white p-2 transform hover:rotate-1 transition-all duration-700 ring-1 ring-gray-100/50">
            {/* Visual Content: Replaced with User Image */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
              <img
                src={heroImage}
                alt="Team Collaboration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient (Optional, for better text visibility if needed, or just style) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge (Glassmorphism) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="absolute top-12 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-200">
                  10+
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm font-sans tracking-tight">
                    Years of
                  </p>
                  <p className="text-teal-600 text-xs font-bold uppercase tracking-wider">
                    Excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profile from "../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full -top-20 -left-20" />

        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full bottom-0 right-0" />

      </div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
             Sneha
           <br />
            Shanbhag
          </h1>

          <h2 className="text-2xl mt-6 text-slate-300">
            Cloud Engineer • AI Developer • React Developer
          </h2>

          <p className="mt-8 text-slate-400 leading-8 max-w-xl">
            Passionate about building secure cloud-native
            applications, AI-powered systems, and modern web
            experiences.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="/Sneha Shanbhag_Resume.pdf"
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-8 py-4 border border-cyan-500 rounded-full hover:bg-cyan-500 transition"
            >
              View Projects
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Sneha"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>

      <ArrowDown
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400"
        size={35}
      />

    </section>
  );
}
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10"
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400"/>
                <p>snehashanbhag02@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400"/>
                <a href="https://github.com/Sneha02Shanbhag">
                  Sneha02Shanbhag
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400"/>
                <a href="https://www.linkedin.com/in/sneha-shanbhag-3a2209263/">
                  sneha-shanbhag
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400"/>
                <p>Karnataka, India</p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900/60 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder=" Your email"
                className="w-full bg-slate-900/60 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Your Meassage"
                className="w-full bg-slate-900/60 rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400"
              />

              <button
                className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full"
              >
                Send Message 🚀
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
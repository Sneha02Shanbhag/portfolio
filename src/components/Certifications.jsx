import { motion } from "framer-motion";
import { Award } from "lucide-react";
import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >

              <Award
                size={42}
                className="text-cyan-400 mb-5"
              />

              <h3 className="text-xl font-bold">
                {cert.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {cert.issuer}
              </p>

              <p className="text-cyan-400 mt-5">
                {cert.year}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
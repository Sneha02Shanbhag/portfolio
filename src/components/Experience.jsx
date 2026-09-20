import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500 pl-8">

          {experience.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative"
            >

              <div className="absolute -left-[42px] w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-950" />

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">

                <p className="text-cyan-400 font-semibold">
                  {exp.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {exp.title}
                </h3>

                <p className="text-slate-300">
                  {exp.company}
                </p>

                <p className="mt-5 text-slate-400 leading-7">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {exp.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
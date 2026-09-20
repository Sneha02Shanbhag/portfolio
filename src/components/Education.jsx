import { motion } from "framer-motion";
import education from "../data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        {education.map((edu, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10"
          >

            <div className="flex items-center gap-4 mb-6">

              <GraduationCap
                size={40}
                className="text-cyan-400"
              />

              <div>

                <h3 className="text-3xl font-bold">
                  {edu.degree}
                </h3>

                <p className="text-slate-400">
                  {edu.branch}
                </p>

              </div>

            </div>

            <p className="text-xl">
              {edu.college}
            </p>

            <p className="text-slate-400 mt-2">
              {edu.location}
            </p>

            <div className="flex justify-between mt-8">

              <span className="text-cyan-400">
                {edu.year}
              </span>

              <span className="font-semibold">
                {edu.cgpa
                   ? `CGPA : ${edu.cgpa}`
                   : `Score : ${edu.percentage}`}
              </span>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
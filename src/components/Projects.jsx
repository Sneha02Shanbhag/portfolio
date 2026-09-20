import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:border-cyan-400 transition-all duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-6">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>

                  

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
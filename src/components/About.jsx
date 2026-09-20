import { motion } from "framer-motion";
import { Code2, BrainCircuit, Cloud } from "lucide-react";

const stats = [
  {
    icon: <Cloud size={28} />,
    title: "Cloud",
    value: "AWS • Azure • GCP",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI",
    value: "LLMs • RAG • ML",
  },
  {
    icon: <Code2 size={28} />,
    title: "Development",
    value: "React • Java • Python • Node",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 border border-slate-800"
          >
            <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
              Hello 👋
            </h3>

            <p className="text-slate-300 leading-8">
              I'm a Computer Science Engineering student passionate
              about Cloud Computing, Artificial Intelligence and
              modern software development.
            </p>

            <br />

            <p className="text-slate-400 leading-8">
              I enjoy building secure cloud-native applications,
              AI-powered solutions using LLMs and RAG,
              and responsive web applications with React.
            </p>

            <br />

            <p className="text-slate-400 leading-8">
              My goal is to build technology that solves
              real-world problems while continuously
              learning new tools and technologies.
            </p>
          </motion.div>

          {/* RIGHT */}

          <div className="grid gap-6">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 transition-all"
              >
                <div className="text-cyan-400 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {item.value}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
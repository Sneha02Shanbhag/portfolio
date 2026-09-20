import { motion } from "framer-motion";
import { VscAzure } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import {
  FaAws,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "AWS", icon: <FaAws size={40} /> },
 { name: "Azure", icon: <VscAzure size={40} /> },
{ name: "GCP", icon: <FcGoogle size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
];

export default function Skills() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center border border-slate-800 hover:border-cyan-400 transition-all cursor-pointer"
            >

              <div className="text-cyan-400">
                {skill.icon}
              </div>

              <p className="mt-5 font-medium">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
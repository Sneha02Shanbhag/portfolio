import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 250, -150, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -200, 100, 0],
          y: [0, 150, -80, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[180px]"
      />

    </div>
  );
}
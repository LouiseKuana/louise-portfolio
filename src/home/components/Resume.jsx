import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-1 text-white font-mono text-lg"
    >
      <p>Hi! I'm Louise, a backend developer passionate about building clean APIs...</p>
      {/* Your resume content here */}
    </motion.div>
  );
}


import { motion } from "framer-motion";

const BlobDecoration = ({ className = "", style = {} }) => {
  return (
    <motion.div
      className={`blob-decoration ${className}`}
      style={style}
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 50% 60% 50%",
          "60% 40% 30% 70% / 50% 60% 40% 60%",
          "50% 50% 60% 40% / 60% 40% 50% 50%",
          "40% 60% 70% 30% / 40% 50% 60% 50%",
        ],
        scale: [1, 1.05, 0.97, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
};

export default BlobDecoration;

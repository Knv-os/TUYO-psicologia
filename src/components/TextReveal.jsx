import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TextReveal = ({ text, as: Tag = "h1", className = "", ...props }) => {
  const words = text.split(" ");

  return (
    <Tag className={className} {...props}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em" }}
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} style={{ display: "inline-block" }}>
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default TextReveal;

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ target, suffix = "", label, duration = 1.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const startTime = performance.now();
    const ms = duration * 1000;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      className="counter-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="counter-number">
        {count}
        {suffix}
      </span>
      <span className="counter-label">{label}</span>
    </motion.div>
  );
};

export default AnimatedCounter;

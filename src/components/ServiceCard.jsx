import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceCard = ({ icon, title, description, ctaLink, ctaText }) => {
  return (
    <motion.article
      className="card service-card"
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className="card-icon" aria-hidden="true">
        <img src={icon} alt={`Ícone para ${title}`} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      {ctaLink && ctaText && (
        <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
          <Link to={ctaLink} className="button button-secondary">
            {ctaText}
          </Link>
        </div>
      )}
    </motion.article>
  );
};

export default ServiceCard;

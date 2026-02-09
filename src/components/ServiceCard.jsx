import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, ctaLink, ctaText }) => {
  return (
    <motion.article
      className="card service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div
        className="card-icon"
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={icon}
          alt={`Ícone para ${title}`}
          style={{ height: "50px", width: "50px" }}
        />
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

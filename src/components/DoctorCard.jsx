import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DoctorCard = ({ doctor }) => {
  const tags = Array.isArray(doctor.approaches)
    ? doctor.approaches.slice(0, 3)
    : [];

  return (
    <motion.article
      className="card doctor-card"
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <img
        className="doctor-photo"
        src={doctor.photo}
        alt={`Foto de ${doctor.name}`}
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-title">{doctor.name}</h3>
        <p className="card-text">{doctor.specialization}</p>
        {tags.length > 0 && (
          <div className="doctor-tags" aria-label="Áreas de atuação">
            {tags.map((t) => (
              <span key={t} className="doctor-tag">
                {t}
              </span>
            ))}
          </div>
        )}
        {doctor.quote && <p className="doctor-quote">“{doctor.quote}”</p>}
        <Link to={`/doutores/${doctor.id}`} className="button">
          Ver perfil
        </Link>
      </div>
    </motion.article>
  );
};

export default DoctorCard;

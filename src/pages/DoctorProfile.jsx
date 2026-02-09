import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import doctors from "../data/doctors.js";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <main className="section">
        <div className="container narrow">
          <h1 className="section-title">Profissional não encontrado</h1>
          <p>Verifique a lista de profissionais.</p>
          <Link to="/doutores" className="button">
            Voltar
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container profile-grid ">
        <motion.div
          className="profile-photo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={doctor.photo} alt={`Foto de ${doctor.name}`} />
        </motion.div>
        <motion.div
          className="profile-content"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h1 className="section-title">{doctor.name}</h1>
          <p className="lead">{doctor.specialization}</p>

          <h3>Sobre</h3>
          {Array.isArray(doctor.longBio) && doctor.longBio.length > 0 ? (
            doctor.longBio.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{doctor.bio}</p>
          )}

          {doctor.quote && (
            <blockquote className="profile-quote">“{doctor.quote}”</blockquote>
          )}

          <h3>Formação</h3>
          <ul>
            {doctor.education.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>

          <h3>Abordagens terapêuticas</h3>
          <ul>
            {doctor.approaches.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          <div className="profile-actions">
            <a href="#contato" className="button button-primary">
              Agendar consulta
            </a>
            <Link to="/doutores" className="button">
              Ver todos
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default DoctorProfile;

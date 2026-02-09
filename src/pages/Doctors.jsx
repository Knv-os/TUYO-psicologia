import React from "react";
import { motion } from "framer-motion";
import DoctorCard from "../components/DoctorCard.jsx";
import doctors from "../data/doctors.js";
import folha from "../assets/folha.png";

const Doctors = () => {
  return (
    <main className="page-doctors">
      <section className="hero">
        <div className="container">
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Profissionais que cuidam
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Nossa equipe é formada por psicólogas que compartilham valores,
            afeto e compromisso ético.
          </motion.p>
        </div>
        <div className="container">
          <motion.div
            className="grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {doctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </motion.div>

          <motion.aside
            className="card mascot-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mascot-media">
              <img src={folha} alt="Ilustração com folha, símbolo de cuidado" />
            </div>
            <div className="mascot-body">
              <h3 className="card-title">Nosso mascote: beija-flor Túlio</h3>
              <p className="card-text">
                Nosso mascote, o beija-flor Túlio, simboliza o cuidado leve e
                paciente que floresce no tempo de cada um.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
};

export default Doctors;

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const DoctorCard = ({ doctor }) => {
  return (
    <motion.article
      className="card doctor-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <img className="doctor-photo" src={doctor.photo} alt={`Foto de ${doctor.name}`} loading="lazy" />
      <div className="card-body">
        <h3 className="card-title">{doctor.name}</h3>
        <p className="card-text">{doctor.specialization}</p>
        {doctor.quote && (
          <p className="doctor-quote">“{doctor.quote}”</p>
        )}
        <Link to={`/doutores/${doctor.id}`} className="button">Ver perfil</Link>
      </div>
    </motion.article>
  )
}

export default DoctorCard

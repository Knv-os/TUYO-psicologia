import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiX } from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TestimonialCard = ({ name, rating, text }) => {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const lastActiveElRef = useRef(null);

  const shouldTruncate = text.length > 180;
  const previewText = useMemo(() => {
    if (!shouldTruncate) return text;
    return `${text.slice(0, 170).trim()}…`;
  }, [text, shouldTruncate]);

  useEffect(() => {
    if (!open) return;

    lastActiveElRef.current = document.activeElement;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (lastActiveElRef.current instanceof HTMLElement) {
        lastActiveElRef.current.focus();
      }
    };
  }, [open]);

  return (
    <>
      <motion.article className="testimonial-card" variants={itemVariants}>
        <div
          className="testimonial-stars"
          aria-label={`${rating} de 5 estrelas`}
        >
          {Array.from({ length: rating }, (_, i) => (
            <FiStar key={i} className="star-filled" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="testimonial-text">"{previewText}"</blockquote>
        <p className="testimonial-author">{name}</p>
        {shouldTruncate && (
          <div className="testimonial-actions">
            <button
              type="button"
              className="text-button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
            >
              Ler mais
            </button>
          </div>
        )}
      </motion.article>

      {open && (
        <div
          className="testimonial-modal-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className="testimonial-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Depoimento de ${name}`}
          >
            <div className="testimonial-modal__header">
              <h3 className="testimonial-modal__title">{name}</h3>
              <button
                ref={closeBtnRef}
                type="button"
                className="button testimonial-modal__close"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <p className="testimonial-modal__text">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;

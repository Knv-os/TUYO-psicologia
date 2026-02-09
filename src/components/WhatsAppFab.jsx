import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const WHATSAPP_NUMBER_E164 = "5519993998442";

const WhatsAppFab = () => {
  const message = "Olá! Gostaria de agendar uma sessão.";
  const href = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <FiMessageCircle aria-hidden="true" />
    </a>
  );
};

export default WhatsAppFab;

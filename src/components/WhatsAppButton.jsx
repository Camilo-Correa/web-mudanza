import { FaWhatsapp } from "react-icons/fa";

/**
 * Componente WhatsAppButton que permite redirigir a WhatsApp con un mensaje predefinido.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.phone - Número de teléfono de WhatsApp (incluyendo código de país).
 * @param {string} props.message - Mensaje predefinido que se enviará en el chat.
 * @param {string} [props.label="Contactar por WhatsApp"] - Texto del botón (opcional).
 * @param {string} [props.className=""] - Clases CSS adicionales para personalización.
 * @returns {JSX.Element} El botón de WhatsApp.
 */


const WhatsAppButton = ({ phone, message, label, className }) => {
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  // Retorna directamente el botón sin envolverlo en otra función
  return (
    <button
      onClick={handleWhatsAppRedirect}
      className={`flex items-center gap-2 p-4 rounded-full text-white bg-green-500 hover:bg-green-600 ${className}`}
    >
      <FaWhatsapp size={20} />
      {label || "Contactar por WhatsApp"}
    </button>
  );
};

export default WhatsAppButton;

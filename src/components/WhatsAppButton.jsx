import { FaWhatsapp } from "react-icons/fa";

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

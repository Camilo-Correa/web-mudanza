import React from "react";

/**
 * Componente ServiceCard que muestra información sobre un servicio.
 * Incluye una imagen, un ícono, un título y una descripción.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.image - URL de la imagen del servicio.
 * @param {React.ComponentType} props.icon - Componente del ícono (de react-icons u otro).
 * @param {string} props.title - Título del servicio.
 * @param {string} props.description - Descripción breve del servicio.
 * @returns {JSX.Element} El componente ServiceCard.
 */


function ServiceCard({ image, icon: Icon, title, description }) {
  return (
    <div className="flex flex-col gap-4 items-center p-4 bg-white shadow-md rounded-2xl">
      {/* Imagen */}
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={title}
        />
      </div>
      {/* Título e Ícono */}
      <div className="flex items-center gap-2 text-center">
        <Icon className="text-green-500 w-6 h-6" />
        <h2 className="text-green-500 text-xl font-bold">{title}</h2>
      </div>
      {/* Descripción */}
      <p className="text-gray-500 text-sm leading-[1.8rem] text-justify">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;

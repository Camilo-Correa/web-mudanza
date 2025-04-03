import React from "react";
import { TfiLocationPin, TfiTruck } from "react-icons/tfi";
import { IoIosAirplane } from "react-icons/io";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { TfiDropboxAlt } from "react-icons/tfi";


/**
 * Componente Services que muestra los diferentes servicios de mudanza ofrecidos por la empresa.
 * Cada servicio incluye una imagen, un mensaje destacado, un icono, un título y una descripción detallada.
 * Los servicios mostrados son mudanzas locales, nacionales, internacionales, transporte de muebles y vaciado de pisos.
 *
 * @component
 * @returns {JSX.Element} Sección que muestra los servicios de mudanza.
 */


function Services() {
  const services = [
    {
      id: 1,
      image: "mudanza-local.jpg",
      message: "Cuidamos tus cosas con dedicación",
      icon: TfiLocationPin,
      title: "Mudanzas Locales",
      description:
        "Mudanzas en Asturias sin complicaciones. Nos ocupamos del embalaje, desmontaje y traslado de tus muebles para que todo llegue perfecto a tu nuevo hogar.",
    },
    {
      id: 2,
      image: "mudanza2.jpg",
      message: "Servicio seguro en todo el país",
      icon: TfiTruck,
      title: "Mudanzas Nacionales",
      description:
        "¿Te mudas a otra ciudad de España? Con C&N Transportes, tu mudanza será fácil y segura.",
    },
    {
      id: 3,
      image: "mudanza3.jpg",
      message: "Llevamos tus cosas al mundo",
      icon: IoIosAirplane,
      title: "Mudanzas Internacionales",
      description:
        "Nos encargamos de todo el proceso para que tu mudanza internacional sea rápida y sin imprevistos.",
    },
    {
      id: 4,
      image: "mudanza4.jpg",
      message: "Traslado rápido y seguro",
      icon: TfiDropboxAlt,
      title: "Transporte de Muebles y Enseres",
      description:
        "Transporte de muebles y electrodomésticos en Asturias y toda España, con máxima seguridad y puntualidad.",
    },
    {
      id: 5,
      image: "mudanza3.jpg",
      message: "Desocupa sin complicaciones",
      icon: FaBuildingCircleArrowRight,
      title: "Vaciado de Pisos y Locales",
      description:
        "Servicio de vaciado de pisos y locales en Asturias: recogemos, reciclamos y donamos lo que ya no necesites.",
    },
  ];

  return (
    <section className="min-h-[90vh] bg-gray-50 p-8 xl:p-16">
        <div className="p-4 xl:p-8">
        {/* Título principal */}
        <div className="text-center mb-10">
            <h1 className="text-[33px] font-bold text-secondary mb-4">Servicios de Mudanzas en Asturias</h1>
            <p className="text-gray-500 text-xl leading-[2.5rem] text-justify">
            En Transportes C & N, realizamos mudanzas en Asturias y en toda España. 
            Ofrecemos un servicio ágil y seguro para particulares y empresas, garantizando 
            un traslado sin preocupaciones.
            </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
            <div
                key={service.id}
                className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
            >
                {/* Imagen con mensaje al pasar el mouse */}
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-medium px-4">{service.message}</p>
                </div>
                </div>

                {/* Icono y título */}
                <div className="flex items-center justify-center mb-2">
                <service.icon className="text-secondary text-3xl mr-2" />
                <h2 className="text-lg font-bold text-gray-700">{service.title}</h2>
                </div>

                {/* Descripción */}
                <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
                </p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}

export default Services;

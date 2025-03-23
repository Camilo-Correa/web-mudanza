import React from 'react';
import { TfiDropboxAlt , TfiLocationPin, TfiTruck } from "react-icons/tfi";
import { IoIosAirplane } from "react-icons/io";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";

function Services() {
    return (
        <div className='p-8 xl:p-20 text-center justify-center'>
            <div>
                <h1 className='text-[40px] font-bold text-secondary'>
                    Nuestros Servicios
                </h1>
                <p className='text-gray-500 text-xl leading-[2.5rem] text-justify'>
                    En Transportes C & N ofrecemos una amplia gama de servicios de transporte
                    y mudanzas para particulares y empresas, nos adaptamos a tus necesidades 
                    en cualquier lugar.
                </p>
            </div>
            {/* Tarjetas de servicios */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='flex flex-col gap-2'>
                    <div className='relative w-full h-64'>
                        <img 
                            src='mudanza.jpg' 
                            className='w-full h-full object-cover rounded-2xl' 
                            alt="Mudanza"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 p-4 rounded-md">
                        <TfiLocationPin  className="w-6 h-6"/>
                        <h2 className="text-green-500 text-lg font-bold">Mudanzas Locales</h2>
                    </div>
                    <p className='text-gray-500 text-lg leading-[2rem] text-justify'>
                    Si necesitas trasladarte dentro de la ciudad, lo hacemos sin estrés. 
                    Nos ocupamos del desmontaje, embalaje, traslado y montaje de tus muebles, 
                    garantizando que lleguen en perfecto estado.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='relative w-full h-64'>
                        <img 
                            src='mudanza2.jpg' 
                            className='w-full h-full object-cover rounded-2xl' 
                            alt="Transporte de Muebles"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 p-4 rounded-md">
                        <TfiTruck  className="w-6 h-6"/>
                        <h2 className="text-green-500 text-lg font-bold">Mudanzas Nacionales</h2>
                    </div>
                    <p className='text-gray-500 text-lg leading-[2rem] text-justify'>
                    Mudarse a otra ciudad puede ser complicado, pero con C&N Transportes, 
                    te aseguramos un servicio profesional y seguro en todo el territorio nacional.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='relative w-full h-64'>
                        <img 
                            src='mudanza3.jpg' 
                            className='w-full h-full object-cover rounded-2xl' 
                            alt="Mudanzas"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 p-4 rounded-md">
                        <IoIosAirplane className="w-6 h-6"/>
                        <h2 className="text-green-500 text-lg font-bold">Mudanzas Internacionales</h2>
                    </div>
                    <p className='text-gray-500 text-lg leading-[2rem] text-justify'>
                    Si te mudas fuera del país, nos encargamos de toda la logística para que 
                    tus pertenencias lleguen en óptimas condiciones a su destino.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='relative w-full h-64'>
                        <img 
                            src='mudanza4.jpg' 
                            className='w-full h-full object-cover rounded-2xl' 
                            alt="Mudanzas"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 p-4 rounded-md">
                        <TfiDropboxAlt className="w-6 h-6"/>
                        <h2 className="text-green-500 text-lg font-bold">Transporte de Muebles y Enseres</h2>
                    </div>
                    <p className='text-gray-500 text-lg leading-[2rem] text-justify'>
                    ¿Necesitas trasladar un mueble o un electrodoméstico sin hacer una mudanza completa? 
                    Lo hacemos por ti de manera rápida y segura.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='relative w-full h-64'>
                        <img 
                            src='mudanza4.jpg' 
                            className='w-full h-full object-cover rounded-2xl' 
                            alt="Mudanzas"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 p-4 rounded-md">
                        <FaBuildingCircleArrowRight className="w-6 h-6"/>
                        <h2 className="text-green-500 text-lg font-bold">Vaciado de Pisos y Locales</h2>
                    </div>
                    <p className='text-gray-500 text-lg leading-[2rem] text-justify'>
                    ¿Necesitas desocupar una vivienda o local? Nos encargamos del desmontaje y 
                    retiro de mobiliario, con opción de reciclaje o donación de los objetos que ya no necesites.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;

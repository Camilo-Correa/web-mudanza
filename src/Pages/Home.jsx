import React, { useState, useEffect } from 'react';

function Home() {
    const [currentText, setCurrentText] = useState("Mudarte");
    const texts = ["Mudanzas", "Vaciados", "Embalajes", "Montajes", "Portes", "Traslados"];
    const transitionInterval = 3000; // Tiempo en milisegundos para cambiar el texto

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(prevText => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length; // Ciclar entre los textos
                return texts[nextIndex];
            });
        }, transitionInterval);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    const handleWhatsAppContact = () => {
        const mensaje = "¡Hola! Me gustaría recibir más información sobre sus servicios de Mudanzas.";
        const whatsappURL = `https://wa.me/573006656727?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, '_blank'); // Abrir WhatsApp en una nueva pestaña
    };

    return (
        <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 ">
            {/* Información */}
            <div className="md:col-span-4 flex items-center justify-center p-8 xl:p-16">
                <div className="flex flex-col p-4 gap-12">
                    <h1 className="xl:text-5xl text-4xl text-justify font-bold leading-[5rem] xl:leading-[6.5rem] text-secondary-200">
                        Necesitas{' '}
                        <span className="text-primary py-2 px-4 border-8 border-primary relative transition-all 
                        duration-500 ease-in-out inline-block">
                            {currentText}
                        </span>
                    </h1>
                    <p className="text-gray-500 text-xl leading-[2.5rem] text-justify">
                        Nos especializamos en hacer que cada mudanza sea una experiencia sin estrés. Con años de experiencia en el sector, nos hemos ganado la confianza de nuestros clientes gracias a la puntualidad, responsabilidad y atención personalizada.
                        Nuestro equipo maneja con cuidado cada objeto, asegurando que llegue en perfectas condiciones a su destino.
                    </p>
                    {/* Botón */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={handleWhatsAppContact} 
                            className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 text-xl"
                        >
                            Contáctanos
                        </button>
                    </div>
                </div>
            </div>
            {/* Imagen */}
            <div className="md:col-span-4 flex items-center justify-center relative p-8 xl:p-16">
                <img
                    src="home-caja.jpg"
                    className="w-[450px] h-[250px] md:w-[800px] md:h-[450px] object-cover xl:-mt-28"
                    alt="Camión de transporte"
                />
            </div>
            {/* Sección Por Qué Elegirnos */}
            <div className="md:col-span-8 p-8 bg-gray-100 rounded-lg flex flex-col items-center justify-center mt-8 shadow-md text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-primary mb-6">¿Por Qué Elegirnos? ✅</h1>
                <ul className="text-gray-500 text-lg leading-[2rem] list-disc list-inside space-y-4 text-left sm:text-center">
                    <li className="text-left">Compromiso con la puntualidad: Llegamos a la hora acordada y cumplimos los plazos.</li>
                    <li className="text-left">Seguridad garantizada: Cuidamos tus pertenencias como si fueran nuestras.</li>
                    <li className="text-left">Transparencia total: Sin costes ocultos ni sorpresas en el presupuesto.</li>
                    <li className="text-left">Atención personalizada: Nos adaptamos a tus necesidades y te asesoramos.</li>
                    <li className="text-left">Flota moderna: Vehículos equipados para proteger tus muebles y enseres.</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;

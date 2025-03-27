import React, { useState, useEffect } from 'react';

function Home() {
    const [currentText, setCurrentText] = useState("Mudanzas");
    const texts = ["Vaciados", "Embalajes", "Montajes", "Portes", "Traslados"];
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        "Recibimos tu solicitud",
        "Enviamos un presupuesto",
        "Coordinamos Todo",
        "Realizamos el servicio",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            // Cambiar el texto principal
            setCurrentText((prevText) => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });

            // Cambiar el paso activo
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [texts.length, steps.length]);

    const handleWhatsAppContact = () => {
        const mensaje = "¡Hola! Me gustaría recibir más información sobre sus servicios de Mudanzas.";
        const whatsappURL = `https://wa.me/573006656727?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
            {/* Información */}
            <div className="md:col-span-4 flex items-center justify-center p-8 xl:p-16">
                <div className="flex flex-col p-4 gap-8">
                    <h1 className="xl:text-5xl text-2xl text-justify font-bold leading-[5rem] xl:leading-[6.5rem] text-secondary-200">
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
                    src="principal.png"
                    className="w-[450px] h-[250px] md:w-[980px] md:h-[450px] object-cover xl:mt-18 py-5"
                    alt="Camión de transporte"
                />
            </div>
            {/* Sección Cómo trabajamos */}
            <div className="md:col-span-8 p-8 flex flex-col lg:flex-row items-center gap-8 mt-8">
                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="home-caja.jpg" 
                        alt="Proceso"
                        className="w-full max-w-[500px] rounded-lg shadow-lg object-cover"
                    />
                </div>
                {/* Paso a paso */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary mb-4">¿Cómo trabajamos? 🛠️</h2>
                    <p className="text-xl text-gray-500 mb-6">Nuestro proceso es sencillo y efectivo:</p>
                    <div className="flex flex-col space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative p-4 rounded-lg flex items-center gap-4 transition-all duration-500 ${
                                    currentStep === index 
                                        ? 'bg-primary text-white shadow-lg' 
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {/* Flecha */}
                                <div className={`absolute left-0 h-full w-4 -ml-4 ${currentStep === index ? 'bg-primary' : 'bg-gray-300'}`}>
                                    <div className="triangle"></div>
                                </div>
                                {/* Contenido */}
                                <div>
                                    <span className="font-bold text-lg">{`Paso ${index + 1}`}</span>
                                    <p>{step}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

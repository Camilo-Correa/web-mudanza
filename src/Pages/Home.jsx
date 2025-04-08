import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";

/**
 * Componente Home que muestra la página principal con información sobre los servicios de mudanza,
 * un formulario para solicitar una llamada y una sección explicativa sobre el proceso de trabajo.
 *
 * @component
 * @returns {JSX.Element} Sección principal de la página con encabezado dinámico, formulario de contacto y pasos del servicio.
 */


function Home() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("España");
    const [isSent, setIsSent] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");


    const [currentText, setCurrentText] = useState("Mudanzas");
    const texts = ["Mudanzas","Vaciados", "Embalajes", "Montajes", "Portes", "Traslados"];
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        "Solicitas tu mudanza",
        "Te enviamos un presupuesto ajustado",
        "Planificamos cada detalle",
        "Nos encargamos de la mudanza",
    ];

    const countryCodes = {
        "España": "+34",
        "Francia": "+33",
        "Portugal": "+351",
        "Italia": "+39",
        "Andorra": "+376",
        "Marruecos": "+212"
    };

    //funcion para vaidar numeros
    const isValidPhoneNumber = (number) => {
        // Elimina espacios y valida solo números (9-15 dígitos)
        const cleaned = number.replace(/\s+/g, '');
        return /^\d{9,15}$/.test(cleaned);
    };
    
    
    const countries = Object.keys(countryCodes);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [texts.length, steps.length]);

    const handleCallRequest = async () => {
        if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
            setErrorMessage("Por favor, introduce un número de teléfono válido.");
            return;
        }
    
        setErrorMessage(""); // Limpiar mensajes anteriores
    
    const templateParams = { telefono: `${countryCodes[country]} ${phoneNumber}` };
    
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HOME,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
            );
    
            setIsSent(true);
            setPhoneNumber(""); // Limpiar campo
        } catch (error) {
            console.error("Error enviando el correo:", error);
            setErrorMessage("Hubo un problema al enviar la solicitud.");
        }
    };
    

    return (
        <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
            {/* Información */}
            <div className="md:col-span-4 flex items-center justify-center p-8 xl:p-16 ">
                <div className="flex flex-col p-4 gap-8 " >
                    <div className="flex items-center w-full">
                        {/* Contenedor fijo para "Buscas" */}
                        <div className="w-2/5 flex justify-center items-center">
                            <h1 className="xl:text-5xl text-3xl font-bold text-secondary-200">Buscas</h1>
                        </div>

                        {/* Contenedor dinámico para {currentText} */}
                        <div className="w-3/5 flex justify-start items-center">
                            <h1 className="xl:text-5xl text-3xl font-bold text-secondary-200">
                                <span className="text-primary py-2 px-2 border-8 border-primary transition-all duration-500 ease-in-out inline-block">
                                    {currentText}
                                </span>
                            </h1>
                        </div>
                    </div>                        
                    <p className="text-gray-500 text-xl leading-[2.5rem] text-justify">
                    Realizamos mudanzas en España con máxima seguridad y puntualidad. 
                    Nuestro equipo especializado cuida cada detalle para que no tengas que preocuparte por nada.
                    </p>
                    {/* Botón */}
                    <div className="flex flex-col items-center md:items-start gap-4 w-full">
                        {!isSent ? (
                            <>
                                <div className="w-full flex justify-center md:justify-center">
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full md:w-auto border p-2 rounded-lg text-xl"
                                >
                                    {countries.map((c) => (
                                        <option key={c} value={c}>{c} ({countryCodes[c]})</option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Introduce tu teléfono"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full md:w-auto border p-2 rounded-lg text-xl"
                                />
                                
                                </div>

                                <div className="w-full flex justify-center md:justify-center">
                                    <button 
                                        onClick={handleCallRequest} 
                                        className="bg-primary text-white py-2 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 text-xl"
                                    >
                                        Solicita tu llamada gratuita
                                    </button>
                                    {errorMessage && (
                                    <p className="text-red-500 text-sm mt-2 text-center justify-center">{errorMessage}</p>
                                )}
                                </div>

                            </>
                        ) : (
                            <>
                                <span className="text-green-600 font-bold text-xl">Te contactaremos pronto 📞</span>
                                <div className="w-full flex justify-center md:justify-center">
                                    <button
                                        onClick={() => setIsSent(false)}
                                        className="bg-secondary-200 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105 text-lg"
                                    >
                                        Pedir otra llamada
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* Imagen */}
            <div className="md:col-span-4 flex items-center justify-center relative px-4 py-8 ">
                <div className="flex justify-center items-center w-full">
                <img
                        src="principal.png"
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain rounded-lg shadow-md"
                        alt="Camión de transporte"
                    />
                </div>
            </div>

            {/* Sección Cómo trabajamos */}
            <div className="md:col-span-8 p-8 flex flex-col lg:flex-row items-center gap-8 mt-8">
                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="home-caja.jpg" 
                        alt="Camion de la compañia"
                        className="w-full max-w-[500px] rounded-lg shadow-lg object-cover"
                    />
                </div>
                {/* Paso a paso */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary mb-4">Tu mudanza en 4 pasos 🏡</h2>
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
                                <div className={`absolute left-0 h-full w-4 -ml-4 ${currentStep === index ? 'bg-primary' : 'bg-gray-300'}`}></div>
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

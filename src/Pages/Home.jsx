import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";

function Home() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("España");
    const [isSent, setIsSent] = useState(false);

    const [currentText, setCurrentText] = useState("Mudanzas");
    const texts = ["Vaciados", "Embalajes", "Montajes", "Portes", "Traslados"];
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        "Recibimos tu solicitud",
        "Enviamos un presupuesto",
        "Coordinamos Todo",
        "Realizamos el servicio",
    ];

    const countryCodes = {
        "España": "+34",
        "Francia": "+33",
        "Portugal": "+351",
        "Italia": "+39",
        "Andorra": "+376",
        "Marruecos": "+212"
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
        const templateParams = { telefono: `${countryCodes[country]} ${phoneNumber}` };
    
        console.log("import.meta.env:", import.meta.env);
        console.log("Clave pública:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log("Template ID Home:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HOME);
    
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HOME,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Aquí estaba el error
            );
    
            setIsSent(true);
        } catch (error) {
            console.error("Error enviando el correo:", error);
        }
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
                        {!isSent ? (
                            <>
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full xl:w-auto border p-2 rounded-lg text-xl"
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
                                    className="w-full xl:w-auto border p-2 rounded-lg text-xl"
                                />
                                <button 
                                    onClick={handleCallRequest} 
                                    className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 text-xl"
                                >
                                    Te Llamamos
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="text-green-600 font-bold text-xl">Te contactaremos pronto 📞</span>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="w-full xl:w-auto bg-secondary-200 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105 text-lg"
                                >
                                    Pedir otra llamada
                                </button>
                            </>
                        )}
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

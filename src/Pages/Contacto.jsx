import React from 'react';

/**
 * Componente Contacto que muestra la información de contacto de la empresa junto con un mapa de ubicación.
 *
 * @component
 * @returns {JSX.Element} Sección con los medios de contacto y la localización de la empresa en un mapa.
 */

function Contacto() {
    return (
        <section className="min-h-[90vh] flex flex-col items-center bg-gray-50 p-8 xl:p-16">
            {/* Mapa */}
            <div className="w-full h-[50vh] rounded-lg shadow-md overflow-hidden mb-8">
                <iframe
                    src="https://www.google.com/maps?q=39.1531524,-0.4321789&z=16&output=embed"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localización"
                ></iframe>
            </div>

            {/* Información de contacto */}
            <div className="text-center space-y-6">
                <h1 className="text-2xl md:text-4xl font-bold text-secondary-200">¡Tu mudanza en Asturias y toda España empieza aquí! 📦🚛</h1>
                <p className="text-lg text-gray-500">
                    Estamos listos para ayudarte con tu mudanza en Asturias y en cualquier punto de España. Contáctanos y te asesoramos sin compromiso.
                </p>

                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        📱 <span className="font-bold text-primary">+34 613 816 121</span>
                    </p>
                    <p>
                        📧 <a
                            href="mailto:contacto@transportescn-mudanzas.es"
                            className="text-primary font-bold hover:underline"
                        >
                            contacto@transportescn-mudanzas.es
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contacto;

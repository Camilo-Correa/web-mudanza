import React from 'react';

/**
 * Componente Consejos que muestra una lista de recomendaciones para realizar una mudanza eficiente.
 *
 * @component
 * @returns {JSX.Element} Sección con consejos útiles para una mudanza organizada.
 */


function Consejos() {
    const tips = [
        {
            title: "Organiza con tiempo 🕒",
            description:
                "Si te mudas en Asturias, intenta planificar con al menos dos semanas de antelación. Haz una lista de tareas para evitar imprevistos.",
            image: "consejos-tiempo.jpg",
        },
        {
            title: "Etiqueta las cajas 🏷️",
            description:
                "Pon etiquetas en cada caja indicando su contenido y la habitación de destino. Esto te ahorrará tiempo al llegar a tu nuevo hogar.",
            image: "consejos-etiqueta.jpg",
        },
        {
            title: "Protege los objetos frágiles 🥂",
            description:
                "Usa papel burbuja o mantas para proteger cristalería y vajilla. En Asturias, el clima húmedo puede afectar algunos materiales, así que protégelos bien.",
            image: "consejos-fragil.jpg",
        },
        {
            title: "Deshazte de lo innecesario ♻️",
            description:
                "Haz una limpieza antes de mudarte: dona, recicla o vende lo que no necesitas. Menos cosas, menos esfuerzo.",
            image: "consejos-basura.jpg",
        },
        {
            title: "Ten un kit de primeros días 🎒",
            description:
                "Prepara un kit con lo esencial para los primeros días: documentos, artículos de aseo y ropa cómoda. Así evitarás buscar entre las cajas.",
            image: "consejos-kit.jpg",
        },
        {
            title: "Desarma lo que puedas 🔧",
            description:
                "Si tienes muebles grandes, desmóntalos para facilitar el traslado. En Asturias, muchas viviendas tienen accesos estrechos, así que esto puede ser clave.",
            image: "consejo-desarmar.jpg",
        }
    ];

    return (
        <section className="min-h-[90vh] bg-gray-50 p-8 xl:p-16">
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-4xl font-bold text-secondary-200">
                Consejos para una Mudanza sin Estrés en Asturias o Toda España✨
                </h1>
                <p className="text-lg text-gray-500 mt-4">
                Descubre los mejores consejos para que tu mudanza en Asturias sea fácil y organizada, sin preocupaciones innecesarias.
                </p>
            </div>

            {/* Lista de consejos */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Imagen */}
                        <img
                            src={tip.image}
                            alt={tip.title}
                            className="w-full h-[200px] object-cover"
                        />
                        {/* Contenido */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-primary mb-4">{tip.title}</h2>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Consejos;

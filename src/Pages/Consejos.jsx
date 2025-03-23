import React from 'react';

function Consejos() {
    const tips = [
        {
            title: "Organiza con tiempo 🕒",
            description:
                "Planifica tu mudanza al menos con dos semanas de anticipación. Haz una lista de tareas y prioriza lo que necesitas empacar primero.",
            image: "consejos-tiempo.jpg",
        },
        {
            title: "Etiqueta las cajas 🏷️",
            description:
                "Escribe claramente en cada caja lo que contiene y a qué habitación pertenece. Esto hará que desempacar sea mucho más fácil.",
            image: "consejos-etiqueta.jpg",
        },
        {
            title: "Protege los objetos frágiles 🥂",
            description:
                "Envuelve los artículos frágiles como platos y copas con papel burbuja o toallas para evitar daños durante el traslado.",
            image: "consejos-fragil.jpg",
        },
        {
            title: "Deshazte de lo innecesario ♻️",
            description:
                "Aprovecha la mudanza para donar o desechar cosas que ya no usas. Menos cosas significan menos estrés.",
            image: "consejos-basura.jpg",
        },
        {
            title: "Ten un kit de primeros días 🎒",
            description:
                "Empaca una caja o maleta con todo lo que necesitas para los primeros días: ropa, artículos de aseo y documentos importantes.",
            image: "consejos-kit.jpg",
        },
        {
            title: "Desarma lo que puedas 🔧",
            description:
                "Si tienes muebles grandes como camas o estanterías, desármalos para facilitar el traslado. Si no sabes cómo hacerlo, no te preocupes, nuestros profesionales pueden encargarse de ello.",
            image: "consejo-desarmar.jpg",
        }
    ];

    return (
        <section className="min-h-[90vh] bg-gray-50 p-8 xl:p-16">
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-4xl font-bold text-secondary-200">
                    Consejos para una Mudanza Perfecta 🚚✨
                </h1>
                <p className="text-lg text-gray-500 mt-4">
                    Aquí encontrarás los mejores tips para que tu mudanza sea rápida, sencilla y sin contratiempos.
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

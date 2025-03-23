import React from 'react';

function Contacto() {
    return (
        <section className="min-h-[90vh] flex flex-col items-center bg-gray-50 p-8 xl:p-16">
            {/* Mapa */}
            <div className="w-full h-[50vh] rounded-lg shadow-md overflow-hidden mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50355.296564587715!2d-6.071263417840838!3d43.3618382422471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36e52f78ef2f79%3A0x8e6171d9e7d47e79!2sAsturias%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sco!4v1615478125109!5m2!1ses-419!2sco"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localización"
                ></iframe>
            </div>

            {/* Información de contacto */}
            <div className="text-center space-y-6">
                <h1 className="text-2xl md:text-4xl font-bold text-secondary-200">¡Contáctanos! 📞</h1>
                <p className="text-lg text-gray-500">
                    Siempre estamos aquí para ayudarte. Puedes ponerte en contacto con nosotros por los siguientes medios:
                </p>

                <div className="space-y-4 text-lg text-gray-600">
                    <p>
                        📧 <span className="font-bold text-primary">correo@empresa.com</span>
                    </p>
                    <p>
                        ☎️ <span className="font-bold text-primary">+34 123 456 789</span>
                    </p>
                    <p>
                        📱 <span className="font-bold text-primary">+34 987 654 321</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contacto;

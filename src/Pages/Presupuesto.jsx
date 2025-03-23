import React, { useState } from 'react';

function Presupuesto() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        prefijoTelefono: '+34',
        origenEspana: true,
        paisOrigen: 'España',
        direccionOrigen: '',
        direccionDestino: '',
        mismoPais: true,
        paisDestino: '',
        objetosGrandes: '',
        serviciosAdicionales: '',
    });

    const [formEnviado, setFormEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mensaje = `
Nombre: ${formData.nombre}
Correo: ${formData.correo}
Teléfono: ${formData.prefijoTelefono} ${formData.telefono}
Origen desde España: ${formData.origenEspana ? 'Sí' : 'No'}
${!formData.origenEspana ? `País de origen: ${formData.paisOrigen}` : ''}
Dirección de origen: ${formData.direccionOrigen}
Dirección de destino: ${formData.direccionDestino}
Destino en el mismo país: ${formData.mismoPais ? 'Sí' : 'No'}
${!formData.mismoPais ? `País de destino: ${formData.paisDestino}` : ''}
Objetos grandes: ${formData.objetosGrandes}
Servicios adicionales: ${formData.serviciosAdicionales}`;

        const whatsappURL = `https://wa.me/34612345678?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappURL, '_blank');

        // Limpiar el formulario
        setFormData({
            nombre: '',
            correo: '',
            telefono: '',
            prefijoTelefono: '+34',
            origenEspana: true,
            paisOrigen: 'España',
            direccionOrigen: '',
            direccionDestino: '',
            mismoPais: true,
            paisDestino: '',
            objetosGrandes: '',
            serviciosAdicionales: '',
        });

        // Mostrar mensaje de éxito
        setFormEnviado(true);
        setTimeout(() => setFormEnviado(false), 5000); // Ocultar el mensaje después de 5 segundos
    };

    const handleWhatsAppChat = () => {
        const mensajePredeterminado = "¡Hola! Me gustaría obtener información sobre los servicios de mudanza.";
        const whatsappURL = `https://wa.me/573006656727?text=${encodeURIComponent(mensajePredeterminado)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="p-8 xl:p-20 text-center justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-secondary mb-6">Solicita tu Presupuesto</h1>
                {formEnviado && (
                    <div className="text-green-600 font-bold mb-4">
                        ¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.
                    </div>
                )}
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Información básica */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-lg font-bold mb-2 text-gray-700">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg text-gray-700"
                                placeholder="Ingresa tu nombre completo"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-bold mb-2 text-gray-700">Correo</label>
                            <input
                                type="email"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg text-gray-700"
                                placeholder="Ingresa tu correo electrónico"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-bold mb-2 text-gray-700">Teléfono</label>
                            <div className="flex">
                                <select
                                    name="prefijoTelefono"
                                    value={formData.prefijoTelefono}
                                    onChange={handleChange}
                                    className="p-3 border rounded-l-lg text-gray-700 bg-gray-100"
                                >
                                    <option value="+34">+34 España</option>
                                    <option value="+33">+33 Francia</option>
                                    <option value="+49">+49 Alemania</option>
                                    <option value="+44">+44 Reino Unido</option>
                                </select>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-r-lg text-gray-700"
                                    placeholder="Ej. 600123456"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Información de mudanza */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-lg font-bold mb-2 text-gray-700">Origen desde España</label>
                            <input
                                type="checkbox"
                                name="origenEspana"
                                checked={formData.origenEspana}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span>{formData.origenEspana ? 'Sí' : 'No'}</span>
                        </div>
                        {!formData.origenEspana && (
                            <div>
                                <label className="block text-lg font-bold mb-2 text-gray-700">País de origen</label>
                                <input
                                    type="text"
                                    name="paisOrigen"
                                    value={formData.paisOrigen}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg text-gray-700"
                                    placeholder="Ej. Francia"
                                    required
                                />
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-bold mb-2 text-gray-700">Dirección de origen</label>
                                <input
                                    type="text"
                                    name="direccionOrigen"
                                    value={formData.direccionOrigen}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg text-gray-700"
                                    placeholder="Ej. Calle 123, Madrid"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-2 text-gray-700">Dirección de destino</label>
                                <input
                                    type="text"
                                    name="direccionDestino"
                                    value={formData.direccionDestino}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg text-gray-700"
                                    placeholder="Ej. Calle 456, Barcelona"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-lg font-bold mb-2 text-gray-700">Destino en el mismo país</label>
                            <input
                                type="checkbox"
                                name="mismoPais"
                                checked={formData.mismoPais}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span>{formData.mismoPais ? 'Sí' : 'No'}</span>
                        </div>
                        {!formData.mismoPais && (
                            <div>
                                <label className="block text-lg font-bold mb-2 text-gray-700">País de destino</label>
                                <input
                                    type="text"
                                    name="paisDestino"
                                    value={formData.paisDestino}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg text-gray-700"
                                    placeholder="Ej. Francia"
                                    required
                                />
                            </div>
                        )}
                    </div>

                    {/* Detalles adicionales */}
                    <div>
                        <label className="block text-lg font-bold mb-2 text-gray-700">Objetos grandes</label>
                        <textarea
                            name="objetosGrandes"
                            value={formData.objetosGrandes}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg text-gray-700"
                            placeholder="Ej. Sofá, nevera, armario..."
                            rows="4"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2 text-gray-700">Servicios adicionales</label>
                        <input
                            type="text"
                            name="serviciosAdicionales"
                            value={formData.serviciosAdicionales}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg text-gray-700"
                            placeholder="Ej. Embalaje, montaje..."
                        />
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 align-center justify-center">
                        <button
                            type="submit"
                            className="w-fulll xl:w-auto bg-primary text-white py-2 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 text-xl"
                        >
                            Enviar información
                        </button>
                        <button
                            type="button"
                            className="w-fulll xl:w-auto bg-blue-800 text-white py-2 px-8 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 text-xl"
                            onClick={handleWhatsAppChat}
                        >
                            Contactar directamente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Presupuesto;

import React, { useState } from 'react';
import emailjs from "emailjs-com";

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

      const templateParams = {
          name: formData.nombre || "No especificado",
          email: formData.correo || "No especificado",
          telefono: `${formData.prefijoTelefono} ${formData.telefono || "No especificado"}`,
          direccionOrigen: formData.direccionOrigen || "No especificado",
          direccionDestino: formData.direccionDestino || "No especificado",
          mismoPais: formData.mismoPais ? "Sí" : "No",
          paisDestino: formData.mismoPais ? "No aplica" : formData.paisDestino || "No especificado",
          objetosGrandes: formData.objetosGrandes || "No especificado",
          serviciosAdicionales: formData.serviciosAdicionales || "No especificado",
      };

      emailjs.send(
        process.env.VITE_EMAILJS_SERVICE_ID,
        process.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
          console.log("Correo enviado con éxito", response);
          setFormEnviado(true);
      })
      .catch((error) => {
          console.error("Error enviando el correo", error);
      });
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
};

return (
  <div className="flex justify-center items-center min-h-screen bg-white p-4 sm:p-8">
    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 text-center">
        Solicita tu Presupuesto
      </h1>

      {formEnviado ? (
        <div className="text-green-600 font-bold mb-4 text-center">
          ¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.
          <button 
            onClick={() => setFormEnviado(false)}
            className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105 mt-4"
          >
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Información básica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Correo:</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Teléfono:</label>
            <div className="flex">
              <select
                name="prefijoTelefono"
                value={formData.prefijoTelefono}
                onChange={handleChange}
                className="p-2 border rounded-l-md bg-gray-100"
              >
                <option value="+34">+34</option>
                <option value="+1">+1</option>
                <option value="+57">+57</option>
              </select>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Número de teléfono"
                className="flex-1 p-2 border rounded-r-md"
                required
              />
            </div>
          </div>
          {/* País de origen y destino */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block font-medium mb-1">¿El origen está en España?</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="origenEspana"
                  checked={formData.origenEspana}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Sí</span>
              </div>
            </div>
            {!formData.origenEspana && (
              <div>
                <label className="block font-medium mb-1">País de origen:</label>
                <input
                  type="text"
                  name="paisOrigen"
                  value={formData.paisOrigen}
                  onChange={handleChange}
                  placeholder="País de origen"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}
            <div>
              <label className="block font-medium mb-1">¿El destino está en el mismo país?</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="mismoPais"
                  checked={formData.mismoPais}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Sí</span>
              </div>
            </div>
            {!formData.mismoPais && (
              <div>
                <label className="block font-medium mb-1">País de destino:</label>
                <input
                  type="text"
                  name="paisDestino"
                  value={formData.paisDestino}
                  onChange={handleChange}
                  placeholder="País de destino"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}
          </div>
          {/* Dirección de origen y destino */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Dirección de origen:</label>
              <input
                type="text"
                name="direccionOrigen"
                value={formData.direccionOrigen}
                onChange={handleChange}
                placeholder="Dirección completa de origen"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Dirección de destino:</label>
              <input
                type="text"
                name="direccionDestino"
                value={formData.direccionDestino}
                onChange={handleChange}
                placeholder="Dirección completa de destino"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          {/* Detalles adicionales */}
          <div>
            <label className="block font-medium mb-1">Objetos grandes (opcional):</label>
            <textarea
              name="objetosGrandes"
              value={formData.objetosGrandes}
              onChange={handleChange}
              placeholder="Describe los objetos grandes que necesitas mover (ej.: sofás, camas, etc.)"
              className="w-full h-24 p-2 border rounded-md"
            ></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Servicios adicionales (opcional):</label>
            <textarea
              name="serviciosAdicionales"
              value={formData.serviciosAdicionales}
              onChange={handleChange}
              placeholder="Ejemplo: embalaje, montaje, etc."
              className="w-full h-24 p-2 border rounded-md"
            ></textarea>
          </div>
          {/* Botón de enviar */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105"
            >
              Enviar información
            </button>
          </div>
        </form>
      )}
    </div>
  </div>
);

      
}

export default Presupuesto;

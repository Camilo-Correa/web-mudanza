import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Presupuesto from "./Pages/Presupuesto";
import Contacto from "./Pages/Contacto";
import Consejos from "./Pages/Consejos";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/consejos" element={<Consejos />} />
      </Routes>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-8 right-8">
        <WhatsAppButton
          phone="34613816121 "
          message="Hola, quisiera obtener más información sobre sus servicios."
          label="Contáctanos"
        />
      </div>
    </Router>
  );
}

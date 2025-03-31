import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Importación de componentes con Lazy Loading
const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Presupuesto = lazy(() => import("./Pages/Presupuesto"));
const Contacto = lazy(() => import("./Pages/Contacto"));
const Consejos = lazy(() => import("./Pages/Consejos"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="text-center py-10">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servicios-mudanzas" element={<Services />} />
          <Route path="/solicitar-presupuesto" element={<Presupuesto />} />
          <Route path="/contacto-transportes" element={<Contacto />} />
          <Route path="/consejos-mudanzas" element={<Consejos />} />
        </Routes>
      </Suspense>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-8 right-8">
        <WhatsAppButton
          phone="34613816121"
          message="Hola, quisiera obtener más información sobre sus servicios."
          label="Contáctanos"
        />
      </div>
    </Router>
  );
}

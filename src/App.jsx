import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Services from './Pages/Services';
import Presupuesto from './Pages/Presupuesto';
import Contacto from './Pages/Contacto';
import Consejos from './Pages/Consejos';


export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/presupuesto' element={<Presupuesto/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/consejos' element={<Consejos/>}></Route>
      </Routes>
      <Footer/>
    </Router>

  );
}

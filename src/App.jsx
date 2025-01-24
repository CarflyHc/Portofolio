import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Acceuil"
import { Routes,Route } from "react-router-dom"
import Services from "./pages/Services"
import Contact from "./pages/contact"
import Navigation from "./component/navigation"
import Portofolio from "./pages/Portofolio"
import LegalNotice from "./pages/Mentions-legales";
import { HelmetProvider } from "react-helmet-async";

function App()  {
  return ( 
      <>
        <HelmetProvider>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path ="/Contact" element={<Contact />}/> 
            <Route path ="/Services" element={<Services />}/>
            <Route path ="/Portofolio" element={<Portofolio />}/>
            <Route path ="/Mentions-Legales" element={<LegalNotice />}/>
          </Routes>
        </HelmetProvider>
      </>
  );
}

export default App;

import Home from "./pages/Acceuil"
import { Routes,Route } from "react-router-dom"
import Services from "./pages/Services"
import CAV from "./pages/mentions-legales"
import Contact from "./pages/contact"
import Navigation from "./component/navigation"
import Portofolio from "./pages/Portofolio"

function App()  {
  return ( 
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path ="/Contact" element={<Contact />}/> 
          <Route path ="/Services" element={<Services />}/>
          <Route path ="/Portofolio" element={<Portofolio />}/>
          <Route path ="/Mentions-Legales" element={<CAV />}/>
        </Routes>
      </div>
  );
}

export default App;

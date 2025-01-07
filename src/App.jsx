import Navigation from "./component/nav"
import Home from "./pages/Acceuil"
import { Routes,Route } from "react-router-dom"
import Services from "./pages/Services"
import CAV from "./pages/mentions-legales"
import Realisations from "./pages/Realisations"
import Contact from "./pages/contact"

function App()  {
  return (
      <>
        <Navigation/>
                <Routes>
                  <Route path="/" element={<Navigation/>}/>
                  <Route index element={<Home/>}/>
                  <Route path ="Contact" element={<Contact/>}/> 
                  <Route path ="Services" element={<Services/>}/>
                  <Route path ="Realisations" element={<Realisations/>}/>
                  <Route path ="Mentions-Legales" element={<CAV/>}/>
                </Routes>
                      
      </>
  )
}

export default App

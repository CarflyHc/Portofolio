import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"


const Navigation = () => {
    return (
        <header>
          <Nav variant="underline" className="navbar navbar-dark bg-dark navbar-expand-md justify-content-between px-4">
              <span className="navbar-brand p-3 text-uppercase">John Doe</span>
              <button 
                className="navbar-toggler rounded collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
              </button>
              <div 
                className="navbar-collapse collapse justify-content-end" 
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <Nav.Item as ="li" className="nav-item">
                    <NavLink to="/" className="nav-link link-light text-uppercase">
                      Accueil
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item as ="li" className="nav-item">
                    <NavLink  to="/Services" className="nav-link link-light text-uppercase">Services</NavLink>
                  </Nav.Item>
                  <Nav.Item as ="li" className="nav-item">
                    <NavLink to="/Portofolio" className="nav-link link-light text-uppercase">Portofolio</NavLink>
                  </Nav.Item>
                  <Nav.Item as ="li" className="nav-item">
                    <NavLink to="/Contact" className="nav-link link-light text-uppercase">Contact</NavLink>
                  </Nav.Item>
                  <Nav.Item as ="li" className="nav-item">
                    <NavLink to="/Mentions-Legales" className="nav-link link-light text-uppercase">Mentions Légales</NavLink>
                  </Nav.Item>
                </ul>
              </div>
          </Nav>
        </header>
    )
}
export default Navigation
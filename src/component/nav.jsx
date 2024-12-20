import { Link, Outlet } from "react-router-dom"

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
          <div>
            <span className="navbar-brand p-3">John Doe</span>
          </div>
          <ul className="navbar nav">
            <li className="navbar-item">
              <Link to="/" className="nav-link active link-light">Acceuil</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Services" className="nav-link active link-light">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Realisations" className="nav-link active link-light">Portofolio</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Contact" className="nav-link active link-light">Contact</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Mentions-Legales" className="nav-link active link-light">Mentions Legales</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </>
    )
}
export default Nav
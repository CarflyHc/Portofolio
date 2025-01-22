/* eslint-disable react/no-unescaped-entities */
import "bootstrap-icons/font/bootstrap-icons.css"
import "../assets/footer.css"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"


const Foot = () => {
    return (
        <>
            <footer className="bg-black px-4 py-4">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                    <section className="col-12 col-md-4 mb-4 mb-md-0">
                        <article className="d-flex flex-column">
                            <h4 className="text-white">John Doe</h4>
                            <address className="text-white d-flex flex-column">
                                <span>40 rue Laure Diebold</span>
                                <span>69009 Lyon, France</span>
                                <a className="text-white text-decoration-none" href="tel:0102030405">
                                10 20 30 40 50
                                </a>
                                <a className="text-white text-decoration-none" href="mailto:johndoe@gmail.com">
                                john.doe@gmail.com
                                </a>
                            </address>
                        </article>
                        <article>
                        <a className="text-secondary me-2 hoverSocial" href="https://github.com/CarflyHc" rel="nofollow" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>
                        <a className="text-secondary me-2 hoverSocial" href="https://x.com/?lang=fr&mx=2" rel="nofollow" target="_blank">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a className="text-secondary me-2 hoverSocial" href="https://www.linkedin.com/in/boris-lux-00a330a1/" rel="nofollow" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        </article>
                    </section>
                    <section className="col-12 col-md-4 mb-4 mb-md-0">
                        <article>
                            <h4 className="text-white">Liens utiles</h4>
                            <ul className="navbar-nav" id="menu">
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/" className="nav-link text-white p-0 bold">Accueil</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Services" className="nav-link link-light p-0 bold">Services</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">Portofolio</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Contact" className="nav-link link-light p-0 bold">Me contacter</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Mentions-Legales" className="nav-link link-light p-0 bold">Mentions légales</NavLink>
                                </Nav.Item>
                            </ul>
                        </article>
                    </section>
                    <section className="col-12 col-md-4">
                        <article>
                            <h4 className="text-white">Mes dernières réalisations</h4>
                            <ul className="navbar-nav">
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">Fresh Food</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">Restaurant Akira</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">Espace bien-être</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">SEO</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">Création d'une API</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item">
                                <NavLink to="/Portofolio" className="nav-link link-light p-0 bold">Maquette d'un site</NavLink>
                                </Nav.Item>
                            </ul>
                        </article>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Foot
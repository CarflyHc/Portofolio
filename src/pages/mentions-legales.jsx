import { Accordion } from "react-bootstrap"
import Adress from "../component/adress.jsx"
import Foot from "../component/footer.jsx"
import { Helmet } from "react-helmet-async"

const LegalNotice = () => {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <section className="my-5 mx-2">
                <article className="d-flex flex-column align-items-center mx-2 text-center">
                    <h1 className="fw-bold">Mentions légales</h1>
                    <hr className="border border-primary border-3 opacity-75 w-25" />
                </article>
            </section>
            <Accordion className="container mb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Editeur du site
                    </Accordion.Header>
                    <Accordion.Body>
                        <Adress/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Hébergeur
                    </Accordion.Header>
                    <Accordion.Body>
                        <address className="d-flex flex-column">
                            <h2 className="fw-bold">alwaysdata</h2>
                            <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
                            <span className="mt-3">
                                <i className="bi bi-globe pe-2"></i>
                                <a href="https://www.alwaysdata.com/fr/">www.alwaysdata.com </a>
                            </span>
                        </address>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Crédits
                    </Accordion.Header>
                    <Accordion.Body>
                        <h2 className="fw-bold">Crédits</h2>
                        <p className="text-justify">Ce site a été réalisé par John Doe, étudiant au 
                            <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gclid=Cj0KCQiA7se8BhCAARIsAKnF3rwz-FqxD6UGOOjPGgKAbm8vfYlxxvrerNaJPweHVADFhRe-W4xPyoMaAquiEALw_wcB" target="_blank"> Centre Européen de formation</a>.
                        </p>
                        <p className="fst-italic text-justify">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site
                            <a href="https://pixabay.com/fr/" target="_blank"> Pixabay</a>
                        </p>
                        <p className="fst-italic text-justify">Le flavicon de ce site a été fournie par
                            <a href="https://www.flaticon.com/fr/" target="_blank"> John Doe Icons erstallt von Freepik - Flaticon</a>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Foot/>
        </>
    )
}
export default LegalNotice
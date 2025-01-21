/* eslint-disable react/no-unescaped-entities */

import { Card, Col, Row } from "react-bootstrap"
import "../assets/services.css"
import Foot from "../component/footer"

const Services = () => {
    return (
        <>
        <picture>
            <img className="img-fluid w-100 vh-50" src="../../public/banner-Copie.jpg" alt="Bannière design bleu et blanche" />
        </picture>
        <section className="container my-5">
            <article className="d-flex flex-column align-items-center">
                <h1>Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </article>
            <hr className=" w-50 mx-auto border border-primary border-3 opacity-75" />  
        </section>
        <section className="container-fluid d-flex justify-content-center mb-4">
            <Row className="row g-3 w-75">
                <Col md={4} className="mx-auto">
                    <Card className="hoverCard mb-md-3 h-100" >
                        <Card.Body className="mx-2 d-flex flex-column align-items-center">
                                <i className="bi bi-brush text-primary fs-2 my-4"></i>
                            <Card.Title className="fw-bold fs-3">
                                UX Design
                            </Card.Title>
                            <Card.Text className="text-center">
                                L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendere l'expérience utilisateur la plus fluide et agréable possible.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="hoverCard mb-md-3 h-100" >
                        <Card.Body className="mx-2 d-flex flex-column align-items-center">
                                <i className="bi bi-code-slash text-primary fs-2 my-4"></i>
                            <Card.Title className="fw-bold fs-3 text-center">
                                Développement web
                            </Card.Title>
                            <Card.Text className="text-center text-wrap w-100">
                                Le développement de sites web consiste ç créer des sites internet en utilisant des langages de programmationn (HTML,CSS,Javascript,PHP,etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="hoverCard mb-5 mb-md-3 h-100" >
                        <Card.Body className="mx-2 d-flex flex-column align-items-center">
                                <i className="bi bi-search text-primary fs-2 my-4"></i>
                            <Card.Title className="fw-bold fs-3">
                                Référencement
                                </Card.Title>
                            <Card.Text className="text-center">
                                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google,Bing,Yahoo,etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
        <Foot/>
        </>
    )
}
export default Services
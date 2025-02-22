/* eslint-disable react/no-unescaped-entities */

import { Button, Col, Form, Row } from "react-bootstrap"
import Foot from "../component/footer"
import Adress from "../component/adress"

const AdressMap =()=> {
    return(
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2543020379735!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1737550183706!5m2!1sfr!2sfr" 
            height="450" 
            style={{border:0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-2 rounded w-100"
            title="Google Maps- Localisation"
        />
    )
}

const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulaire soumis !");
};

const Contact = () => {
    return(
        <>
        <main>
            <section className="my-5 mx-2">
                <article className="d-flex flex-column align-items-center mx-2 text-center">
                    <h1 className="fw-bold">Contact</h1>
                    <p className="mb-0">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <hr className="border border-primary border-3 opacity-75 w-25" />
                </article>
            </section>
            <Row className="container shadowBottomSm shadowBottomMd mb-4 mx-auto">
                <Col md={6}>
                    <article className="ms-2">
                        <h2 className="fw-bold">Formulaire de contact</h2>
                        <hr className="border border-primary border-3 opacity-75" />
                    </article>
                    <article className="mt-5 ms-2">
                        <Form onSubmit={handleSubmit}>
                            <Form.Control 
                                type="text" 
                                placeholder="Votre nom" 
                                required
                                className="mb-2"
                            />
                            <Form.Control 
                                type="email" 
                                placeholder="Votre adresse email" 
                                required
                                className="mb-2"
                            />
                            <Form.Control 
                                type="tel" 
                                placeholder="Votre numéro de téléphone" 
                                required
                                className="mb-2"
                            />
                            <Form.Control 
                                type="text" 
                                placeholder="Sujet" 
                                required
                                className="mb-2"
                            />
                            <Form.Control 
                                as="textarea" 
                                rows={12} 
                                placeholder="Votre message" 
                                required
                                className="mb-2"
                            />
                            <div className="text-center mt-3">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mb-3"
                                >
                                    Envoyer
                                </Button>
                            </div>
                        </Form>
                    </article>
                </Col>
                <Col md={6}>
                    <div className="mb-4 ">
                        <article className="mx-2">
                            <h2 className="fw-bold">Mes coordonées</h2>
                            <hr className="border border-primary border-3 opacity-75" />
                        </article>
                        <Adress/>
                        <AdressMap/>
                    </div>
                </Col>   
            </Row>
        </main>
            <Foot/>
        </>
    )
}
export default Contact
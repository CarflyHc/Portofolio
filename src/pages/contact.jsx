/* eslint-disable react/no-unescaped-entities */

import { Button, Form } from "react-bootstrap"
import Foot from "../component/footer"

const Contact = () => {

const AdressMap =()=> {
    return(
        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2543020379735!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1737550183706!5m2!1sfr!2sfr" 
                        width="auto" 
                        height="450" 
                        style={{border:0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="my-4 rounded"
                    />
    )
}

    return(
        <>
        <section className="container my-4">
            <article className="d-flex flex-column align-items-center mx-2 text-center">
                <h1 className="fw-bold">Contact</h1>
                <p className="text-justify mb-0">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <hr className="border border-primary border-3 opacity-75 w-25" />
            </article>
            <article className="mt-5 mx-2">
                <h2 className="fw-bold">Formulaire de contact</h2>
                <hr className="border border-primary border-3 opacity-75" />
            </article>
            <article className="mt-5 mx-2">
                <Form>
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
                        >
                            Envoyer
                        </Button>
                    </div>
                </Form>
            </article>
        </section>
        <section className="container mb-4 shadowBottom">
            <article className="mx-2">
                <h2 className="fw-bold">Mes coordonées</h2>
                <hr className="border border-primary border-3 opacity-75" />
            </article>
            <article className="mx-3">
                <h3 className="fs-4">John Doe</h3>
                <address className="d-flex flex-column mb-4">
                    <span> 
                        <i className="bi bi-map"></i> 40 rue Laure Diebold
                    </span>
                    <span>
                        <i className="bi bi-geo-alt"></i> 69009 Lyon, France
                    </span>
                    <span>
                        <i className="bi bi-phone"></i> 10 20 30 40 50
                    </span>
                    <span>
                        <i className="bi bi-envelope-at"></i> john.doe@gmail.com
                    </span>
                    <AdressMap/>
                </address>
            </article>
        </section>
        <Foot/>
        </>
    )
}
export default Contact
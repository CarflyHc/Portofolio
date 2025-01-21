/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Col, Row } from "react-bootstrap"
import Foot from "../component/footer"
import "../assets/portofolio.css"

const Portofolio = () => {
    return (
        <>
            <picture>
                <img 
                    className="img-fluid w-100 vh-50" 
                    src="../../public/banner-Copie.jpg" 
                    alt="Bannière design bleu et blanche" 
                />
            </picture>
            <section className="container my-5">
                <article className="d-flex flex-column align-items-center">
                    <h1 className="fw-bold">Portofolio </h1>
                    <p className="fs-5">Voici quelques-unes de mes réalisations.</p>
                </article>
                 <hr className=" w-50 mx-auto border border-primary border-3 opacity-75" />  
            </section>
            <section className="container">
                <Row className="g-4">
                    <Col 
                        md={4}
                        className=""
                    >
                        <Card className="mb-3 text-center">
                            <Card.Img 
                                className="img-fluid" 
                                src="../../public/portofolio/fresh-food.jpg" 
                                alt="Légumes variés se trouvant dans un panier sur une table" 
                            />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="fw-bold fs-2">
                                    Fresh Food
                                </Card.Title>
                                <Card.Text className="fs-6 ">
                                    Site de vente de produits frais en ligne
                                </Card.Text>
                                <Button 
                                    variant="primary"
                                >
                                    Voir le site
                                </Button>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column align-items-center">
                                <Card.Text className="opacity-75">
                                    Site réalisé avec PHP et MySQL
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-3 text-center">
                            <Card.Img 
                                className="img-fluid" 
                                src="../../public/portofolio/restaurant-japonais.jpg" 
                                alt="Différent sushis sont présentés" 
                            />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="fs-2 fw-bold text-nowrap">
                                    Restaurant Akira
                                </Card.Title>
                                <Card.Text>
                                    Site de vente de produits frais en ligne
                                </Card.Text>
                                <Button 
                                    variant="primary"
                                >
                                    Voir le site
                                </Button>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column align-items-center">
                                <Card.Text className="opacity-75">
                                    Site réalisé avec WordPress
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-3 text-center">
                            <Card.Img 
                                className="img-fluid" 
                                src="../../public/portofolio/espace-bien-etre.jpg" 
                                alt="Un visage de Boudha avec une fleur rose, et quatre pierres plate posées les une sur les autres" 
                            />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="fs-2 fw-bold">
                                    Fresh Food
                                </Card.Title>
                                <Card.Text>
                                    Site de vente de produits frais en ligne
                                </Card.Text>
                                <Button variant="primary">
                                    Voir le site
                                </Button>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column align-items-center">
                                <Card.Text className="opacity-75">
                                    Site réalisé avec LARAVEL
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="mb-3 text-center">
                            <Card.Img 
                                className="img-fluid" 
                                src="../../public/portofolio/seo.jpg" 
                                alt="Image indiquant le SEO" 
                            />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="fs-2 fw-bold">
                                    SEO
                                </Card.Title>
                                <Card.Text>
                                    Amélioration du référencement d'un site e-commerce
                                </Card.Text>
                                <Button variant="primary">
                                    Voir le site
                                </Button>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column align-items-center">
                                <Card.Text className="opacity-75">
                                    Utilisation des outils SEO
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-3 text-center">
                            <Card.Img 
                                className="img-fluid" 
                                src="../../public/portofolio/coder.jpg" 
                                alt="Exemple de ligne de code" 
                            />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="fs-2 fw-bold text-nowrap">
                                    Création d'une API
                                </Card.Title>
                                <Card.Text>
                                    Création d'une API RESTFULL publique
                                </Card.Text>
                                <Button variant="primary">
                                    Voir le site
                                </Button>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column align-items-center">
                                <Card.Text className="opacity-75">
                                    PHP - SYMFONY
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-5 text-center">
                            <Card.Img 
                                className="img-fluid" 
                                src="../../public/portofolio/screens.jpg" 
                                alt="Un bureau avec un ordinateur portable, une tablette et un imac" 
                            />
                            <Card.Body className="d-flex flex-column flex-grow-1 align-items-center">
                                <Card.Title className="fs-2 fw-bold">
                                    Maquette d'un site web
                                </Card.Title>
                                <Card.Text>
                                    Création d'un prototype d'un site
                                </Card.Text>
                                <Button variant="primary">
                                    Voir le site
                                </Button>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column align-items-center">
                                <Card.Text className="opacity-75">
                                    Réalisé avec FIGMA
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </section>
            <Foot/>
        </>
    )
}
export default Portofolio
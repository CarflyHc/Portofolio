import { Button, ProgressBar } from "react-bootstrap"
import "../assets/home.css"
import Foot from "../component/footer"
import GithubModal from "../component/modal.jsx"
import { useState } from "react"



export default function Home() {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  return (
    <>
    <main className="bg-white pb-4">
      <section className="home">
        <article className="homeContainer">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web Full stack</h2>
          <Button variant="danger" onClick={handleOpenModal}>En savoir plus</Button>

          <GithubModal showModal={showModal} onClose={handleCloseModal} />        </article>
      </section>
      <section className="w-100 d-flex justify-content-center" >
        <div className=" shadow mt-3 bg-white">
          <div className="container p-4 row">
            <article className="col-12 col-md-6">
              <h3 className="fw-bold">A propos</h3>
              <hr className="border border-primary border-3 opacity-75 mb-4" />
              <img className="img-fluid" src="../../public/john-doe-about-Copie.jpg" alt="Photo d'une personne derrière un ordinateur" />
              <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus similique rerum totam soluta commodi sunt ducimus. Placeat enim illo reiciendis cupiditate animi esse quis numquam quo fuga, distinctio quas.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus similique rerum totam soluta commodi sunt ducimus. Placeat enim illo reiciendis cupiditate animi esse quis numquam quo fuga, distinctio quas.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus similique rerum totam soluta commodi sunt ducimus. Placeat enim illo reiciendis cupiditate animi esse quis numquam quo fuga, distinctio quas.</p>
            </article>
            <article className="col-12 col-md-6">
              <h3 className="fw-bold">Mes compétences</h3>
              <hr className="border border-primary border-3 opacity-75 mb-5" />
              <h4>HTML5 90%</h4>
              <ProgressBar className="mb-3" variant="danger" now={90 } />
              <h4>CSS3 80%</h4>
              <ProgressBar className="mb-3" variant="info" now={80} />
              <h4>JAVASCRIPT 70%</h4>
              <ProgressBar className="mb-3" variant="warning" now={70} />
              <h4>PHP 60%</h4>
              <ProgressBar className="mb-3" variant="success" now={60} />
              <h4>REACT 50%</h4>
              <ProgressBar className="mb-3" now={50} />
            </article>
          </div>
        </div>
      </section>
    </main>
    <Foot/>
    </>
  )
}

import { Button, ProgressBar } from "react-bootstrap"
import "../assets/home.css"
import Foot from "../component/footer"




export default function Home() {
  return (
    <>
    <main className="bg-white pb-4">
      <section className="home">
        <article className="homeContainer">
          <h1 className="fs-">Bonjour, je suis John Doe</h1>
          <h2>Développeur Web Full stack</h2>
          <Button variant="danger" >En savoir plus</Button>
        </article>
      </section>
      <section className=" shadow m-3 bg-white ">
        <div className="contianer p-3">
          <article className="container">
            <h3 className="fw-bold">A propos</h3>
            <hr className="border border-primary border-3 opacity-75 mb-4" />
            <img className="img-fluid" src="../../public/john-doe-about-Copie.jpg" alt="" />
            <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus similique rerum totam soluta commodi sunt ducimus. Placeat enim illo reiciendis cupiditate animi esse quis numquam quo fuga, distinctio quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus similique rerum totam soluta commodi sunt ducimus. Placeat enim illo reiciendis cupiditate animi esse quis numquam quo fuga, distinctio quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minus similique rerum totam soluta commodi sunt ducimus. Placeat enim illo reiciendis cupiditate animi esse quis numquam quo fuga, distinctio quas.</p>
          </article>
          <article className="container">
            <h3 className="fw-bold">Mes compétences</h3>
            <hr className="border border-primary border-3 opacity-75 mb-5 " />
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
      </section>
    </main>
    <Foot/>
    </>
  )
}

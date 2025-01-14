import "bootstrap-icons/font/bootstrap-icons.css"
import "../assets/footer.css"

const Foot = () => {
    return (
        <>
            <footer className="bg-black">
                <section className="container px-5 pt-5">
                    <article className="d-flex flex-column">
                        <h5 className="text-white">John Doe</h5>
                        <address className="text-white d-flex flex-column">
                            <span>40 rue Laure Diebold </span>
                            <span>69009 Lyon, France</span>
                            <a className="text-white text-decoration-none" href="tel">10 20 30 40 50</a>
                            <a className="text-white text-decoration-none" href="mailto">john.doe@gmail.com</a>
                        </address>
                    </article>
                    <article>
                        <a className="text-secondary me-2" href="https://github.com/CarflyHc" rel="nofollow" target="_blank"> <i className="bi bi-github"></i></a>
                        <a className="text-secondary me-2" href="https://x.com/?lang=fr&mx=2" rel="nofollow" target="_blank"><i className="bi bi-twitter"></i></a>
                        <a className="text-secondary me-2" href="https://www.linkedin.com/in/boris-lux-00a330a1/" rel="nofollow" target="_blank"><i className="bi bi-linkedin"></i></a>
                    </article>
                </section>
                <section className="container px-5 mt-3">
                    <article>
                        <h5 className="text-white">Liens utiles</h5>
                        
                    </article>
                </section>
            </footer>
        </>
    )
}

export default Foot


const Adress = () => {
    return(
        <section className="mb-4 ">
            <article className="ms-2">
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
                </address>
            </article>
        </section>
    )
}

export default Adress
const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col"></div>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="col"></div>
                </div>
            </div>
            <div className="container bg-white">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="https://github.com/kikukeii/kamar-sehat-app" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <i className="bi bi-hospital fs-2 pe-2"></i>
                            <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Miftakhuddin Falaki</span>
                        </a>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="https://github.com/kikukeii" target="_blank"><i class="bi bi-github"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/miftakhuddin-falaki/" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer
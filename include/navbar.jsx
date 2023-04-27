/* eslint-disable @next/next/no-html-link-for-pages */
const Navbar = () => {
    return (
        <>
            <div className="container fixed-top">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fw-bold bg-white bg-opacity-75">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <i className="bi bi-hospital fs-2 pe-2"></i>
                        <span className="fs-4"> Kamar Sehat</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="/cek" className="nav-link link-dark" aria-current="page">Cek Kamar</a></li>
                        <li className="nav-item"><a href="/#product" className="nav-link link-dark">Product</a></li>
                        <li className="nav-item"><a href="/#about" className="nav-link link-dark">About</a></li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default Navbar
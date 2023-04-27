/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
                        <li className="nav-item"><a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkamar-sehat.vercel.app&count_bg=%230042FF&title_bg=%23555555&icon=next-dot-js.svg&icon_color=%23E7E7E7&title=Visited&edge_flat=false" /></a></li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default Navbar
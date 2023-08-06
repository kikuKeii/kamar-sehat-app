/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
const ButtomNavApli = () => {
    return (
        <>
            <nav class="navbar bg-primary color-white fs-5 fw-bold navbar-expand fixed-bottom d-md-block d-lg-block d-xl-block">
                <ul class=" navbar-nav nav-justified w-100" >
                    <li class="nav-item">
                        <a href="./apli" class="nav-link">
                            <i class="bi bi-arrow-clockwise"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./setting" class="nav-link">
                            <i class="bi bi-gear"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ButtomNavApli
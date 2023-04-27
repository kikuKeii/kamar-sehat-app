/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/include/navbar'
import Footer from '@/include/footer'

const Home = () => {
    return (
        <>
            <Head>
                <title>Cek Ketersediaan Kamar</title>
                <link rel="icon" href="/assets/favicon/apple-icon-76x76.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
            </Head>
            <Navbar />
            <div className="container col-xxl-8 px-4 py-5" >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 pt-3">
                        <Image
                            src="/assets/img/hero-min.png"
                            alt="Hero"
                            className="d-block mx-lg-auto img-fluid"
                            width={700}
                            height={500}
                            priority
                        />
                    </div>
                    <div className="col-lg-6">
                        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkamar-sehat.vercel.app&count_bg=%23006BED&title_bg=%23000000&icon=next-dot-js.svg&icon_color=%23FFFFFF&title=Visited&edge_flat=true" width="200px" /></a>
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Cek Kamar Rumah Sakit</h1>
                        <p className="lead">Aplikasi untuk melhat ketersediaan kamar pada rumah sakit di seluruh indonesia.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="/cek" className="btn btn-outline-primary btn-lg px-4">Cek Kamar Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id='product'>
                <hr />
                <h2 className='text-center p-5'>PRODUCT</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm" style={{ border: '0px' }}>
                            <Image
                                src="/assets/img/kamar-sehat-3-min.png"
                                alt="one"
                                width={350}
                                height={350}
                                priority
                            />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold fs-5">Tampilan Pada Desktop</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm" style={{ border: '0px' }}>
                            <Image
                                src="/assets/img/kamar-sehat-1-min.png"
                                alt="one"
                                width={350}
                                height={350}
                                priority
                            />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold fs-5">Tampilan Pada Smartphone</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm" style={{ border: '0px' }}>
                            <Image
                                src="/assets/img/kamar-sehat-2-min.png"
                                alt="one"
                                width={350}
                                height={350}
                                priority
                            />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold fs-5">Tampilan Pada Smartphone 2</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container pt-5" id='about'>
                <hr />
                <h2 className='text-center p-5'>ABOUT</h2>
                <div className="row">
                    <div className="col fs-5">
                        Aplikasi ini di-deploy di <a className='link-underline link-underline-opacity-0' href="http://vercel.com" target="_blank" rel="noopener noreferrer">Vercel.com</a> dan dibagun dengan <a className='link-underline link-underline-opacity-0' href="http://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a>, <a className='link-underline link-underline-opacity-0' href="http://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap 5</a> dan Cinta. Repository dari proyek ini dapat dilihat pada <a className='link-underline link-underline-opacity-0' href="http://github.com/kikukeii/kamar-sehat-app" target="_blank" rel="noopener noreferrer">kikukeii/kamar-sehat-app</a>. Sumber data(Rest API) <a className='link-underline link-underline-opacity-0' href="https://github.com/satyawikananda/rs-bed-covid-indo-api/" target="_blank" rel="noopener noreferrer">Satya Wikananda</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home
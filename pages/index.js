import React, { Component } from "react"
import Footer from '../src/component/Footer'
import Masthead from '../src/component/Masthead'
import Head from 'next/head'
import { useRouter } from "next/router"
import origin from "../src/constants"

class Home extends Component {

    render() {
        const full1 = '/assets/img/portfolio/fullsize/1.jpg'
        const full2 = '/assets/img/portfolio/fullsize/2.jpg'
        const full3 = '/assets/img/portfolio/fullsize/3.jpg'
        const full4 = '/assets/img/portfolio/fullsize/4.jpg'
        const full5 = '/assets/img/portfolio/fullsize/5.jpg'
        const full6 = '/assets/img/portfolio/fullsize/6.jpg'
        const thumb1 = '/assets/img/portfolio/thumbnails/1.jpg'
        const thumb2 = '/assets/img/portfolio/thumbnails/2.jpg'
        const thumb3 = '/assets/img/portfolio/thumbnails/3.jpg'
        const thumb4 = '/assets/img/portfolio/thumbnails/4.jpg'
        const thumb5 = '/assets/img/portfolio/thumbnails/5.jpg'
        const thumb6 = '/assets/img/portfolio/thumbnails/6.jpg'

        return (
            <div>
                <Helmet />
                <Masthead buttonLabel="Lihat Lebih Lanjut" target="#about" />
                <section className="page-section bg-primary" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">Yayasan Berkah Yatim Indonesia</h2>
                                <hr className="divider light my-4" />
                                <p className="text-white-75 mb-4">Membangun Peradaban Mengembalikan Kejayaan Ummat</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger col-md-4 mb-2 mr-1" href="/about/profile#profil">Profil</a>
                                <a className="btn btn-light btn-xl js-scroll-trigger col-md-4 ml-1"
                                    href="/dokumentasi#album">Dokumentasi</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href={full1}>
                                    <img className="img-fluid" src={thumb1} alt="" />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Dokumentasi</div>
                                        <div className="project-name">Launching Yayasan Berkah Yatim Indonesia</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href={full2}>
                                    <img className="img-fluid" src={thumb2} alt="" />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Dokumentasi</div>
                                        <div className="project-name">Launching Yayasan Berkah Yatim Indonesia</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href={full3}>
                                    <img className="img-fluid" src={thumb3} alt="" />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Dokumentasi</div>
                                        <div className="project-name">Launching Yayasan Berkah Yatim Indonesia</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href={full4}>
                                    <img className="img-fluid" src={thumb4} alt="" />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Dokumentasi</div>
                                        <div className="project-name">Launching Yayasan Berkah Yatim Indonesia</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href={full5}>
                                    <img className="img-fluid" src={thumb5} alt="" />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Dokumentasi</div>
                                        <div className="project-name">Tanah yang akan dibebaskan lahannya</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href={full6}>
                                    <img className="img-fluid" src={thumb6} alt="" />
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">Dokumentasi</div>
                                        <div className="project-name">Launching Yayasan Berkah Yatim Indonesia</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0">Hubungi Kami</h2>
                                <hr className="divider my-5" />
                                <p className="text-muted mb-5">Ingin mengetahui lebih lanjut? Hubungi kami via telepon atau email di
                                    bawah</p>
                                <div className="col-lg-12 mb-2">
                                    <a className="btn btn-primary" href="tel:+6281912002001">Telepon</a>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <a className="btn btn-primary " href="https://wa.me/6281912002001">Whatsapp</a>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <a className="btn btn-primary "
                                        href="mailto:yayasanberkahyatimindonesia@gmail.com">yayasanberkahyatimindonesia@gmail.com</a>
                                </div>
                                <br />
                                <div className="mb-2">Sosial media:</div>
                                <a href="https://www.facebook.com/yatimdhuafaindonesia/">
                                    <img className="mr-1"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/256px-Facebook_icon.svg.png"
                                        width="30" height="30" alt="fb"></img>
                                </a>

                                <a href="https://www.instagram.com/berkahsahabatyatim/">
                                    <img className="mr-1"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png"
                                        width="30" height="30" alt="ig"></img>
                                </a>
                                <a href="https://t.me/BerkahSahabatYatim">
                                    <img className="mr-1"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png"
                                        width="30" height="30" alt="tg"></img>
                                </a>
                                <a href="https://www.youtube.com/watch?v=mUxYJAQ23-c">
                                    <img className="mr-1"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/1280px-YouTube_social_red_circle_%282017%29.svg.png"
                                        width="30" height="30" alt="yt"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
                {/* <div id="app" className="col-lg-12">
                    <navbar-byi></navbar-byi>
                    <footer-byi></footer-byi>
                </div> */}
            </div>
        )
    }
}

function Helmet() {
    const title = "Berkah Sahabat Yatim"
    const desc = "Membangun Generasi Qurani, Berkarakter Dan Visioner Yang Berpegang Teguh Pada Al Qur'an & Sunnah"
    const img = "https://raw.githubusercontent.com/nashihu/production_stuff/master/bsy_images/2020-01-24%2018.19.45.jpeg"
    const { asPath } = useRouter();
    const URL = `${origin()}${asPath}`;
    return (<Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
    </Head>)
}

export default Home

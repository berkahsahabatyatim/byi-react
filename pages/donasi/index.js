import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Footer from "../../src/component/Footer"
import Masthead from "../../src/component/Masthead"
import origin from "../../src/constants"

export const donasi = "/donasi"
export default function Donasi() {
    const bsi = "/assets/img/bsi.png"
    const mandiri = "/assets/img/mandiri.jpg"
    const bni = "/assets/img/bni.jpg"
    const [width, setWidth] = useState(600)
    const [done, setDone] = useState(false)

    useEffect(() => {
        if (window !== undefined) {
            const _w = window.screen.width;
            if (_w < 600) {
                const newVal = _w - 20
                setWidth(newVal)
            }
        }
        setDone(true)
    }, [])

    return (<div>
        <Helmet />
        <Masthead bg="donasi" buttonLabel="Lihat Profil" target="#donate" />
        <section class="page-section bg-light" id="donate">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <div class="text-dark mt-4 mb-4">
                            Rancangan dan Perencanaan Yayasan Berkah Yatim Indonesia
                        </div>
                        <div class="container-iframe" >
                            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/KRswZr858kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="text-dark mb-3">
                            Salurkan bantuan Anda dalam mendukung program-program yayasan melalui portal donasi berikut
                        </div>
                        <a href="../Donasi/home.html">
                            <div class="btn btn-primary mb-3">Web Donasi</div>
                        </a>
                        <div class="text-dark">
                            atau langsung melalui Rekening (a.n Yayasan Berkah Yatim Indonesia)
                        </div>
                        <div class="text-dark mb-3">
                            yang telah kami sediakan :
                        </div>
                        <img className="mr-1" src={bsi} height="20" alt="BSI"></img>Rekening BSI (451): <span className="js-copy-bsm-btn" >714 8434 306</span><br />
                        <br />
                        <img className="mr-1" src={mandiri} height="20" alt="Mandiri"></img>Mandiri (008): <span className="js-copy-mandiri-btn" >182 000 664 5022</span> <br />
                        <br />
                        <img className="mr-1" src={bni} height="20" alt="BNI"></img>Rekening BNI (009):     <span className="js-copy-bni-btn">118 0279 271</span> <br />
                        <br />
                        a.n <i>Yayasan Berkah Yatim Indonesia</i>
                        <div class="text-dark mb-2">
                            Konfirmasi donasi melalui kontak:
                        </div>
                        <div class="col-lg-12 mb-2">
                            <a class="btn btn-primary" href="tel:+6281912002001">Telepon</a>
                        </div>
                        <div class="col-lg-12 mb-2">
                            <a class="btn btn-primary " href="https://wa.me/6281912002001">Whatsapp</a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            {/* <div class="row mx-3 justify-content-center">
                {!done ? <br /> : <iframe
                    style={{
                        "overflow": "hidden",
                        "display": "block",
                        "pointerEvents": "none"
                    }}
                    height="1800"
                    width={width}
                    src="https://berkahsahabatyatim.com/donasi/home#/embed" />}
            </div> */}
        </section>
        <Footer />
    </div>)
}


function Helmet() {
    const title = "Donasi"
    const desc = "Informasi Donasi untuk anak-anak yatim di BYI"
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
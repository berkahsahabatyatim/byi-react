import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Footer from "../../src/component/Footer"
import Masthead from "../../src/component/Masthead"
import origin from "../../src/constants"

export const donasi = "/donasi"
export default function Donasi() {
    const bsi = "/assets/img/bsi.png"
    const mandiri = "/assets/img/mandiri.jpg"
    const bni = "/assets/img/bni.jpg"
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
                        <br />
                        <iframe
                            src="https://berkahsahabatyatim.com/donasi/home#/embed"
                            height="500"
                            width="400"
                            frameborder="0" />
                    </div>
                </div>
            </div>
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
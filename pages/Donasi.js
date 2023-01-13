import React from "react"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Masthead from "./component/Masthead"

export const donasi = "/donasi"
export function Donasi() {
    return (<div>
        <Header/>
        <Masthead bg="donasi" buttonLabel="Lihat Profil" target="#donate" />
        <section class="page-section bg-light" id="donate">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <div class="text-dark mt-4 mb-4">
                            Rancangan dan Perencanaan Yayasan Berkah Yatim Indonesia
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KRswZr858kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        <div class="col-lg-12 mb-3 js-copy-bsm-btn">
                            <div class="btn btn-primary">Rekening Mandiri Syari'ah (BSM)</div>
                        </div>
                        <div class="col-lg-12 mb-3 js-copy-mandiri-btn">
                            <div class="btn btn-primary">Rekening Mandiri</div>
                        </div>
                        <div class="col-lg-12 mb-3 js-copy-bni-btn">
                            <div class="btn btn-primary">Rekening BNI</div>
                        </div>
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
        </section>
        <Footer/>
    </div>)
}
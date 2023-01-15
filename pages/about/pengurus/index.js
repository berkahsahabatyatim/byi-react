import React from "react"
import Footer from '../../../src/component/Footer'
import Header from '../../../src/component/Header'
import Masthead from '../../../src/component/Masthead'

export const pengurus = "/about/pengurus"

export default function Pengurus() {
    return (<div>
        <Helmet/>
        <Header />
        <Masthead buttonLabel="Lihat Pengurus" target="#legal" />
        <div className="bg-light" id="legal">
            <div id="profil" className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-10 text-justify text-dark" >
                <div className="entry-content">

                    <div className="text-center font-weight-bold">
                        <div className="mb-1">
                            STRUKTUR ORGANISASI YAYASAN
                        </div>
                    </div>

                    <table className="mb-4" style={{
                        width: "100%"
                    }}>
                        <tr>
                            <td>Pembina</td>
                            <td>MUHAMMAD ABIYYU MUFTI HANIF</td>
                        </tr>
                        <tr>
                            <td>Ketua Pengurus</td>
                            <td>SITI MARIYAM</td>
                        </tr>
                        <tr>
                            <td>Sekretaris</td>
                            <td>MEYLAN PUTRI AYUNINGSIH</td>
                        </tr>
                        <tr>
                            <td>Bendahara</td>
                            <td>MUHAMMAD SANDI MAULIDIN</td>
                        </tr>
                        <tr>
                            <td>Anggota</td>
                            <td>AHMAD NASHIHUDDIEN<br/>YASMIN NABILAH</td>
                        </tr>
                    </table>

                    <div className="text-center font-weight-bold">
                        <div className="mb-1">
                            STRUKTUR ORGANISASI UPZ
                        </div>
                    </div>

                    <table style={{
                        width: "100%"
                    }}>
                        <tr>
                            <td>Pembina</td>
                            <td>DONY HERDYANA, SSTP, MAP</td>
                        </tr>
                        <tr>
                            <td>Ketua</td>
                            <td>SITI MARIYAM</td>
                        </tr>
                        <tr>
                            <td>Sekretaris</td>
                            <td>MEYLAN PUTRI AYUNINGSIH</td>
                        </tr>
                        <tr>
                            <td>Bendahara</td>
                            <td>MUHAMMAD SANDI MAULIDIN</td>
                        </tr>
                        <tr>
                            <td>Manager Marketing</td>
                            <td>AHMAD NASHIHUDDIEN</td>
                        </tr>
                    </table>
                    <br />
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}


function Helmet() {
    const title = "Pengurus BYI"
    const desc = "Pengurus Berkah Yatim Indonesia"
    const img = "https://raw.githubusercontent.com/nashihu/production_stuff/master/bsy_images/2020-01-24%2018.19.45.jpeg"
    return (<Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
    </Head>)
}
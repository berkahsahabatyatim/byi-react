import React from "react"
import Footer from '../../../src/component/Footer'
import Masthead from '../../../src/component/Masthead'
import Head from "next/head"
import { useRouter } from "next/router"
import origin from "../../../src/constants"

export const legalitas = "/about/legal"

export default function Legalitas() {
    const pendirian = "/assets/img/profil/Lampiran PENGESAHAN PENDIRIAN-1.jpg"
    const barcode = "/assets/img/profil/Akta berbarcode YBYI-1.jpg"
    const barcode2 = "/assets/img/profil/Akta berbarcode YBYI-2.jpg"
    const legal1 = "/assets/img/profil/revisi-legalitas-1.jpg"
    const legal2 = "/assets/img/profil/revisi-legalitas-2.jpg"
    const npwp = "/assets/img/profil/SK NPWP.jpg"
    const upz = "/assets/img/profil/UPZ1.jpg"
    const upz2 = "/assets/img/profil/UPZ2.jpg"
    return (<div>
        <Helmet />
        <Masthead buttonLabel="Lihat Legalitas" target="#legal" />
        <div className="bg-light" id="legal">
            <div id="profil" className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-10 text-justify text-dark" >
                <div className="entry-content">

                    <div className="text-center font-weight-bold">
                        <div>
                            SURAT KETERANGAN TERDAFTAR
                        </div>
                        <div>
                            KEMENTRIAN KEUANGAN REPUBLIK INDONESIA
                        </div>
                    </div>

                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td>Nomor</td>
                                <td>S-30051KT/WPJ.09/KP.0603/2020</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Tanggal</td>
                                <td>22 Desember 2020</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>YAYASAN BERKAH YATIM INDONESIA</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>NPWP</td>
                                <td>94.440.340.1.406.000</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Kategori</td>
                                <td>Badan</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="text-center font-weight-bold">
                        <div>
                            SK MENTERI HUKUM DAN HAM REPUBLIK INDONESIA
                        </div>
                    </div>

                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td>Nomor</td>
                                <td>AHU-0025900.AH.01.04.Tahun 2020</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Notaris</td>
                                <td>Ali Subhan</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>YAYASAN BERKAH YATIM INDONESIA</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Pengesahan Mentri Hukum & HAM</td>
                                <td>No. 5020122332102472 23 Desember 2020</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="col-lg-12 text-center mb-4">
                        <img src={pendirian} style={{ width: "100%" }} alt="pendirian" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={barcode} style={{ width: "100%" }} alt="barcode" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={barcode2} style={{ width: "100%" }} alt="barcode" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={legal1} style={{ width: "100%" }} alt="barcode" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={legal2} style={{ width: "100%" }} alt="barcode" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={npwp} style={{ width: "100%" }} alt="npwp" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={upz} style={{ width: "100%" }} alt="upz" />
                    </div>
                    <div className="col-lg-12 text-center mb-3">
                        <img src={upz2} style={{ width: "100%" }} alt="upz2" />
                    </div>
                    <br />
                </div>
            </div>

        </div>
        <Footer />
    </div>)
}

function Helmet() {
    const title = "Legalitas BYI"
    const desc = "Legalitas Berkah Yatim Indonesia"
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
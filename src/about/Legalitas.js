import React from "react"
import Header from "../component/Header"
import Masthead from "../component/Masthead"
import pendirian from "../lagacy/assets/img/profil/Lampiran PENGESAHAN PENDIRIAN-1.jpg"
import barcode from "../lagacy/assets/img/profil/Akta berbarcode YBYI-1.jpg"
import npwp from "../lagacy/assets/img/profil/SK NPWP.jpg"
import upz from "../lagacy/assets/img/profil/UPZ1.jpg"
import upz2 from "../lagacy/assets/img/profil/UPZ2.jpg"
import Footer from "../component/Footer"

export const legalitas = "/legalitas"

export function Legalitas() {
    return (<div>
        <Header />
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
                        <tr>
                            <td>Nomor</td>
                            <td>S-30051KT/WPJ.09/KP.0603/2020</td>
                        </tr>
                        <tr>
                            <td>Tanggal</td>
                            <td>22 Desember 2020</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td>YAYASAN BERKAH YATIM INDONESIA</td>
                        </tr>
                        <tr>
                            <td>NPWP</td>
                            <td>94.440.340.1.406.000</td>
                        </tr>
                        <tr>
                            <td>Kategori</td>
                            <td>Badan</td>
                        </tr>
                    </table>
                    <br />
                    <div className="text-center font-weight-bold">
                        <div>
                            SK MENTERI HUKUM DAN HAM REPUBLIK INDONESIA
                        </div>
                    </div>

                    <table style={{ width: "100%" }}>
                        <tr>
                            <td>Nomor</td>
                            <td>AHU-0025900.AH.01.04.Tahun 2020</td>
                        </tr>
                        <tr>
                            <td>Notaris</td>
                            <td>Ali Subhan</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td>YAYASAN BERKAH YATIM INDONESIA</td>
                        </tr>
                        <tr>
                            <td>Pengesahan Mentri Hukum & HAM</td>
                            <td>No. 5020122332102472 23 Desember 2020</td>
                        </tr>
                    </table>
                    <br />
                    <div className="col-lg-8 text-center mb-4">
                        <img src={pendirian} style={{ width: "1000px" }} alt="pendirian" />
                    </div>
                    <div className="col-lg-8 text-center mb-3">
                        <img src={barcode} style={{ width: "1000px" }} alt="barcode" />
                    </div>
                    <div className="col-lg-8 text-center mb-3">
                        <img src={npwp} style={{ width: "1000px" }} alt="npwp" />
                    </div>
                    <div className="col-lg-8 text-center mb-3">
                        <img src={upz} style={{ width: "1000px" }} alt="upz" />
                    </div>
                    <div className="col-lg-8 text-center mb-3">
                        <img src={upz2} style={{ width: "1000px" }} alt="upz2" />
                    </div>
                    <br />
                </div>
            </div>

        </div>
        <Footer/>
    </div>)
}
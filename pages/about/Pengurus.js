import React from "react"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Masthead from "../component/Masthead"

export const pengurus = "/pengurus"

export function Pengurus() {
    return (<div>
        <Header/>
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
                            <td>SITI MARIYAM</td>
                        </tr>
                        <tr>
                            <td>Ketua Pengurus</td>
                            <td>RK DADAN SN, SP.</td>
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
                            <td>AHMAD NASHIHUDDIEN</td>
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
                            <td>Pembina Yayasan</td>
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
        <Footer/>
    </div>)
}
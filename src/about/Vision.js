import React from "react"
import Header from "../component/Header"
import Masthead from "../component/Masthead"

export const visiMisi = "/visi-misi"

export function Vision() {
    return (<div>
        <Header/>
        <Masthead buttonLabel="Lihat Visi&Misi" target="#profil" />
        <div className="bg-light">
            <div id="profil" className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-10 text-center text-dark" >
                <div className="entry-content">
                    <p><strong>Visi Misi Yayasan Berkah Yatim Indonesia</strong></p>
                    <p><strong>Visi</strong></p>
                    <p className="has-text-align-center">Mewujudkan pondok tahfidz yatim dan dhuafa berbasis kampung tauhid menuju kampung akhirat</p>
                    <p><strong>Misi</strong></p>
                    <p>Membangun lembaga yang amanah dan profesional sebagai   	fasilitator kaum muslimin untuk membentuk generasi qurani 	menjadi hamba-hamba Allah yang bermanfaat bagi banyak 	orang   	dan bisa menolong Agama Allah.</p>
                    <p>Memberikan pelayanan dan pendidikan terbaik bagi yatim dan 	dhu'afa</p>
                    <p>Membangun dan membina kampung tauhid yang terintegrasi 	dengan pondok tahfidz yatim dan dhuafa di Indonesia</p>
                    <p>Mencetak sejuta penghafal Al-Qur'an</p>
                    <p>Memberdayakan ekonomi masyarakat</p>
                    <p>Membangun Lembaga Filantropi untuk Pemberdayaan Ummat</p>
                    <br />
                </div>
            </div>

        </div>
        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">Copyright © 2021 - Start Bootstrap - Berkah Yatim Indonesia</div></div>
        </footer>
    </div>)
}
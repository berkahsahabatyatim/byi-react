import React, { Component } from "react";
import logo from "../lagacy/assets/img/logobyi.png"

class Header extends Component {
    render() {
        const baseUrl = window.location.host;
        const profilPage = baseUrl + "/about/about.html#profil";
        const visiMisi = baseUrl + "/about/visimisi.html#profil";
        const pengurus = baseUrl + "/about/pengurus.html#legal"
        const legal = baseUrl + "/about/legalitas.html#legal"

        const album = baseUrl + "/album.html#album"

        const program1 = baseUrl + "/program/pondok.html#services"
        const program2 = baseUrl + "/program/pondok.html#services"
        const program3 = baseUrl + "/program/beasiswa.html"
        const program4 = baseUrl + "/program/lahan.html"
        const program5 = baseUrl + "/program/masjid.html"
        const program6 = baseUrl + "/program/pondok.html#services"
        const program7 = baseUrl + "/program/ekonomi.html"
        const program8 = baseUrl + "/program/santripreneur.html"
        const program9 = baseUrl + "/program/bantuan-bencana.html"
        const program10 = baseUrl + "/program/santripreneur.html"
        const program11 = baseUrl + "/program/santripreneur.html"

        const donasi = baseUrl + "/donasi.html#donate"
        const kegiatan = baseUrl + "/kegiatan-byi.html#activity"
        const contact = baseUrl + "#contact"

        const article1 = baseUrl + "/artikel/manfaat-sedekah.html#main-content"
        const article2 = baseUrl + "/artikel/wakaf.html#main-content"
        const article3 = baseUrl + "/artikel/zakat.html#main-content"
        const article4 = baseUrl + "/artikel/penerima-zakat.html#main-content"
        const article5 = baseUrl + "/artikel/qurban.html#main-content"
        return (<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href={baseUrl}>
                    <img className="navbar-brand js-scroll-trigger" src={logo} width="50" height="53" alt="logo" />
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={baseUrl}>Home</a></li>
                        <li className="dropdown mr-3">
                            <div className="nav-item">
                                <a className="nav-link js-scroll-trigger" href={baseUrl}>Tentang Kami</a>
                                <div className="dropdown-content bg-dark">
                                    <a href={profilPage}>Profil Yayasan BYI</a>
                                    <a href={visiMisi}>Visi Misi</a>
                                    <a href={pengurus}>Kepengurusan</a>
                                    <a href={legal}>Legalitas</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={album}>Dokumentasi</a></li>
                        <li className="dropdown mr-3">
                            <div className="nav-item">
                                <a className="nav-link js-scroll-trigger" href={baseUrl}>Program Kerja</a>
                                <div className="dropdown-content bg-dark">
                                    <a href={program1}>Pendidikan dan Pembinaan Pondok Tahfidz Yatim & Dhuafa</a>
                                    <a href={program2}>Pembangunan dan Pembinaan Kampung Tauhid</a>
                                    <a href={program3}>Beasiswa Pendidikan Formal untuk Yatim & Dhuafa</a>
                                    <a href={program4}>Pembebasan Lahan untuk Pondok Tahfidz Yatim & Dhuafa</a>
                                    <a href={program5}>Pembangunan Masjid</a>
                                    <a href={program6}>Pembangunan Pondok Tahfidz Yatim & Dhuafa</a>
                                    <a href={program7}>Pemberdayaan Ekonomi Masyarakat</a>
                                    <a href={program8}>Kafalah Du\'at</a>
                                    <a href={program9}>Bantuan Kemanusiaan</a>
                                    <a href={program10}>Pembinaan Pemuda Berdaya</a>
                                    <a href={program11}>Pengelolaan Wakaf Produktif</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={donasi}>Donasi</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={kegiatan}>Kegiatan</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={contact}>Hubungi Kami</a></li>
                        <li className="dropdown">
                            <div className="nav-item">
                                <a className="nav-link js-scroll-trigger" href={baseUrl}>Artikel</a>
                                <div className="dropdown-content bg-dark">
                                    <a href={article1}>Manfaat Sedekah</a>
                                    <a href={article2}>Keutamaan, Rukun & Syarat Wakaf</a>
                                    <a href={article3}>Syarat Wajib Zakat & Cara Menunaikannya</a>
                                    <a href={article4}>8 Golongan yang Berhak Menerima Zakat</a>
                                    <a href={article5}>13 Tips Memilih Hewan untuk Kurban</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}

export default Header
import React from "react";
import Link from 'next/link';
import { profile } from "../about/Profile"
import { visiMisi } from "../about/Vision"
import { pengurus } from "../about/Pengurus"
import { program } from "../program/Program"
import { donasi } from "../Donasi"
import { article } from "../article/Article"
import { dokum } from "../Dokum"

function Header() {
    const root = "/"
    const kegiatan = '/kegiatan'
    const contact = "/#contact"

    const article1 = article(1) + "#main-content"
    const article2 = article(2) + "#main-content"
    const article3 = article(3) + "#main-content"
    const article4 = article(4) + "#main-content"
    const article5 = article(5) + "#main-content"
    const logo = "/assets/img/logobyi.png"
    return (<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
            <Link className="navbar-brand js-scroll-trigger" href={root}>
                <img className="navbar-brand js-scroll-trigger" src={logo} width="50" height="53" alt="logo" />
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={root}>Home</Link></li>
                    <li className="dropdown mr-3">
                        <div className="nav-item">
                            <div className="nav-link js-scroll-trigger">Tentang Kami</div>
                            <div className="dropdown-content bg-dark">
                                <Link href={profile + "#profil"}> Profil Yayasan BYI </Link>
                                <Link href={visiMisi + "#profil"}>Visi Misi</Link>
                                <Link href={pengurus + "#legal"}>Kepengurusan</Link>
                                <Link href={'/about/legal' + "#legal"}>Legalitas</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={dokum}>Dokumentasi</Link></li>
                    <li className="dropdown mr-3">
                        <div className="nav-item">
                            <div className="nav-link js-scroll-trigger" href={root}>Program Kerja</div>
                            <div className="dropdown-content bg-dark">
                                <Link href={program("pondok")}>Pendidikan dan Pembinaan Pondok Tahfidz Yatim & Dhuafa</Link>
                                <Link href={program("pondok")}>Pembangunan dan Pembinaan Kampung Tauhid</Link>
                                <Link href={program("beasiswa")}>Beasiswa Pendidikan Formal untuk Yatim & Dhuafa</Link>
                                <Link href={program("lahan")}>Pembebasan Lahan untuk Pondok Tahfidz Yatim & Dhuafa</Link>
                                <Link href={program("masjid")}>Pembangunan Masjid</Link>
                                <Link href={program("pondok")}>Pembangunan Pondok Tahfidz Yatim & Dhuafa</Link>
                                <Link href={program("ekonomi")}>Pemberdayaan Ekonomi Masyarakat</Link>
                                <Link href={program("santripreneur")}>Kafalah Du\'at</Link>
                                <Link href={program("bantuan-bencana")}>Bantuan Kemanusiaan</Link>
                                <Link href={program("santripreneur")}>Pembinaan Pemuda Berdaya</Link>
                                <Link href={program("santripreneur")}>Pengelolaan Wakaf Produktif</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={donasi + "#donate"}>Donasi</Link></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={kegiatan}>Kegiatan</a></li>
                    <li className="dropdown">
                        <div className="nav-item">
                            <a className="nav-link js-scroll-trigger" href={root}>Artikel</a>
                            <div className="dropdown-content bg-dark">
                                <Link href={article1}>Manfaat Sedekah</Link>
                                <Link href={article2}>Keutamaan, Rukun & Syarat Wakaf</Link>
                                <Link href={article3}>Syarat Wajib Zakat & Cara Menunaikannya</Link>
                                <Link href={article4}>8 Golongan yang Berhak Menerima Zakat</Link>
                                <Link href={article5}>13 Tips Memilih Hewan untuk Kurban</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={contact}>Hubungi Kami</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header
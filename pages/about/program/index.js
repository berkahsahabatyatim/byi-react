import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../../src/component/Footer";
import Masthead from "../../../src/component/Masthead";
import origin from "../../../src/constants";

export const programInduk = '/about/program';

export default function Program() {
    return (<div>
        <Helmet />
        <Masthead buttonLabel="Lihat Program" target="#program" />
        <div className="bg-light">
            <div id="program" className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-12 text-dark" >
                <div className="entry-content">
                    <p class="text-center"><strong>Program Yayasan Berkah Yatim Indonesia</strong></p>
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10 mx-3">
                            <ul style={{ "listStyleType": "decimal" }}>
                                <li>
                                    <a href="/donasi/home.html#/wakaf-lahan">Pembebasan Lahan Wakaf untuk Jalan</a>
                                </li>
                                <li>
                                    <a href="/donasi/home.html#/wakaf-lahan">Pembangunan Asrama Pondok Tahfidz Yatim Dhuafa</a>
                                </li>
                                <li>
                                    <a href="/donasi/home.html#/tahfidz-yatim">Pembiayaan Operasional Santri Pondok Tahfidz Yatim Dhuafa</a>
                                </li>
                                <li>Beasiswa Sekolah Tahfidz Qur'an</li>
                                <li>
                                    <a href="/donasi/home.html#/tajil-yatim">Santunan 1000 Anak Yatim</a>
                                </li>
                                <li>
                                    <a href="/donasi/home.html#/santunan-gempa-bumi">Pemberdayaan Ekonomi Masyarakat Dhuafa</a>
                                </li>
                                <li>
                                    <a href="/donasi/home#/santunan-guru-ngaji">Kafalah Du'at untuk Relawan Quran</a>
                                </li>
                                <li>Gebyar Ramadhan 1444 H</li>
                            </ul>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                    <br />
                </div>
            </div>

        </div>
        <Footer />
    </div>)
}

function Helmet() {
    const title = "Program BYI"
    const desc = "Program Berkah Yatim Indonesia"
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

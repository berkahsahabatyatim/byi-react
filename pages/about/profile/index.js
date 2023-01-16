import Head from "next/head";
import { useRouter } from "next/router";
import React, { Component } from "react";
import Footer from '../../../src/component/Footer'
import Masthead from '../../../src/component/Masthead'
import origin from "../../../src/constants";

export const profile = "/about/profile"
class Profile extends Component {

    render() {
        return (<div>
            <Helmet />
            <Masthead buttonLabel="Lihat Profil" target="#profil" />
            <div className="bg-light">
                <div id="profil" className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-10 text-justify text-dark" >
                    <div className="entry-content">
                        <div className="image-full"></div>
                        <p><strong>Berkah Yatim Indonesia (BYI)</strong></p>
                        <p>Berkah Yatim Indonesia adalah sebuah Yayasan yang berdiri pada akhir tahun 2020. Didorong oleh idealisme tulus serta keinginan untuk memberikan sumbangan terbaik bagi umat dan bangsa guna mencetak generasi yang bermanfaat bagi banyak orang.</p>
                        <p>Berawal dari sebuah renungan sederhana, dimana banyak sekolah-sekolah islam yang berkualitas dan menghasilkan hasil anak- anak islam yang berkualitas pula. Namun bayaran sekolah berkualitas itu amatlah mahal karena sesuai dengan kualitas pendidikannya. Sehingga terkesan sekolah berkualitas itu untuk anak-anak yang memiliki kemampuan finansial orang tuanya yang cukup. </p>
                        <p>Lalu bagaimana dengan mereka anak-anak yang dhu'afa? Bagaimana dengan anak-anak yatim (yatim piatu)? Mereka juga memiliki potensi kecerdasan yang luar biasa? Potensi kesuksesan yang sama dengan orang-orang yang mampu. "Jangan sampai mereka menyesali lahir dari orang tua yang miskin tapi mereka harus menyesali kalau mati dalam keadaan miskin". Sehingga agar mereka tidak mati dalam keadaan miskin, maka mereka harus bangkit dan maju. Maka kitalah yang harus tergerak dan bergerak untuk membantu mereka.</p>
                        <p>Berangkat dari keprihatinan itulah maka lahir Yayasan Berkah Yatim Indonesia untuk menolong agama Allah, agar mereka anak-anak yatim dan dhu'afa itu memiliki fotensi maju dan sukses yang sama.</p>
                        <p>Karenanya doa, bantuan dan dukungan dari berbagai pihak sangat kami nantikan untuk mewujudkan cita cita mereka. Sesungguhnya bukan anak-anak yatim dan dhu'afa yang butuh kepada kita, tapi kitalah yang membutuhkan mereka. Karena janji Allah siapa yang memenuhi kebutuhan mereka maka Allah yang akan memenuhi kebutuhan kita. Mari kita hidupkan hati kita karena hidup itu bukan sekedar hidup tapi hidup itu untuk yang Maha Hidup.</p>
                        <br />
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
    }
}


function Helmet() {
    const title = "Profil BYI"
    const desc = "Profil Berkah Yatim Indonesia"
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

export default Profile
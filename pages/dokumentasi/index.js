import React from "react"
import Footer from '../../src/component/Footer'
import Header from '../../src/component/Header'
import Masthead from '../../src/component/Masthead'
import axios from "axios"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"
import origin from "../../src/constants"

export async function getStaticProps() {
    try {
        var res = await axios.get("https://api.github.com/repos/nashihu/production_stuff/contents/bsy_images")
        var data = res.data;
        data.sort(function (a, b) {
            return b.download_url.localeCompare(a.download_url);
        });
        return { props: { data } };
    } catch (e) {
        console.log("kena errr ", e)
        return { props: { data: [] } };
    }

}

export const dokum = "/dokumentasi"

export default function Dokum({ data }) {
    return (<div>
        <DokumHelmet />
        <Header />
        <Masthead buttonLabel="Lihat Album" target="#album" />
        <div className="container page-top mt-5">
            <div className="row" id="album">
                {data.map((a) => (
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb mb-4">
                        <a data-fancybox="gallery" href={a.download_url} rel="ligthbox" >
                            <Image src={a.download_url} className="img-fluid zoom loadingImg" alt="" loading="lazy" height="300" width="300" />
                        </a></div>))}

            </div>
        </div>
        <Footer />
    </div>)
}

function DokumHelmet() {
    const title = "Dokumentasi"
    const desc = "Dokumentasi BYI"
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
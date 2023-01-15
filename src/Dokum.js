import React from "react"
import Header from "./component/Header"
import Masthead from "./component/Masthead"
import axios from "axios"
import { useLoaderData } from "react-router-dom"
import Footer from "./component/Footer"

export async function dokumLoader() {
    try {
        var res = await axios.get("https://api.github.com/repos/nashihu/production_stuff/contents/bsy_images")
        var resp = res.data;
        resp.sort(function (a, b) {
            return b.download_url.localeCompare(a.download_url);
        });
        return { data: resp };
    } catch (e) {
        console.log("kena err ", e)
        return { data: [] };
    }

}

export const dokum = "/dokumentasi"

export function Dokum() {
    var { data } = useLoaderData()
    console.log(data);
    return (<div>
        <Header />
        <Masthead buttonLabel="Lihat Album" target="#album" />
        <div class="container page-top mt-5">
            <div class="row" id="album">
                {data.map((a) => (
                    <div class="col-lg-3 col-md-4 col-xs-6 thumb mb-4">
                        <a data-fancybox="gallery" href={a.download_url} rel="ligthbox" >
                            <img src={a.download_url} class="img-fluid zoom loadingImg" alt="" loading="lazy" height="300" width="300" />
                        </a></div>))}

            </div>
        </div>
        <Footer />
    </div>)
}

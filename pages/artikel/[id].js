import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Footer from '../../src/component/Footer'
import Masthead from '../../src/component/Masthead'
import origin from "../../src/constants"
import { app, articleDb, db } from "../../src/service/firebase"


export async function getStaticPaths() {
    const querySnapshot = await getDocs(collection(getFirestore(app), articleDb))
    const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
    const urls = data.map((e) => ({ url: e.url }))

    const paths = urls.map((post) => ({
        params: { id: post.url },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let output = ''
    const q = query(collection(getFirestore(app), articleDb), where("url", "==", params.id));
    const list = await getDocs(q)
    const data = list.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    if (data.length > 0) {
        const { title, content } = data[0]
        output = { title, content }
    } else {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { props: { data: output } }
}

export const article = (param) => {
    return "/artikel/" + param
}

export default function Article({ data }) {
    const { content, title } = data
    return (<div>
        <Helmet title={title}/>
        <Masthead title={title} desc={''}/>
        <div id="main-content">
            <div className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-10 text-justify text-dark">
                <div className="entry-content">
                    <h2><span style={{ "color": "teal" }}>{title}</span></h2>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}


function Helmet(props) {
    const title = props.title ?? "Artikel BYI"
    const desc = "Artikel Berkah Yatim Indonesia"
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
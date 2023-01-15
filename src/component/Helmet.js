import React, { Component } from "react"
import Head from "next/head";

export default function Helments(props) {

    var { title, desc, img } = props;
    title = title !== undefined ? title : "Berkah Yatim Indonesia"
    desc = desc !== undefined ? desc : "Membangun Generasi Visioners"
    img = img !== undefined ? img : "https://raw.githubusercontent.com/nashihu/production_stuff/master/bsy_images/2020-01-24%2018.19.45.jpeg"
    return <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
    </Head>

}
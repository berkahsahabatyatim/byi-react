import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Masthead from '../../src/component/Masthead'
import origin from '../../src/constants'

export default function ListArtikel() {

    const items = [];
    for (let i = 0; i < 10; i++) {
        items.push(
            <div className='d-flex justify-content-around mt-3'>
                <div>
                    <h4 className='mt-1'>Tips hafal quran dalam 10 hari</h4>
                    <h6>oleh: admin BYI, tanggal 5 Januari 2023</h6>
                </div>
                <div className='mt-3'>
                    <i className="fa fa-caret-right"></i>
                </div>
            </div>
        )
    }

    return <div>
        <Helmet />
        <Masthead />
        <br />
        <div className='text-center'>
            <h3>List Artikel BYI</h3>
        </div>
        {items}
    </div>
}

function Helmet(props) {
    console.log(props)
    const title = "List Artikel BYI"
    const desc = "List Artikel Berkah Yatim Indonesia"
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
import { collection, getDocs, getFirestore, orderBy, Query, query } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import dateFormat, { i18n } from 'dateformat'
import Masthead from '../../src/component/Masthead'
import origin from '../../src/constants'
import { app, articleDb } from '../../src/service/firebase'

ListArtikel.getInitialProps = async (ctx) => {

    const q = query(collection(getFirestore(app), articleDb), orderBy("updatedAt", "desc"))
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
    const output = data.map((e) => {
        return ({ url: e.url, updatedBy: e.updatedBy, title: e.title, updatedAt: e.updatedAt })
    })

    console.log(output)
    return { data: output }
}

export default function ListArtikel({ data }) {
    const len = data.length

    const items = [];
    for (let i = 0; i < len; i++) {
        const d = new Date(data[i].updatedAt.seconds * 1000);
        const date = dateFormat(d, "dddd, d mmmm yyyy, h:MM");
        items.push(
            <div>
                <div className='d-flex justify-content-between mt-3 mx-5' key={i}>
                    <div>
                        <Link href={`/artikel/${data[i].url}`}>
                            <h4 className='mt-1'>{data[i].title}</h4>
                        </Link>
                        <h6>oleh: {data[i].updatedBy} pada {date}</h6>
                    </div>
                    {/* <div className='mt-3'>
                    <i className="fa fa-caret-right"></i>
                </div> */}
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

i18n.dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
];

i18n.monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
];

i18n.timeNames = ["a", "p", "am", "pm", "A", "P", "AM", "PM"];
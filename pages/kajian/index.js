import React, { useEffect } from 'react';
import axios from "axios"
import Footer from '../../src/component/Footer'
import Masthead from '../../src/component/Masthead'
import { useRouter } from 'next/router';
import origin from '../../src/constants';

export default function sipp() {
    return (<div>Hello</div>)
}

export const kajian = (param) => {
    return "/kajian/" + param;
}

export async function kajianLoader({ params }) {
    try {
        var res = await axios.get("https://raw.githubusercontent.com/nashihu/production_stuff/master/byi/kajian/list.json")
        if (res.data.constructor === Array) {
            var list = res.data.filter((e) => e.id === params.id)
            if (list.length > 0) {
                return list[0]
            }
        }
    } catch (e) {
        console.log('bye')
    }
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
    });
}

export function Kajian() {
    const { content, isImgPortrait, id } = useLoaderData()
    var img = `https://raw.githubusercontent.com/nashihu/production_stuff/master/byi/kajian/${id}.png`
    var type = 'text-center'
    var cwWidth = 12
    if (isImgPortrait) {
        type = 'row'
        cwWidth = 5
    }
    useEffect(() => {
        console.log(id)
    })
    return (<div>
        <Helmet />
        <Masthead />
        <div id="main-content" className=" mt-3 mx-3">
            <div className={`${type}`}>
                <img className='col-lg-7 mb-3' src={img ?? 'https://berkahsahabatyatim.com/assets/img/portfolio/fullsize/2.jpg'} alt="ok" style={{ "objectFit": "cover" }} width="100%" />
                <div className={`wrapDiv col-lg-${cwWidth}`}>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div></div>
        </div>
        <Footer />
    </div>)
}


function Helmet() {
    const title = "Kajian BYI"
    const desc = "Kajian Berkah Yatim Indonesia"
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
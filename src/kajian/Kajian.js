import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Masthead from '../component/Masthead';

export const kajian = (param) => {
    return `kajian/` + param;
}

export function kajianLoader({ params }) {
    switch (params.id) {
        case "1":
            return {
                content: `<p>🚨𝐒𝐀𝐍𝐓𝐔𝐍𝐀𝐍 &amp; DO'A BERSAMA</p> <p>Assalamualaikum Ayah Bunda Berkah Sahabat Yatim yang di Rahmati Allah</p> <p>Open DOnasi Untuk 300 Anak 𝗬𝗮𝘁𝗶𝗺 Terdampak Gempa Cianjur 😇🙏🏻</p> <p><br></p> <p>🎯 Hari Kamis, 𝟭𝟱 𝗗𝗲𝘀𝗲𝗺𝗯𝗲𝗿 𝟮𝟬𝟮𝟮</p> <p>⏰ Pukul 14.00 WIB</p> <p>🕌 Tempat, Masjid Hurun In</p> <p>Jl Limbangansari, Kp. Tipar Kaler Desa Limbangansari Cianjur</p> <p><a href="https://maps.app.goo.gl/ZKGunETcGxjfNALaA">https://maps.app.goo.gl/ZKGunETcGxjfNALaA</a></p> <p><br></p> <p>𝗠𝘂𝗹𝗮𝗶 𝟭𝟬 𝗥𝗶𝗯𝘂 &nbsp;sudah bisa ikut Partisipasi Untuk 𝐒𝐚𝐧𝐭𝐮𝐧𝐚𝐧 &amp; 𝐃𝐨𝐚 𝐁𝐞𝐫𝐬𝐚𝐦𝐚 𝐑𝐮𝐭𝐢𝐧 𝐁𝐞𝐫𝐤𝐚𝐡 𝐒𝐚𝐡𝐚𝐛𝐚𝐭 𝐘𝐚𝐭𝐢𝐦 - 𝗣𝗗 𝗦𝗮𝗹𝗶𝗺𝗮𝗵</p> <p>Melalui &nbsp;Rekening Resmi</p> <p>✅ BSI &nbsp;( 451 ) 7148434306</p> <p>a.n 𝗬𝗮𝘆𝗮𝘀𝗮𝗻 𝗕𝗲𝗿𝗸𝗮𝗵 𝗬𝗮𝘁𝗶𝗺 𝗜𝗻𝗱𝗼𝗻𝗲𝘀𝗶𝗮</p> <p><br></p> <p>Konfirmasi Donasi Wakaf, infak &amp; Sedekah klik <a href="wa.me/6281313350791">wa.me/6281313350791</a></p>`,
                img: 'https://raw.githubusercontent.com/nashihu/production_stuff/master/temp/WhatsApp%20Image%202022-12-10%20at%2012.06.38.jpeg',
                isImgPortrait: true,
            }
        default:
    }
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
    });
}

export function Kajian() {
    const { content, img, isImgPortrait } = useLoaderData()
    var type = 'text-center'
    var cwWidth = 12
    if (isImgPortrait) {
        type = 'row'
        cwWidth = 5
    }
    console.log(type)
    return (<div>
        <Header />
        <Masthead />
        <div id="main-content" className=" mt-3 mx-3">
            <div className={`${type}`}>
                <img className='col-lg-7 mb-3' src={img ?? 'https://berkahsahabatyatim.com/assets/img/portfolio/fullsize/2.jpg'} alt="ok" style={{ "object-fit": "cover" }} width="100%" />
                <div className={`wrapDiv col-lg-${cwWidth}`}>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div></div>
        </div>
        <Footer />
    </div>)
}
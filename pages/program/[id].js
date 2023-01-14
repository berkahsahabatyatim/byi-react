import Head from "next/head"
import React from "react"
import Footer from '../../src/component/Footer'
import Header from '../../src/component/Header'
import Masthead from '../../src/component/Masthead'

export const program = (param) => {
    return "/program/" + param
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts

    const posts = [
        { "id": "pondok", },
        { "id": "beasiswa", },
        { "id": "lahan", },
        { "id": "masjid", },
        { "id": "ekonomi", },
        { "id": "santripreneur", },
        { "id": "bantuan-bencana", },
    ]
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const _data = JSON.stringify(loader(params.id))
    const data = JSON.parse(_data)
    return { props: { data } }
}

function loader(params) {
    switch (params) {
        case "pondok":
            return {
                content: "Yayasan Berkah Yatim Indonesia hadir untuk mendukung pendidikan anak yatim dan dhuafa di sejumlah wilayah, terutama wilayah Cianjur dan Jawa Barat. Baik lewat bantuan pendidikan kepada anak maupun dukungan terhadap sarana dan prasarananya.\n\nSalah satunya adalah untuk memfasilitasi Pondok Tahfidz Quran di Tipar Limbangansari Cianjur.\n\nBantuan tersebut diberikan sebagai penyediaan sarana untuk pembelajaran Al-Quran sedang dalam proses pembebasan lahan. Sejauh ini, yayasan fokus dalam pemberdayaan anak yatim dan dhuafa untuk menjadi penghafal Al-Quran.\n\nKami berharap dapat membina santri Yatim dan Dhuafa dengan Gratis. Di antaranya ialah anak yatim dan dhuafa yang bermukim dan mendapatkan pendidikan diniyah. Selain itu, Pondok Tahfidz tersebut juga menjadi fasilitas masyarakat sekitar untuk digunakan sebagai kegiatan keagamaan.\n\nPondok Tahfidz itu adalah bagian dari keseharian mereka dan untuk warga sekitar yang tinggal di wilayah sana.",
                title: "PROGRAM PONDOK YATIM DHUAFA",
                bg: params
            }
        case "beasiswa":
            return {
                content: "Yayasan Berkah Yatim Indonesia hadir untuk mendukung pendidikan anak yatim dan dhuafa di sejumlah wilayah, terutama wilayah Cianjur dan Jawa Barat. Baik lewat bantuan pendidikan kepada anak maupun dukungan terhadap sarana dan prasarananya.\n\nSalah satunya adalah untuk memfasilitasi Pondok Tahfidz Quran di Tipar Limbangansari Cianjur.\n\nBantuan tersebut diberikan sebagai penyediaan sarana untuk pembelajaran Al-Quran sedang dalam proses pembebasan lahan. Sejauh ini, yayasan fokus dalam pemberdayaan anak yatim dan dhuafa untuk menjadi penghafal Al-Quran.\n\nKami berharap dapat membina santri Yatim dan Dhuafa dengan Gratis. Di antaranya ialah anak yatim dan dhuafa yang bermukim dan mendapatkan pendidikan diniyah. Selain itu, Pondok Tahfidz tersebut juga menjadi fasilitas masyarakat sekitar untuk digunakan sebagai kegiatan keagamaan.\n\nPondok Tahfidz itu adalah bagian dari keseharian mereka dan untuk warga sekitar yang tinggal di wilayah sana.",
                title: "BEASISWA PENDIDIKAN FORMAL UNTUK YATIM & DHUAFA",
                bg: params
            }
        case "lahan":
            return {
                content: "Yayasan Berkah Yatim Indonesia hadir untuk mendukung pendidikan anak yatim dan dhuafa di sejumlah wilayah, terutama wilayah Cianjur dan Jawa Barat. Baik lewat bantuan pendidikan kepada anak maupun dukungan terhadap sarana dan prasarananya.\n\nSalah satunya adalah untuk memfasilitasi Pondok Tahfidz Quran di Tipar Limbangansari Cianjur.\n\nBantuan tersebut diberikan sebagai penyediaan sarana untuk pembelajaran Al-Quran sedang dalam proses pembebasan lahan. Sejauh ini, yayasan fokus dalam pemberdayaan anak yatim dan dhuafa untuk menjadi penghafal Al-Quran.\n\nKami berharap dapat membina santri Yatim dan Dhuafa dengan Gratis. Di antaranya ialah anak yatim dan dhuafa yang bermukim dan mendapatkan pendidikan diniyah. Selain itu, Pondok Tahfidz tersebut juga menjadi fasilitas masyarakat sekitar untuk digunakan sebagai kegiatan keagamaan.\n\nPondok Tahfidz itu adalah bagian dari keseharian mereka dan untuk warga sekitar yang tinggal di wilayah sana.",
                title: "PEMBEBASAN LAHAN UNTUK PONDOK TAHFIDZ YATIM & DHUAFA",
                bg: params
            }
        case "masjid":
            return {
                content: "Yayasan Berkah Yatim Indonesia hadir untuk mendukung pendidikan anak yatim dan dhuafa di sejumlah wilayah, terutama wilayah Cianjur dan Jawa Barat. Baik lewat bantuan pendidikan kepada anak maupun dukungan terhadap sarana dan prasarananya.\n\nSalah satunya adalah untuk memfasilitasi Pondok Tahfidz Quran di Tipar Limbangansari Cianjur.\n\nBantuan tersebut diberikan sebagai penyediaan sarana untuk pembelajaran Al-Quran sedang dalam proses pembebasan lahan. Sejauh ini, yayasan fokus dalam pemberdayaan anak yatim dan dhuafa untuk menjadi penghafal Al-Quran.\n\nKami berharap dapat membina santri Yatim dan Dhuafa dengan Gratis. Di antaranya ialah anak yatim dan dhuafa yang bermukim dan mendapatkan pendidikan diniyah. Selain itu, Pondok Tahfidz tersebut juga menjadi fasilitas masyarakat sekitar untuk digunakan sebagai kegiatan keagamaan.\n\nPondok Tahfidz itu adalah bagian dari keseharian mereka dan untuk warga sekitar yang tinggal di wilayah sana.",
                title: "PEMBANGUNAN MASJID DAN PONDOK TAHFIDZ YATIM & DHUAFA",
                bg: params
            }
        case "ekonomi":
            return {
                content: "Pendekatan Pemberdayaan Masyarakat Terintegrasi dengan Program pengembangan Masyarakat Dhuafa mencakup aspek pembangunan ekonomi, sosial, budaya, lingkungan hidup, kepribadian/mental dan spriritual.\nKeberpihakan dengan mengutamakan yang terabaikan.\n\nPartisipatif : Masyarakat Dhuafa sasaran sebagai pelaku, aktor luar/pendamping hanya bertindak sebagai fasilitator dan katalisator proses.\n\nPeningkatan Kapasitas : Penguatan sumber-sumber daya (sources of power), kesempatan, pengetahuan, dan ketrampilan bagi Masyarakat Dhuafa agar mereka mampu meningkatkan kapasitasnya untuk menentukan masa depannya sendiri.\n\nKeberlanjutan (sustainability) : Program mampu dilanjutkan oleh Masyarakat Dhuafa sasaran.\n\nKeswadayaan : Sedapat mungkin menggunakan sumberdaya yang tersedia dari dalam Masyarakat Dhuafa itu sendiri, dan meminimalisasi penggunaan sumberdaya dari luar.",
                title: "PEMBERDAYAAN EKONOMI PONDOK TAHFIDZ YATIM & DHUAFA",
                bg: params
            }
        case "santripreneur":
            return {
                content: "Yayasan Berkah Yatim Indonesia hadir untuk mendukung pendidikan anak yatim dan dhuafa di sejumlah wilayah, terutama wilayah Cianjur dan Jawa Barat. Baik lewat bantuan pendidikan kepada anak maupun dukungan terhadap sarana dan prasarananya.\n\nSalah satunya adalah untuk memfasilitasi Pondok Tahfidz Quran di Tipar Limbangansari Cianjur.\n\nBantuan tersebut diberikan sebagai penyediaan sarana untuk pembelajaran Al-Quran sedang dalam proses pembebasan lahan. Sejauh ini, yayasan fokus dalam pemberdayaan anak yatim dan dhuafa untuk menjadi penghafal Al-Quran.\n\nKami berharap dapat membina santri Yatim dan Dhuafa dengan Gratis. Di antaranya ialah anak yatim dan dhuafa yang bermukim dan mendapatkan pendidikan diniyah. Selain itu, Pondok Tahfidz tersebut juga menjadi fasilitas masyarakat sekitar untuk digunakan sebagai kegiatan keagamaan.\n\nPondok Tahfidz itu adalah bagian dari keseharian mereka dan untuk warga sekitar yang tinggal di wilayah sana.",
                title: "SANTRIPRENEUR BERKAH SAHABAT YATIM",
                bg: params
            }
        case "bantuan-bencana":
            return {
                content: "Yayasan Berkah Yatim Indonesia hadir untuk mendukung pendidikan anak yatim dan dhuafa di sejumlah wilayah, terutama wilayah Cianjur dan Jawa Barat. Baik lewat bantuan pendidikan kepada anak maupun dukungan terhadap sarana dan prasarananya.\n\nSalah satunya adalah untuk memfasilitasi Pondok Tahfidz Quran di Tipar Limbangansari Cianjur.\n\nBantuan tersebut diberikan sebagai penyediaan sarana untuk pembelajaran Al-Quran sedang dalam proses pembebasan lahan. Sejauh ini, yayasan fokus dalam pemberdayaan anak yatim dan dhuafa untuk menjadi penghafal Al-Quran.\n\nKami berharap dapat membina santri Yatim dan Dhuafa dengan Gratis. Di antaranya ialah anak yatim dan dhuafa yang bermukim dan mendapatkan pendidikan diniyah. Selain itu, Pondok Tahfidz tersebut juga menjadi fasilitas masyarakat sekitar untuk digunakan sebagai kegiatan keagamaan.\n\nPondok Tahfidz itu adalah bagian dari keseharian mereka dan untuk warga sekitar yang tinggal di wilayah sana.",
                title: "BANTUAN BENCANA ALAM",
                bg: params
            }
        default:
    }
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
    });
}

export default function Program({ data }) {
    const { content, title, bg } = data
    return (<div>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content} />
            <meta property="og:image" content={bg} />
        </Head>
        <Header />
        <Masthead bg={bg} title={title} desc="" />
        <section className="page-section" id="services">
            <div className="container">
                <hr className="divider my-4" />
                <div className="row">
                    <div className="col-lg-12 col-md-12 text-justify">
                        <div className="mt-0">
                            <div className="just-line-break">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>)
}
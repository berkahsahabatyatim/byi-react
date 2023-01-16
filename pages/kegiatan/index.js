import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../../src/component/Footer'
import Masthead from '../../src/component/Masthead'
import origin from '../../src/constants';

export const kegiatan = '/kegiatan';

export default function Activity() {
    return (<>
        <Helmet />
        <Masthead />
        <section class="page-section bg-light" id="activity">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h3 class="mb-3">Kegiatan Yayasan BYI</h3>
                        <br />
                        <img src='/assets/img/kegiatan.jpeg' class="img-fluid col-lg-10 mb-3 " alt="alhamdulilah" />
                        <br />
                        <br />
                        {/* <div id="todo-list-example" >
                            <ul class="col-lg-12" >
                                <li
                                    is="todo-item"
                                    v-for="(todo, index) in todos"
                                    v-bind:key="todo.id"
                                    v-bind:title="todo.title"
                                    v-bind:type="todo.type"
                                    v-bind:datebyi="todo.datebyi"
                                    v-bind:presenter="todo.presenter"
                                    v-bind:imgUrl="todo.imgurl"
                                    v-on:remove="say(todo.id)"
                                ></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <br />
        </section>
        <Footer />
    </>)
}


function Helmet() {
    const title = "Kegiatan BYI"
    const desc = "Kegiatan Berkah Yatim Indonesia"
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
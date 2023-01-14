import React from 'react';
import Footer from '../../src/component/Footer'
import Header from '../../src/component/Header'
import Masthead from '../../src/component/Masthead'

export const kegiatan = '/kegiatan';

export default function Activity() {
    return (<>
        <Header />
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
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Masthead from '../component/Masthead';

export const kajian = (param) => {
    return `kajian/` + param;
}

export function kajianLoader({ param }) {
    switch (param.id) {
        case "1":
            return {
                content: 'ok'
            }
        default:
    }
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
    });
}

export function Kajian() {
    const { content } = useLoaderData()
    return (<div>
        <Header />
        <Masthead />
        <div id="main-content">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <Footer />
    </div>)
}
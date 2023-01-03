import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './app.styl';

import UniversalComponent from './components/UniversalComponent';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>App Component | React Universal</title>
                    <meta property="og:title" content="Yayasan Berkah Yatim Indonesia" />
                    <meta property="og:description" content="Membangun Generasi Qurani, Berkarakter Dan Visioner" />
                    <meta property="og:image"
                        content="https://raw.githubusercontent.com/nashihu/production_stuff/master/bsy_images/2020-01-24%2018.19.45.jpeg" />
                </Helmet>

                <h1>Welcome to React Fiber.</h1>
                <UniversalComponent name="getting-started" />
            </div>
        );
    }
}

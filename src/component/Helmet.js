import React, { Component } from "react"
import { Helmet } from "react-helmet";

class Helmets extends Component {
    render() {
        var { title, desc, img } = this.props;
        title = title !== undefined ? title : "Berkah Yatim Indonesia"
        desc = desc !== undefined ? desc : "Membangun Generasi Visioner"
        img = img !== undefined ? img : "https://raw.githubusercontent.com/nashihu/production_stuff/master/bsy_images/2020-01-24%2018.19.45.jpeg"
        return <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={img} />
        </Helmet>
    }
}

export default Helmets
import React, { Component } from "react";

class Masthead extends Component {

    render() {
        return (<header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Yayasan Berkah Yatim Indonesia</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">Membangun Generasi Qurani, Berkarakter Dan Visioner
                            Yang Berpegang Teguh Pada Al Qur'an & Sunnah</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href={this.props.target}>{this.props.buttonLabel}</a>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Masthead
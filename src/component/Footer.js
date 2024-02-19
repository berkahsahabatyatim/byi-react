import React, { Component } from "react";
class Footer extends Component {
    render() {
        const gmail = "/assets/img/gmail.png"
        const bsi = "/assets/img/bsi.png"
        const mandiri = "/assets/img/mandiri.jpg"
        const bni = "/assets/img/bni.jpg"
        const logo = "/assets/img/logobyi-white.jpeg"
        return <footer id="donate" className="wrapper site-footer mb-3 bg-light text-dark" role="contentinfo">
            <hr className="divider my-0 mb-5" />
            <section className="wrapper block-section footer-widget">
                <div >
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="contact-list col-md-5 mb-3">
                                        <aside id="custom_html-3" className="widget_text widget widget_custom_html">
                                            <h2 className="widget-title">Yayasan BYI</h2>
                                            <br />
                                            <div className="textwidget custom-html-widget">Berkah Yatim Indonesia adalah Yayasan Amal Non Profit Terdaftar di Kemenkumham RI yang fokus kepada pengelolaan dana sosial untuk Pondok tahfidz Al Quran Yatim dan Dhuafa di Indonesia.
                                                <br /><br />
                                                Sekretariat Pusat :
                                                <br />
                                                Jalan Limbangansari Kp. Tipar Kaler RT 02 RW 05 Desa Limbangansari Kec/Kab Cianjur Jawa Barat
                                                <br /><br />
                                                <div className="mb-1">
                                                    <a style={{ color: "42a5f5" }} href="https://wa.me/6281912002001">
                                                        <img className="mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/500px-WhatsApp.svg.png" width="25" height="25" alt="WA"></img> 0819-1200-2001
                                                    </a>
                                                </div>
                                                <a style={{ color: "42a5f5" }} className="mb-2 d-block" href="mailto:yayasanberkahyatimindonesia@gmail.com">
                                                    <img className="mr-1" src={gmail} height="20" alt="gmail"></img> yayasanberkahyatimindonesia@gmail.com
                                                </a>
                                                {/* <a style="color: #42a5f5;" href="${baseUrl}/toc.html">Syarat dan Ketentuan</a> */}
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="contact-list col-md-3  mb-3">
                                        <aside id="custom_html-4" className="widget_text widget widget_custom_html">
                                            <h2 className="widget-title">Donasi</h2>
                                            <br />
                                            <div className="textwidget custom-html-widget"><h6>Salurkan bantuan Anda melalui rekening resmi di bawah ini <br/>a.n <i>Yayasan Berkah Yatim Indonesia</i>:</h6>
                                                <br />
                                                <img className="mr-1" src={bsi} height="20" alt="BSI"></img>Rekening BSI (451): <br />
                                                <span className="js-copy-bsm-btn" >714 8434 306</span> <br />
                                                <img className="mr-1" src={mandiri} height="20" alt="Mandiri"></img>Mandiri (008): <br />
                                                <span className="js-copy-mandiri-btn" >182 000 664 5022</span> <br />
                                                <img className="mr-1" src={bni} height="20" alt="BNI"></img>Rekening BNI (009): <br />
                                                <span className="js-copy-bni-btn">118 0279 271</span> <br /><br />
                                                
                                                <h6>Salurkan zakat Anda melalui rekening <br/>UPZ Berkah Yatim Indonesia:</h6>
                                                <img className="mr-1" src={bsi} height="20" alt="BSI"></img>Rekening BSI (451): <br />
                                                <span className="js-copy-bsm-btn" >723 1936 167</span> <br />
                                            </div>
                                        </aside>
                                    </div>
                                    <img style={{ objectFit: "scale-down" }} src={logo} className="img-fluid col-md-4 mb-3 " alt="logo"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </footer>
    }
}

export default Footer
export default function SliderBar() {
    return (
        <div className="slider-bar" style={{'--slider-bar-bg': `url(${require('../img/slider-image.png').default})`}}>
            <div className="container">
                <div className="row your-crypto-re">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="slider-text">
                            <div className="slider-box">
                                <h2>Crypto Investing<br /><b>made <span>simple.</span></b> </h2>
                                <p>automatically round up transactions, payroll, bills, or credit payments and invest in crypto strategies</p>
                                <div className="slider-btn">
                                    <a href="#" className="slider-btn-hover"><i className="fab fa-apple"></i>  App Store</a>  <a href="#"> <i className="fab fa-google-play"></i> Google Play</a>
                                </div>
                                {/* <!--                         <div className="watch-btn">
                                    <a href="#"><i className="fas fa-play"></i> Watch How It Works </a>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="slid-mobile">
                            <div className="slid-mobile1">
                                <img src={require('../img/slider-mobile.png').default}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
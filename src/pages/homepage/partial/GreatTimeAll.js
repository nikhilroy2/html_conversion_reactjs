export default function GreatTimeAll() {
    return (
        <div className="great-time-all" id="features" style={{
            '--great-time-all-bg': `url(${require('../img/Vector1.png').default})`,
            '--great-time-all-before-bg': `url(${require('../img/background-victor.png').default})`
            }}>
            <div className="container">
                <h2>Now is a great time to start...<br />
                    your future-self with thank you
                </h2>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="great-time-1">
                            <img src={require('../img/great-time-1.png').default} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="great-tabing-divmain">
                            <div className="great-tabing-div">
                                <img src={require('../img/icon_automation_1.png').default} alt="" />
                                <p>Automation helps you grow your account without the hassle.</p>
                            </div>
                            <div className="great-tabing-div great-tabing-divb">
                                <img src={require('../img/icon_coins_2.png').default} alt="" />
                                <p>Your funds are kept in your own wallet with our amazing exchange partner</p>
                            </div>
                            <div className="great-tabing-div great-tabing-divb">
                                <img src={require('../img/icon_control_3.png').default} alt="" />
                                <p>This means that you have full control, nope...we don't lock up your crypto. </p>
                            </div>
                            <div className="great-tabing-div great-tabing-divb">
                                <img src={require('../img/icon_safe_3.png')} alt="" />
                                <p>Grit makes it safe, secure, and hassle free to buy crypto </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row your-crypto-row your-crypto-re">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="your-crypto1">
                            <div className="your-crypto">
                                <h2>Choose your roundup type &amp; choose your crypto.</h2>
                                <p>Want to grow faster? You can choose traditional, 50 cent,
                                    or $1 round ups for every transaction.
                                </p>
                                <ul>
                                    <li  style={{'--crypto-after-bg': `url(${require('../img/stars.png')})`}}>Choose your round-up style</li>
                                    <li  style={{'--crypto-after-bg': `url(${require('../img/stars.png')})`}}>Choose your crypto</li>
                                    <li  style={{'--crypto-after-bg': `url(${require('../img/stars.png')})`}}>Pause your roundups anytime</li>
                                </ul>
                                <a href="#">Get Started </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="great-time-1">
                            <img src={require('../img/your_crypto.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row your-crypto-row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="great-time-1">
                            <img src={require('../img/your_crypto2.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="your-crypto1">
                            <div className="your-crypto">
                                <h2>Buy more crypto anytime you like! </h2>
                                <p>Automation is great, but sometimes you just need
                                    to up your investment game and buy more right
                                    now! Rest assured, we got you covered there too.
                                </p>
                                <ul>
                                    <li>Buy more crypto anytime</li>
                                    <li>Up to $10K per transaction</li>
                                    <li>You're in control</li>
                                </ul>
                                <a href="#">Get Started </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row your-crypto-row your-crypto-re">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="your-crypto1">
                            <div className="your-crypto">
                                <h2>Your phone, and bank, that's all you need!</h2>
                                <p>All the power of automation in your pocket. Roundup,
                                    Buy More and withdraw anytime with ease.
                                </p>
                                <div className="slider-btn crypto-btn">
                                    <a href="#" className="slider-btn-hover"><i className="fab fa-apple"></i>  App Store</a>  <a href="#"> <i className="fab fa-google-play"></i> Google Play</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="great-time-1">
                            <img src={require('../img/your_crypto3.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
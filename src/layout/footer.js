export default function FooterView() {
    return (
        <footer style={{ '--footer-bg': `url(${require('../static/img/footer-img.jpg').default})` }}>
            <div className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <h4>Press</h4>
                            <ul>
                                <li><a href="#">Product Hunt</a></li>
                                <li><a href="#">CES</a></li>
                                <li><a href="#">CNBC</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="news-letter">
                                <h4>Subscribe</h4>
                                <p>Subscribe to our newsletter &amp; stay updated</p>
                                <form>
                                    <input type="text" name="" placeholder="Your Email*" />
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h5>© 2020 All Rights Reserved Grit, Inc. | <a href="#">Privacy &amp; Policy</a> </h5>
                </div>
            </div>
        </footer>
    )
}
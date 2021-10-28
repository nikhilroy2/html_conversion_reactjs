export default function FaqSection() {
    return (
        <div className="faq-section" id="faq" style={{'--faq-section-bg': `url(${require('../img/faq-backgound.png')})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="faq-box1">
                            <div className="faq-box">
                                <h2>Frequently asked questions</h2>
                                <p>You have the questions...we have the answers </p>
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Support</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Fees</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">General</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                <div id="accordion" className="faq-section-accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How to contact with Customer Service?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show faq-collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                You can find the support bubble at the bottom right of this website, or in the app under settings.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How delete my account?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse faq-collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                You can delete your account in app settings by verifying your identity. You can also contact customer support.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <div id="accordion" className="faq-section-accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                                                    Does Grit keep my cryptocurrency?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne1" className="collapse show faq-collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                Grit doesn’t hold any of your funds or cryptocurrency. We use a third party custodian to keep your coins more safe than a pirates treasure map. You can also send your coins to your preferred wallet or bank account at any time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                                    Is there any customer pricing system?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo2" className="collapse faq-collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                We charge a flat fee of $5 per month. This allows us to keep transaction rates lower than anyone else and provide all the amazing features within the app.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">


                                <div id="accordion" className="faq-section-accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne">
                                                    How much will I be able to make with Grit?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne11" className="collapse show faq-collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                Let’s say you chose to round up $0.50 cents on every purchase; You would invest an average of $1.50/day which is $45/month. If you used Grit for one month in 2013, you would have made $6787. :)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo22" aria-expanded="false" aria-controls="collapseTwo">
                                                    Can I send my crypto to an external wallet source?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo22" className="collapse faq-collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                Of course. You can withdraw your funds in fiat or crypto to either a bank account or an external wallet that supports the type of crypto.
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
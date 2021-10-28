export default function HeaderView() {

    return (
        <header className="master-header container-fluid row-eq-height">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html"><img src={require('../static/img/logo.png').default} alt="" /> </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><img src="images/menu-bar.png" alt="" /></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#how-it">How It Works</a></li>
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
                            <li className="nav-item"><a className="nav-link" href="log_in.html">Sign in</a></li>
                            <li className="nav-item"><a className="nav-link get-btn" href="sign_up.html">Get Started</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
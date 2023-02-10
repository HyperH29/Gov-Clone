import React from "react"

// This footer was ported from https://gist.github.com/Luke-zhang-04/7cb523899ca4044f805f0d0909e4c5c1

// Standard footer for the website link above
const Footer = () => <footer className="page-footer font-small blue pt-4 border-5 border-top border-primary">
    <div className="container-fluid text-center bg-light text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase p-1 fw-bold">Thank You for Visiting</h5>
                <img style={{width: "100%", height: "400px", padding: "20px"}} src={"https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt={"Lion for unsplash"}/>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase p-1">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase p-1">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>

                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023  Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        <br/>
        <a  href="https://icons8.com/icon/82666/estimate">Estimate</a> icons by <a  href="https://icons8.com">Icons8</a>
        <p>Created using React and React-Bootstrap by H.K Benjamin</p>
        <a href="https://www.gov.uk/">Gov.UK</a>
    </div>
</footer>

export default Footer


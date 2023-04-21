import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
class Login extends Component {
    render() {
        return (<div>
            <Header />
            <main>
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Login</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="login_part ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-lg-6 col-md-6">
                                <div className="card shadow">
                                    <div className="login_part_form">
                                        <div className="login_part_form_iner">
                                            <h3>Welcome Back ! <br />
                                                Please Sign in now</h3>
                                            <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="text" className="form-control" id="name" name="name" defaultValue placeholder="Username" />
                                                </div>
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Password" />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <button type="submit" value="submit" className="btn_3">
                                                        log in
                                                    </button>
                                                    <Link className="lost_pass" to="/Register">Sign UP</Link> &nbsp;
                                                    <Link className="lost_pass" to="/Forgot_password">forget password?</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>)
    }
}
export default Login
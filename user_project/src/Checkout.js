import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
class Checkout extends Component {
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
                                        <h2>Checkout</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="checkout_area section_padding">
                    <div className="container">
                        <div className="billing_details">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Billing Details</h3>
                                    <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="first" name="name" />
                                            <span className="placeholder" data-placeholder="First name" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="last" name="name" />
                                            <span className="placeholder" data-placeholder="Last name" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" id="company" name="company" placeholder="Company name" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="number" name="number" />
                                            <span className="placeholder" data-placeholder="Phone number" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="email" name="compemailany" />
                                            <span className="placeholder" data-placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <select className="country_select">
                                                <option value={1}>Country</option>
                                                <option value={2}>Country</option>
                                                <option value={4}>Country</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="add1" name="add1" />
                                            <span className="placeholder" data-placeholder="Address line 01" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="add2" name="add2" />
                                            <span className="placeholder" data-placeholder="Address line 02" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="city" name="city" />
                                            <span className="placeholder" data-placeholder="Town/City" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <select className="country_select">
                                                <option value={1}>District</option>
                                                <option value={2}>District</option>
                                                <option value={4}>District</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" />
                                        </div>
                                        <input type="submit" className="btn btn-denger text-white" defaultValue="Place order" />
                                    </form>
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
export default Checkout
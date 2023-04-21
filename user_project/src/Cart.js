import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
class Cart extends Component {
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
                                        <h2>Cart List</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="cart_area section_padding">
                    <div className="container">
                        <div className="cart_inner">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src="assets/img/gallery/card1.png" alt />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>Minimalistic shop for multipurpose use</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$360.00</h5>
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                <h5>$720.00</h5>
                                            </td>
                                        </tr>
                                        <tr><td />
                                            <td />
                                            <td>
                                                <h5>$2160.00</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="checkout_btn_inner float-right">
                                    <Link className="btn_1" to="/">Continue Shopping</Link>
                                    <Link className="btn_1 checkout_btn_1" to="/checkout">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </main>

            <Footer />
        </div>)
    }
}
export default Cart
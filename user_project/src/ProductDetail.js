import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
class ProductDetail extends Component {
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
                                        <h2>Detail</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_image_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="product_img_slide owl-carousel">
                                    <div className="single_product_img">
                                        <img src="./theme/assets/img/gallery/gallery1.png" alt="#" className="img-fluid" />
                                    </div>
                                    <div className="single_product_img">
                                        <img src="./theme/assets/img/gallery/gallery01.png" alt="#" className="img-fluid" />
                                    </div>
                                    <div className="single_product_img">
                                        <img src="./theme/assets/img/gallery/gallery1.png" alt="#" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="single_product_text text-center">
                                    <h2>Foam filling cotton slow <br />
                                        rebound pillows</h2>
                                    <p>
                                        Credibly innovate granular internal or organic sources whereas high standards in web-readiness.
                                        Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically
                                        synthesize integrated schemas. with optimal networks.
                                    </p>
                                    <div className="card_area">
                                        <div className="product_count_area">
                                            <p>Quantity</p>
                                            <div className="product_count d-inline-block">
                                                <span className="product_count_item inumber-decrement"> <i className="ti-minus" /></span>
                                                <input className="product_count_item input-number" type="text" defaultValue={1} min={0} max={10} />
                                                <span className="product_count_item number-increment"> <i className="ti-plus" /></span>
                                            </div>
                                            <p>$5</p>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link to="#" className="btn_3">add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            </main>

            <Footer />
        </div>)
    }
}
export default ProductDetail
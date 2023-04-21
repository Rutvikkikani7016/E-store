import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
class Category extends Component {
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
              <h2>Products</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="popular-items">
    <div className="container">
      <div className="row product-btn justify-content-between mb-40">
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="theme/assets/img/gallery/popular1.png" alt />
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular1.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular2.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular3.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular4.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular5.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular6.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular1.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular2.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular3.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular4.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular5.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-popular-items mb-50 text-center">
                <div className="popular-img">
                  <img src="assets/img/gallery/popular6.png" alt />
                  <div className="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div className="favorit-items">
                    <span className="flaticon-heart" />
                  </div>
                </div>
                <div className="popular-caption">
                  <h3><Link to= "product_details.html">Thermo Ball Etip Gloves</Link></h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="shop-method-area">
    <div className="container">
      <div className="method-wrapper">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-method mb-40">
              <i className="ti-package" />
              <h6>Free Shipping Method</h6>
              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-method mb-40">
              <i className="ti-unlock" />
              <h6>Secure Payment System</h6>
              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-method mb-40">
              <i className="ti-reload" />
              <h6>Secure Payment System</h6>
              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
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
export default Category
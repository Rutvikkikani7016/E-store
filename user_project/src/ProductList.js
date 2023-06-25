import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    var url = new URL(window.location.href);
    var CurrentPage = url.href;
    var position_of_list_slash = CurrentPage.lastIndexOf("/");
    var categoryid = CurrentPage.substr(position_of_list_slash + 1);
    categoryid = 0;
    console.log(categoryid);
    var url = `https://www.theeasylearnacademy.com/shop/ws/product.php?categoryid=${categoryid}`;
    var self = this;
    axios({
      method: 'get',
      url: url,
      ResponseType: 'json'
    }).then(function (response) {
     // console.log(response.data);
      if (response.data[0]['error'] !== 'no') {
        alert(response.data['error'])
      }
      else if (response.data[1]['total'] == 0) {
        alert('No Product Found')
      }
      else {
        response.data.splice(0, 2);
        self.setState({
          products: response.data
        })
      }
    })
  }
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

                  {this.state.products.map(function (product) {
                    return <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="single-popular-items mb-50 text-center">
                        <div className="popular-img">
                          <img src={"https://theeasylearnacademy.com/shop/images/product/" + product.photo} alt='no image avelable ' />
                          <div className="favorit-items">
                            <span className="flaticon-heart" />
                          </div>
                        </div>
                        <div className="popular-caption">
                          <h3><Link to={"/product_detail/" + product.id}>{product.title} - &#8377;{product.price}</Link></h3>
                        </div>
                      </div>
                    </div>
                  })}
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
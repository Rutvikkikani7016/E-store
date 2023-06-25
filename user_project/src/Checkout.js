import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';
import Cookies from 'js-cookie';
import Footer from './Footer'
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    Checkout = (e) => {
        console.log(this.state);
        //usersid,fullname,address1,address2,mobile,city,pincode,remarks (required)
        var ApiUrl = "https://www.theeasylearnacademy.com/shop/ws/checkout.php";
        var form = new FormData();
        form.append('usersid',Cookies.get('id'));
        form.append('fullname',this.state.fullname);
        form.append('address1',this.state.address1);
        form.append('address2',this.state.address2);
        form.append('mobile',this.state.mobile);
        form.append('city',this.state.city);
        form.append('pincode',this.state.pincode);
        form.append('remarks',this.state.remarks);
        axios({
            url: ApiUrl,
            method: 'post',
            responseType: 'json',
            data: form
        }).then((response) => {
            var data = response.data
            console.log(data);
            /*
                1) [{"error":"input is missing"}]
                2) [{"error":"no"},{"success":"no"},{"message":"cart is empty"}]
                3) [{"error":"no"},{"success":"no"},{"message":"following items are out of stock \ndell laptop"}]
                4) [{"error":"no"},{"success":"yes"},{"message":"order placed successfully with orderid 4"}]
            */
            var error = data[0]['error'];
            if(error != "no")
                alert(error);
            else 
            {
                alert(data[2]['message']);
                if(data[1]['success'] == 'yes')
                {
                    window.location = '/';
                }
            }
        });
        e.preventDefault();
    }
    ChangeValue = (e) => {
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
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
                                        <h2>Checkout</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="checkout_area section_padding">
                    <div className="container">
                        <div className="row">

                            <div className='card-body'>
                                <div className="col-lg-12">
                                    <h2>Billing Details</h2><br />
                                    <form className="row contact_form" action="#" method="post" onSubmit={this.Checkout}>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="fullname" name="fullname" onChange={this.ChangeValue} />
                                            <span className="placeholder" data-placeholder="Full name" />
                                        </div>

                                        {/* <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="last" name="name" />
                                            <span className="placeholder" data-placeholder="Last name" />
                                        </div> */}

                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="mobile" name="mobile" onChange={this.ChangeValue} />
                                            <span className="placeholder" data-placeholder="Phone number" />
                                        </div>

                                        {/* <div className="col-md-6 form-group p_star">
                                                <input type="text" className="form-control" id="email" name="compemailany" />
                                                <span className="placeholder" data-placeholder="Email Address" />
                                            </div> */}

                                        {/* <div className="col-md-6 form-group p_star">
                                                <select className="country_select">
                                                    <option value={1}>Country</option>
                                                    <option value={2}>Country</option>
                                                    <option value={4}>Country</option>
                                                </select>
                                            </div> */}

                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="address1" name="address1" onChange={this.ChangeValue} />
                                            <span className="placeholder" data-placeholder="Address 1" />
                                        </div>

                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="address2" name="address2" onChange={this.ChangeValue} />
                                            <span className="placeholder" data-placeholder="Address 2" />
                                        </div>

                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="city" name="city" onChange={this.ChangeValue} />
                                            <span className="placeholder" data-placeholder="Town/City" />
                                        </div>

                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="pincode" name="pincode" placeholder="Postcode/ZIP" onChange={this.ChangeValue} />
                                        </div>

                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="remarks" name="remarks" placeholder="remarks" onChange={this.ChangeValue} />
                                        </div>

                                        <button type="submit" className="btn btn-denger text-white" defaultValue="Place order" on>Submit Order</button>

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
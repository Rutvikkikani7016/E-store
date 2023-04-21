import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
class ChangePassword extends Component
{
    render()
    {
        return(<div>
            <Header />
            <main>
  <div className="slider-area ">
    <div className="single-slider slider-height2 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Change Password</h2>
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
                <h3>Change Your Password</h3>
                <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                  <div className="col-md-12 form-group p_star">
                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Current Password" />
                  </div><div className="col-md-12 form-group p_star">
                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="New Password" />
                  </div><div className="col-md-12 form-group p_star">
                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Confirm  New Password" />
                  </div>
                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="btn_3">
                      Save Changes
                    </button>
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
export default ChangePassword
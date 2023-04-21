import React, { Component } from 'react'
class AdminChangePassword extends Component
{
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-6 offset-3">
            <div className="card shadow">
              <div className="card-header text-bg-primary">
                <h2>Change Password</h2>
              </div>
              <div className="card-body">
                <form action method="post">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="Password" placeholder="current Password" />
                    <label htmlFor="Password">Current Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="new_password" placeholder="New Password" name="new_password" />
                    <label htmlFor="new_Password">New Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="Confirm_password" placeholder="Confirm Password" name="Confirm_password" />
                    <label htmlFor="Confirm_password">Confirm Password</label>
                  </div>
                  <button type="button" className="btn btn-primary">Svae Changes</button> <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default AdminChangePassword
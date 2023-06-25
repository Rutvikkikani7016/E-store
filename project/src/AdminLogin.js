import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class AdminLogin extends Component
{
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-6 offset-3">
            <div className="card shadow">
              <div className="card-header text-bg-primary">
                <h2>Admin Login</h2>
              </div>
              <div className="card-body">
                <form action method="post">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button type="button" className="btn btn-primary">Login</button> <br />
                  <p className="text-center"><Link to="/admin-forgot-password">Recover Account</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default AdminLogin
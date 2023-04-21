import React, { Component } from 'react'
class AdminOrder extends Component
{
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Product Orders</div>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Orders</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="5%">Sr No</th>
                      <th width="10%">Customer Detail</th>
                      <th width="15%">Date</th>
                      <th width="5%">Amount</th>
                      <th width="8%">Status</th>
                      <th width="5%">Order Detail</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>rutvik kikani <br />
                        bhavnagar gujarat
                      </td>
                      <td>01-01-2023</td>
                      <td>
                        225000
                      </td>
                      <td>
                        pending
                      </td>
                      <td>
                        <a href="./admin-order-detail">
                          <i className="fa fa-eye fa-2x" />
                        </a> 
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default AdminOrder
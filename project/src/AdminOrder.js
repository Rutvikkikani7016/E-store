import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
class AdminOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }
  componentDidMount() {
    /*
    [
      {"error":"no"},
      {"total":2},
      {"id":"2","fullname":"nikunj bhatt","address1":"hill drive","address2":"eva subhi","city":"baroda","pincode":"364001","amount":"45600"},
      {"id":"1","fullname":"ankit patel","address1":"hill drive","address2":"opp aksharwadi ","city":"bhavnagar","pincode":"364001","amount":"12500"}
    ]
    */
    var self = this;
    axios({
      method: 'get',
      url: 'http://theeasylearnacademy.com/shop/ws/orders.php',
      responseType: 'json'
    })
      .then(function (response) {
        console.log(response.data)
        var error = response.data[0].error;
        if (error !== "no") {
          alert(error);
        }
        else {
          var total = response.data[1].total;
          if (total === 0) {
            alert('No data found');
          }
          else {
            response.data.splice(0, 2);
            self.setState({
              orders: response.data
            });
          }
        }
      });
  }
  render() {
    return (<div className="container">
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
                  {this.state.orders.map(function (order) {
                     return <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.fullname} <br />
                          {order.address1}<br />
                          {order.address2}<br />
                          {order.city} - {order.pincode}
                        </td>
                        <td>01-01-2023</td>
                        <td>
                          {order.amount}
                        </td>
                        <td>
                          pending
                        </td>
                        <td>
                          <a href={"./admin-order-detail/" + order.id}>
                            <i className="fa fa-eye fa-2x" />
                          </a>
                        </td>
                      </tr>
                    
                  })}

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
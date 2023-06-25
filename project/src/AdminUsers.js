import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    /*
    [
     0 {"error":"no"},
     1 {"total":2},
     2 {"id":"4","email":"ankit3395@gmail.com","mobile":"1234567891"},
     3 {"id":"3","email":"ankit3385@gmail.com","mobile":"1234567890"}
    ]
    */


    var self = this;
    axios({
      method: 'get',
      url: 'http://theeasylearnacademy.com/shop/ws/users.php',
      responseType: 'json'
    }).then(function (response) {
      console.log(response.data);
      var error = response.data[0].error;
      if (error !== "no") {
        alert(error);
      }
      else {
        var total = response.data[1].total;
        console.log(error, total);
        if (total == 0) {
          alert('no users found');
        }
        else {
          response.data.splice(0, 2);
          console.log(response.data);
          self.setState({
            users: response.data
          });
        }
      }
    });
  }
  render() {
    return (<div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="h1 border-bottom pb-2 mb-2">Users Details</div>
          <div className="card">
            <div className="card-header text-bg-primary">
              <h3>Users</h3>
            </div>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <tbody><tr>
                  <th width="5%">Sr No</th>
                  <th>Email</th>
                  <th width="40%">Mobilno</th>
                  <th width="15%">Order</th>
                </tr>
                  {this.state.users.map(function (user) {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.email}r</td>
                        <td>{user.mobile}</td>
                        <td>
                          <Link to="#"><i className="fa fa-eye fa-2x" /></Link>
                        </td>
                      </tr>
                    )
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
export default AdminUsers
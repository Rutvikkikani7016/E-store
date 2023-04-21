import React, { Component } from 'react'
class AdminProduct extends Component
{
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
            <p className="text-end">
              <a href="/admin-insert-product" className="btn btn-primary">Add Product</a>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Product</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                      <th width="5%">Sr No</th>
                      <th width="10%">Category</th>
                      <th width="15%">Title</th>
                      <th width="5%">Photo</th>
                      <th width="8%">Price</th>
                      <th width="5%">Stock</th>
                      <th>Details</th>
                      <th width="8%">Opration</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Leptop</td>
                      <td>IPhone -13</td>
                      <td>
                        <img src="https://picsum.photos/100" className="img-fluid" />
                      </td>
                      <td>
                        125000
                      </td>
                      <td>
                        25
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum laborum ad culpa
                        sunt qui et magnam sapiente harum quasi eveniet.
                      </td>
                      <td>
                        <a href="admin-edit-product"><i className="fa fa-pencil fa-2x" /></a> &nbsp;
                        <a href="#"><i className="fa-sharp fa-solid fa-trash-can fa-2x" /></a>
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
export default AdminProduct
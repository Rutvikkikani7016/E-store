import React, { Component } from 'react'
class AdminEditProduct extends Component
{
    render()
    {
        return(<div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
            <div className="card shadow">
              <div className="card-header text-bg-primary">
                <h3>Edit Product</h3>
              </div>
              <div className="card-body">
                <form action>
                  <div className="row">
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="title" placeholder="Category title" name="title" />
                        <label htmlFor="title">New Category title</label>
                      </div>
                    </div>
                    <div className="col">
                      <select className="form-select form-select-lg" aria-label="Large select">
                        <option selected>Select New Category</option>
                        <option>mobil</option>
                        <option>leptop</option>
                        <option>tab</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="photo" className="form-label"><b> Select New Photo</b></label>
                      <input className="form-control" type="file" id="photo" name="photo" accept="image/*" />
                    </div>
                    <div className="col mt-4">
                      <input type="number" className="form-control" id="price" placeholder="Edit Product price" name="price" />
                      {/* <label for="title">Category title</label> */}
                    </div>
                    <div className="col mt-4">
                      <input type="number" className="form-control" id="price" placeholder="Edit Product Stock" name="price" />
                      {/* <label for="title">Category title</label> */}
                    </div>
                  </div><br />
                  <div className="row">
                    <div className="col">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{"height":"100px"}} defaultValue={""} />
                        <label htmlFor="floatingTextarea">Edit Details</label>
                      </div>
                    </div>
                    <div className="col pt-4 d">
                      <button type="submit" className="btn btn-primary w-100">Save Changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
export default AdminEditProduct
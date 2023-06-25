import React, { Component } from 'react'
class AdminEditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /*
        usage: used to insert a update product 
        how to call : https://www.theeasylearnacademy.com/shop/ws/product.php?productid=48
        http://localhost/flutter_php/ws/insert_product.php?name=abc&price=100&stock=11&photo=photo.jpg&detail=xyz&productid=1
        output :
        [{"error":"input is missing"}] 
        [{"error":"no"},{"success":"yes"},{"message":"product updated"}]
        input : title,photo,price,stock,detail,productid (required) 
      */
      title:'',
      photo:'',
      price:'',
      stock:'',
      detail:'',
      detail:'',
      productid:''
    }
  }
  componentDidMount(){
    console.log('componentdid mounting...')
  }
  render() {
    return (<div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
          <div className="card shadow">
            <div className="card-header text-bg-primary">
              <h3>Edit Product</h3>
            </div>
            <div className="card-body">
              <form action onSubmit={this.Updatevalue}>
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
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ "height": "100px" }} defaultValue={""} />
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
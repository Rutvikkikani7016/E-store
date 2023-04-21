import { Link } from "react-router-dom";
function Header()
{
    return(<div>
        <header>
          <div className="header-area">
            <div className="main-header header-sticky">
              <div className="container-fluid">
                <div className="menu-wrapper">
                  <div className="logo">
                    <Link to="/"><img src="theme/assets/img/logo/logo.png" alt /></Link>
                  </div>
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/product-list'>shop</Link></li>
                        <li className="hot"><Link to="#">Latest</Link>
                          <ul className="submenu">
                            <li><Link to="/product-category"> Product Category</Link></li>
                            <li><Link to="/product_detail"> Product Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="blog.html">Blog</Link>
                          <ul className="submenu">
                            <li><Link to="blog.html">Blog</Link></li>
                            <li><Link to="blog-details.html">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="#">Pages</Link>
                          <ul className="submenu">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/Cart">Cart</Link></li>
                            <li><Link to="/change-password">Change Password</Link></li>
                            <li><Link to="/order-confirmation">Confirmation</Link></li>
                            <li><Link to="/Checkout">Product Checkout</Link></li>
                          </ul>
                        </li>
                        <li><Link to="contact.html">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right">
                    <ul>
                      <li>
                        <div className="nav-search search-switch">
                          <span className="flaticon-search" />
                        </div>
                      </li>
                      <li> <Link to="/login"><span className="flaticon-user" /></Link></li>
                      <li><Link to="/cart"><span className="flaticon-shopping-cart" /></Link> </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>)
}
export default Header;
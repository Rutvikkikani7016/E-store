import { Link } from "react-router-dom";
import Cookies from "js-cookie";
function Header()
{
    let isLoggedIn = Cookies.get('isLoggedIn');
    let temp = null;
    if(isLoggedIn === undefined)
    {
      temp = (<>
      <li><Link to="#"><i className="fa-solid fa-user" /></Link>
        <ul className="submenu">
        <li><Link to="/register"><i className="fa-solid fa-right-to-bracket" /> Register</Link> </li> 
        <li> <Link to="/login"><span className="flaticon-user" /> sign in</Link></li>
        </ul>
      </li>
      </>)
    }
    else 
    {
      temp = (<><li><Link to="/Checkout">Checkout</Link></li>
      <li><Link to="/cart"><i className="flaticon-shopping-cart" />Cart</Link> </li>
      <li><Link to="#"><i className="fa-solid fa-user" /></Link>
        <ul className="submenu">
          <li> <Link to="/logout"><i className="fa-solid fa-right-from-bracket" /> Logout</Link></li>
          <li><Link to="/change-password"><i className="fa-sharp fa-solid fa-key" /> Change Password</Link> </li>
        </ul>
      </li>
      </>)
    }
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
                        <li><Link to='/product-category'>shop</Link></li>
                        {temp}
                      </ul>
                    </nav>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </header>
    </div>)
}
export default Header;



// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";
// function Header() {
//   let isLoggedIn = Cookies.get('isLoggrdin');
//   let temp = null;
//   if (isLoggedIn  === undefined) {
//     temp = (<><li><Link to="/register">Register</Link></li> <li> <Link to="/login"><span className="flaticon-user" /></Link></li></>)
//   }
//   else {
//     temp = (<> <li><Link to="/change-password">Change Password</Link></li><li><Link to="/cart"><span className="flaticon-shopping-cart" /></Link> </li></>)
//   }
//   return (<div>
//     <header>
      // <div className="header-area">
      //   <div className="main-header header-sticky">
      //     <div className="container-fluid">
      //       <div className="menu-wrapper">
      //         <div className="logo">
      //           <Link to="/"><img src="theme/assets/img/logo/logo.png" alt /></Link>
      //         </div>
//               <div className="main-menu d-none d-lg-block">
//                 <nav>
//                   <ul id="navigation">
//                     <li><Link to='/'>Home</Link></li>
//                     <li><Link to='/product-category'>shop</Link></li>

//                   <li><Link to="#">Pages</Link>
//                     <ul className="submenu">
                      
//                       <li><Link to="/order-confirmation">Confirmation</Link></li>
//                       <li><Link to="/Checkout">Product Checkout</Link></li>
//                     </ul>
//                   </li>
//                   <li><Link to="/logout">Logout</Link></li>
//                   <li><Link to="contact.html">Contact</Link></li>
//                 </ul>
//               </nav>
//             </div>
//             <div className="header-right">
//               <ul>
//                {temp}
//                <li>
//                   <div className="nav-search search-switch">
//                     <span className="flaticon-search" />
//                   </div>
//                 </li>
                
//               </ul>
//             </div>
//           </div>
//           <div className="col-12">
//             <div className="mobile_menu d-block d-lg-none" />
//           </div>
//         </div>
//       </div>
//   </div>
//     </header >
//   </div >)
// }
// export default Header;
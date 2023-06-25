import { Link, Outlet } from "react-router-dom"
var Layout = () => {
    return (<div>
        <nav className="navbar bg-primary navbar-expand-lg  ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white dispaly-2" to="/admin-home"><h2><b>E-store</b></h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-category">Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-users">users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-change-password">Change Password</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-forgot-password">Forgot Password</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin-login">login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>);
}
export default Layout;
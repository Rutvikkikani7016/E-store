import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './AdminLayout'
import AdminHome from './AdminHome'
import AdminCategory from './AdminCategory'
import AdminInsertCategory from './AdminInsertCategory';
import AdminEdittCategory from './AdminEdittCategory';
import AdminProduct from './AdminProduct'
import AdminInsertProduct from './AdminInsertProduct'
import AdminEditProduct from './AdminEditProduct'
import AdminUsers from './AdminUsers'
import AdminOrder from './AdminOrder'
import AdminOrderDetail from './AdminOrderDetail'
import AdminLogin from './AdminLogin'
import AdminChangePassword from './AdminChangePassword'
import AdminForgotPassword from './AdminForgotPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/admin-home' element={<AdminHome />} />
          <Route path='/admin-category' element={<AdminCategory />} />
          <Route path='/admin-insert-category' element={<AdminInsertCategory />} />
          <Route path='/admin-edit-category' element={<AdminEdittCategory />} />
          <Route path='/admin-product' element={<AdminProduct />} />
          <Route path='/admin-insert-product' element={<AdminInsertProduct />} />
          <Route path='/admin-edit-product' element={<AdminEditProduct />} />
          <Route path='/admin-users' element={<AdminUsers />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-orders' element={<AdminOrder />} />
          <Route path='/admin-order-detail' element={<AdminOrderDetail />} />
          <Route path='/admin-change-password' element={<AdminChangePassword />} />
          <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
root.render(<MyRouter />);


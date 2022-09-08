import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ContactoForm from './Components/ContactForm/ContactoForm';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
// import AboutUs from './Components/AboutUs/AboutUs';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NotFound from './Components/NotFound/NotFound';

import UserLogin from './Components/User/UserLogin/UserLogin';
import UserRegister from './Components/User/UserRegister/UserRegister';
import UserFavorites from './Components/User/UserFavorites/UserFavorites';
import UserPersonalInfo from './Components/User/UserPersonalInfo/UserPersonalInfo';
import UserProfileDashboard from './Components/User/UserProfileDashboard/UserProfile';
import UserActivateAccount from './Components/User/UserActivateAccount/UserActivateAccount';
import UserReview from './Components/User/UserReview/UserReview';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import UserPurchase from './Components/User/UserPurchase/UserPurchase';

import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard';
import SendNewsletter from './Components/Admin/SendNewsletter/SendNewsletter';
import MercadoPago from './Components/ShoppingCart/mercadoPago/MercadoPago';

import {
  isLogged,
  isLoggedAdmin,
  isLoggedAdminEmployee,
} from './Components/methods';

import AddProductHome from './Components/Admin/AddProduct/ProductHome/AddProductHome';
import ReviewsContainer from './Components/ReviewsContainer/ReviewsContainer';
import AdminUsers from './Components/Admin/AdminUsers/AdminUsers';
import CreateOrEdit from './Components/Admin/AddProduct/AddProductViews/CreateOrEdit/CreateOrEdit';
import EditProducts from './Components/Admin/AddProduct/EditProducts/EditProducts';
import CouponAdmin from './Components/Admin/Coupons/CouponAdmin/CouponAdmin';
import UserPurchaseDetail from './Components/User/UserPurchaseDetail/UserPurchaseDetail';

import MainDash from './Components/Admin/MainDash/MainDash';

import EmployeeHome from './Components/employeePanel/employeeHome/EmployeeHome';
import EmployeePendingOrder from './Components/employeePanel/EmployeePendignOrder/EmployeePendingOrder';
import EmployeeOrderReady from './Components/employeePanel/EmployeeOrderReady/EmployeeOrderReady';

import './App.css';
import UserBuyHistory from './Components/User/UserBuyHistory/UserBuyHistory';

function App() {
  const isSession = isLogged();
  const isSessionAdmin = isLoggedAdmin();
  // const isSessionAdminEmployee = isLoggedAdminEmployee();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* APP ROUTES */}
        <Route path="*" exact element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactoForm />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/nosotros" element={<AboutUs />} /> */}
        <Route path="/detalle/:id" element={<ProductDetail />} />
        {/* <Route path="/quedicendenosotros" element={<ReviewsContainer />} /> */}
        {/* USER ROUTES */}
        <Route
          path="/userlogin"
          element={isSession ? <Navigate to="/" /> : <UserLogin />}
        />
        <Route
          path="/registeruser"
          element={isSession ? <Navigate to="/" /> : <UserRegister />}
        />
        <Route
          path="/userfavorites"
          element={isSession ? <UserFavorites /> : <Navigate to="/" />}
        />
        <Route
          path="/userpersonalinfo"
          element={isSession ? <UserPersonalInfo /> : <Navigate to="/" />}
        />
        <Route
          path="/userprofiledashboard"
          element={isSession ? <UserProfileDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/userbuyhistory"
          element={isSession ? <UserBuyHistory /> : <Navigate to="/" />}
        />
        <Route
          path="/calificanos/:purchaseId"
          element={isSession ? <UserReview /> : <Navigate to="/" />}
        />
        <Route
          path="/activateAcount/:id"
          element={isSession ? <Navigate to="/" /> : <UserActivateAccount />}
        />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/mercadoPago"
          element={isSession ? <MercadoPago /> : <Navigate to="/" />}
        />
        <Route
          path="/pay/"
          element={isSession ? <UserPurchase /> : <Navigate to="/" />}
        />
        <Route
          path="/user/purchaseDetail/:id"
          element={isSession ? <UserPurchaseDetail /> : <Navigate to="/" />}
        />
        {/* ADMIN ROUTES */}
        <Route
          path="/adminhome"
          element={isSessionAdmin ? <AdminDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/adminnewsletter"
          element={isSessionAdmin ? <SendNewsletter /> : <Navigate to="/" />}
        />
        <Route
          path="/adminproducts"
          element={isSessionAdmin ? <AddProductHome /> : <Navigate to="/" />}
        />
        <Route
          path="/adminusers"
          element={isSessionAdmin ? <AdminUsers /> : <Navigate to="/" />}
        />
        <Route
          path="/adminCreate"
          element={isSessionAdmin ? <CreateOrEdit /> : <Navigate to="/" />}
        />
        <Route
          path="/admincupon"
          element={isSessionAdmin ? <CouponAdmin /> : <Navigate to="/" />}
        />
        <Route
          path="/adminEditProducts/:id"
          element={isSessionAdmin ? <EditProducts /> : <Navigate to="/" />}
        />
        <Route
          path="/admindashboard"
          element={isSessionAdmin ? <MainDash /> : <Navigate to="/" />}
        />
        <Route
          path="/adminpendingorders"
          element={
            isSessionAdmin ? <EmployeePendingOrder /> : <Navigate to="/" />
          }
        />
        z
        <Route
          path="/adminordersready"
          element={
            isSessionAdmin ? <EmployeeOrderReady /> : <Navigate to="/" />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

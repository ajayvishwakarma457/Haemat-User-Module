import React, { useContext, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/UI/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/Login/ForgotPassword';
import LoginContext from './Context/Login/LoginContext';
import DoctorList from './Pages/DoctorList/DoctorList';
import Product from './Pages/Product/Product';



function App() {

  const ctx = useContext(LoginContext);
  const LoginLayoutPage = !ctx.isLogin ? Login : Layout;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayoutPage />}>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route index element={<Home />} />
          <Route path='/doctor-list' element={<DoctorList />} />
          <Route path='/product/:id/:actionName' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )



}

export default App;

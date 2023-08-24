import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Create from './components/create/Create';

import AddLectureCoverage from './components/addlecturecoverage/AddLectureCoverage';
import AddPayment from './components/addpayment/AddPayment';
import AddStudentAttendance from './components/addstudentattendance/AddStudentAttendance';
import AddStudentGrade from './components/addstudentgrade/AddStudentGrade';

import LectureCoverage from './components/lecturecoverage/LectureCoverage';

import EctcCatalog from './components/ectcCatalog/EctcCatalog'
import EctcDetails from './components/ectcDetails/EctcDetails';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';


function App() {

  const location = useLocation()
 
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [location.pathname])

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/ectc/:id' element={<EctcDetails/>}></Route>
          <Route path='/ectcs/:id' element={<EctcCatalog/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/addlecturecoverage' element={<AddLectureCoverage/>}></Route>
          <Route path='/addstudentattendance' element={<AddStudentAttendance/>}></Route>
          <Route path='/addstudentgrade' element={<AddStudentGrade/>}></Route>
          <Route path='/lecturecoverage' element={<LectureCoverage/>}></Route>
          <Route path='/addpayment' element={<AddPayment/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

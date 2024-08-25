import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Functional from './components/Functional/Functional'
import Loginacc from './components/Loginacc'
import Signupacc from './components/Signupacc'
import Userpage from './components/Userpage/Userpage'
import CardApply from './components/CardApply/CardApply'
import Adminpage from './components/Adminpage/Adminpage'
import Managecard from './components/Managecardadmin/Managecard'
import Generatecard from './components/AdminGeneratecard/Generatecard'
import Products from './components/Products/Products'
import Login from './components/Admin/Login'
import ViewCardStatus from './components/Viewcardstatus/Viewcardstatus'
import  Title  from './components/Title/Title'
import Contact from './components/Contact/Contact'


function AppRouter() {
  return (
    <div>
        {/* <Navbar /> */}
      <Router>
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/functional' element={<Functional />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/userreg' element={<Userreg />} /> */}
            <Route path='/loginacc' element={<Loginacc />} />
            <Route path='/signupacc' element={<Signupacc />} />
            <Route path='/userpage' element={<Userpage />} />
            <Route path='/cardapply' element={<CardApply />} />
            <Route path='/adminpage' element={<Adminpage />} />
            <Route path='/managecard' element={<Managecard />} />
            <Route path='/generatecard' element={<Generatecard />} />
            <Route path='/productpage' element={<Products />} />
            <Route path='/viewcardstatus' element={<ViewCardStatus />} />
            <Route path='/titlepage' element={<Title />} />
            <Route path='/contactpage' element={<Contact />} />




        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter

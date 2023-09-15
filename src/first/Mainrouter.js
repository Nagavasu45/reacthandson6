import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contactus from './Contactus'
import "./sty.css"
import Datacompo from './Datacompo'
import Updatedt from './Updatedt'
import Addstudent from './Addstudent'

const Mainrouter = () => {
    const [data,dSet]=useState([ {Name : "John", Age : 26, Course : "MERN", Batch : "October"},
    {Name : "Doe", Age : 25, Course : "MERN", Batch : "November"},
    {Name : "Biden", Age : 26, Course : "MERN", Batch : "September"},
    {Name : "Barar", Age : 22, Course : "MERN", Batch : "September"},
    {Name : "Christ", Age : 23, Course : "MERN", Batch : "October"},
    {Name : "Elent", Age : 24, Course : "MERN", Batch : "November"},
    {Name : "Harshita Sharma", Age : 24, Course : "MERN", Batch : "October"}])

  return (
    <div>
        <BrowserRouter>
        <div className='one'>
        
        <NavLink  style={({isActive})=>({color:isActive ? "green" : "white"})} to='/'className="two">Home</NavLink>
    <NavLink style={({isActive})=>({color:isActive ? "green" : "white"})} to='/Student' className="two">Students</NavLink>
    <NavLink style={({isActive})=>({color:isActive ? "green" : "white"})} to='/Contactus' className="two">Contactus</NavLink>
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Student' element={<Datacompo.Provider value={{ data,dSet}}><Student />
            </Datacompo.Provider>}
            />
            <Route path='/Contactus' element={<Contactus />}/>
            <Route path='/Updatedt' element={<Datacompo.Provider value={{ data,dSet}}><Updatedt /></Datacompo.Provider>
            }/>
            <Route path='/Addstudent' element={<Datacompo.Provider value={{ data,dSet}}><Addstudent /></Datacompo.Provider>} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Mainrouter

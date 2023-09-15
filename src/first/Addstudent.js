import React, { useContext } from 'react'
import "./sty.css"

import { useNavigate } from 'react-router-dom'
import Datacompo from './Datacompo'

const Addstudent = () => {
  const Nav=useNavigate()
    
    
    const data2=useContext(Datacompo)
    console.log(data2)
    
    const update1={
        Name:"",
        Age:"",
        Course:"",
        Batch:""

    }
    const updatehandle=(e)=>{
        update1[e.target.name]=e.target.value

    }
    const updatebutton=()=>{
      data2.data.push(update1)
      Nav('/Student')
    }
    console.log(update1)
 

   
  return (
    <>
    <div className='up3'>Name</div>
    <div className='up4'>Age</div>
    <div className='up5'>Course</div>
    <div className='up6'>Batch</div>
    <div className='up2'>
        <div className='up1'>
        <input type='text' name='Name' placeholder='enter the name' onChange={updatehandle}/>
        <input type='Number' name='Age' placeholder='enter the age' onChange={updatehandle}/>
        </div>
        <div className='up1'>
        <input type='text'name='Course' placeholder='enter the course' onChange={updatehandle}/>
        <input type='text' name='Batch' placeholder='enter the batch' onChange={updatehandle}/>
        </div>
        <button className='up7 button2' onClick={()=>Nav('/Student')}>Cancel</button>
        <button className='button2' on onClick={updatebutton}>Addstudent</button>
    </div>
    </>
  )
}

export default Addstudent

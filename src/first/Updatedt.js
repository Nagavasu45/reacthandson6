import React, { useContext } from 'react'
import "./sty.css"
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Datacompo from './Datacompo'

const Updatedt = () => {
    const Nav=useNavigate()
    const indexdata=useLocation().state.index;
    console.log(indexdata)
    const data2=useContext(Datacompo)
    console.log(data2)
    
    const update1={
        Name:data2.data[indexdata].Name,
        Age:data2.data[indexdata].Age,
        Course:data2.data[indexdata].Course,
        Batch:data2.data[indexdata].Batch

    }
    const updatehandle=(e)=>{
        update1[e.target.name]=e.target.value

    }
    const updatebutton=()=>{
      data2.data[indexdata]=update1
      Nav('/student')
    }
 

   
  return (
    <>
    <div className='up3'>Name</div>
    <div className='up4'>Age</div>
    <div className='up5'>Course</div>
    <div className='up6'>Batch</div>
    <div className='up2'>
        <div className='up1'>
        <input type='text' name='Name' onChange={updatehandle}/>
        <input type='Number' name='Age' onChange={updatehandle}/>
        </div>
        <div className='up1'>
        <input type='text'name='Course' onChange={updatehandle}/>
        <input type='text' name='Batch'onChange={updatehandle}/>
        </div>
        <button className='up7 button2' onClick={()=>Nav('/Student')}>Cancel</button>
        <button className='button2' on onClick={updatebutton}>Update</button>
    </div>
    </>
  )
}

export default Updatedt

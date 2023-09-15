import React, { useContext} from 'react'
import Datacompo from './Datacompo'
import "./sty.css"
import { NavLink } from 'react-router-dom'



const Student = () => {
    const data1=useContext(Datacompo)
    console.log(data1)
  return (
    <>
        <div className="four"><h1> Student details</h1>

        
        <NavLink to={'/Addstudent'}><button className="five" >Add New Student</button></NavLink></div>
        
            <table  className="three" >
                <thead>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            Age:
                        </td>
                        <td>
                            Course:
                        </td>
                        <td>
                            Batch:
                        </td>
                        <td>
                            Change:
                        </td>

                    </tr>
                </thead>
                <tbody>
                {data1.data.map((item,index)=>{
                    return(
                        <tr>
                            <td>
                                {item.Name}
                            </td>
                            <td>
                                {item.Age}
                            </td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td><NavLink to='/Updatedt' state={{index}}>Edit</NavLink></td>
                        </tr>

                    )
                        
                    })}
                    
                    
                </tbody>
            
            </table>

        
        
      
    </>
  )
}

export default Student

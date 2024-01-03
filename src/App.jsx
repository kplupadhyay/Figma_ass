import { useState } from 'react'

import './App.css'
import "./index.css"
import tdimg from "./assets/td.png"
import Lowertxt from './lowertxt.jsx'
import logo from "./assets/logo.png"

function App() {
 

  return (

   <>
   <div className='main'>
   <div className='upper'>
   <h1>Login</h1>
   <img src={logo} className='logo' alt="logo"/>
   </div>
   <div className='container'>
   {/* <div className='form_bg'> */}
   <form className='form'>

    <label for="loginId" className='text-id' >💗 Login Id</label> <br></br>
    <input type='text' id ="loginId" placeholder='Please Enter Youur ID'/> <br></br>

    <label for="password" className='pass-id'>💗 Password</label><br></br>
    <input type='password' id ="password" placeholder='Enter your password '/> <br></br>
   
    </form>
    <div className='mid'>
    <button className='btn'><span className='
    btn-txt'>Login  🔑</span></button>
    <p className='txt'> ❓ Click here if you forgot your id</p>
   <p className='txt'>❓Click here if you forgot your password</p>
   </div>
   
  
   
  
   <img src={tdimg} alt="teddy image" className='img'/> <br></br>
   <div className='lowersection1'>
   <Lowertxt lorem="💎 Point discount Service"/> <Lowertxt lorem="💎 Point Exchange Limited Good"/>
   </div>
   <div className='lowersection2'>
   <Lowertxt lorem="💎 application campaign"/> <Lowertxt lorem="💎 Make Shopping convenient! My page    function"/>
   
   </div>

   <button className='btn  sbtn'><span className='btn-txt'>Register as a new Member >  </span> </button>
  
    
   

  
   
  </div>
  </div>
 </>
  )
}



export default App

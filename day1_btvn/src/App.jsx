import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
       <h1 style={{ color: 'green' }}>Form in React</h1>
       <div><b>First Name</b></div>
       <div>
        <input type="text" id="FirstName" name="FirstName" required placeholder='Enter First Name'/>
       </div>
       <div><b>Last Name</b></div>
       <div>
        <input type="text" id="LastName" name="LastName" required placeholder='Enter Last Name'/>
       </div>
       <div><b>Enter Email</b></div>
       <div>
        <input type="text" id="EnterEmail" name="EnterEmail" required placeholder='Enter email'/>
       </div>
       <div><b>Contact</b></div>
       <div>
        <input type="text" id="Contact" name="Contact" required placeholder='Enter Mobile number'/>
       </div>
       <div><b>Gender</b></div>
       <span>
       <input checked="checked" name="Gender" type="radio" value="Male" /> Male
       <input name="Gender" type="radio" value="Female" /> Female
       <input name="Gender" type="radio" value="Other" /> Other
       </span>
       <div><b>Your best Subject</b></div>
       <span></span>
    </>
  )
}

export default App

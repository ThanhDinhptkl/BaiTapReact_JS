import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div id="header"><h2 style={{ color: 'green' }}>Form in React</h2></div>
       <div id="lable"><b>First Name*</b></div>
       <div id="txt">
        <input type="text" name="FirstName" required placeholder='Enter First Name' style={{ width: '100%' }}/>
       </div>
       <div id="lable"><b>Last Name*</b></div>
       <div id="txt">
        <input type="text" name="LastName" required placeholder='Enter Last Name'style={{ width: '100%' }}/>
       </div>
       <div id="lable"><b>Enter Email*</b></div>
       <div id="txt">
        <input type="text" name="EnterEmail" required placeholder='Enter email'style={{ width: '100%' }}/>
       </div>
       <div id="lable"><b>Contact*</b></div>
       <div id="txt">
        <input type="text" name="Contact" required placeholder='Enter Mobile number'style={{ width: '100%' }}/>
       </div>
       <div id="lable"><b>Gender*</b></div>
       <span>
       <input checked="checked" name="Gender" type="radio" value="Male" /> Male
       <input id="gender_space1" name="Gender" type="radio" value="Female" /> Female
       <input id="gender_space2" name="Gender" type="radio" value="Other" /> Other
       </span>
       <div id="lable"><b>Your best Subject</b></div>
       <span>
        <input name="Subject" type="checkbox" value="English" /> English
        <input id="subject_space1" name="Subject" type="checkbox" value="Math" /> Math
        <input id="subject_space2" name="Subject" type="checkbox" value="Physics" /> Physics
       </span>
        <div id="lable"><b>Upload Resume*</b></div>
        <div id="resume">
        <input type="file" name="Resume" required />
        </div>
        <div id="lable"><b>Enter URL*</b></div>
        <div id="txt">
        <input type="text" name="URL" required placeholder='Enter URL'style={{ width: '100%' }}/>
        </div>
        <div id="lable"><b>Select your choice</b></div>
        <div id="txt">
          <select id="select" name="Choice" required style={{ width: '100%' }}>
            <option value="Select">Select your Ans</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div id="lable"><b>About</b></div>
        <div id="about">
          <input type="text" placeholder='About your self'/>
        </div>
        <div id="lable"><b>Submit OR Reset</b></div>
        <div>
          <span>
          <button id="button1">Reset</button>
          <button id="button2">Submit</button>
          </span>
        </div>
    </>
  )
}

export default App

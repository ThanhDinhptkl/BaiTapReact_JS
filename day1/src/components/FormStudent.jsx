import React from 'react'

export default function FormStudent() {
  return (
    <div><span>Avatar:</span>
    <img src={''} alt="logo" />
    <div>
    <label htmlFor="name">Name:</label>
    <input id="name" />
    </div>
    <select>
    <option value="Man">Man</option>
    <option value="Woman">Woman</option>
    </select>
    <br />
    <button>Submit</button></div>
  )
}

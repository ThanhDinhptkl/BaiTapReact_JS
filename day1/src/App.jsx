import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormStudent from './components/FormStudent'

function App() {
  const student={
    name: 'Nguyễn Văn A',
    description: 'Sinh viên ABC...',
    mssv: 123456,
    class: 'ReactJS',
    course: 2024,
    avatar: '',
  }
  return (
  <>
  <h1>Thông tin sinh viên </h1>
  <div>Họ tên: {student.name}</div>
  <div>Mô tả: {student.description}</div>
  <i>MSSV: {student.mssv}</i>
  <br />
  <br />
  <strong>Lớp: {student.class}</strong>
<div>Khóa: {student.course}</div>
<FormStudent/>
{/* <span>Avatar:</span>
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
<button>Submit</button> */}
</>
  );
}



export default App;

import React, { useState } from "react"; 6.9k (gzipped: 2.7k)
export default function FormStudent({ onUpdate }} {
const [name, setName] = useState("");
const [mssv, setMssv] = useState("");
const [description, setDescription] = useState("");
// const [form, setForm] = useState({});
const handleChangeName = (e) => {
  setName(e.target.value);
};

const handleChangeMssv = (e) => {
setMssv(e.target.value);
};
const handleChangeDescription = (e) => {
  setDescription (e.target.value);
};

const handleSubmit = () => {
onUpdate({
name,
mssv,
description,
});
};

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

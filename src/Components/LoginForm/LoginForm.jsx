import React, { useState } from "react";
import "./index.css";
function LoginForm() {
  const [data, useData] = useState({ name: "", email: "", password: "" });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleOnChange =(e) => {
    useData({...data, [e.target.name]:e.target.value})
  };
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <div className="loginCard">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={data.name} onChange={handleOnChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={data.email} onChange={handleOnChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={data.password} onChange={handleOnChange}/>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;

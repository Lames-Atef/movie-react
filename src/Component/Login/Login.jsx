import React, { useState } from 'react'
import axios from 'axios';
import joi from "joi";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const[Value,setValue]=useState({
    email:"",
    password:""
})
let validateUser=()=>{
  let schema=joi.object({
   email:joi.string().email({tlds:{allow:['com','net']}}),
   password:joi.string().required().pattern(new RegExp(/^[a-z][0-9]$/))
  })
  return schema.validate(Value,{abortEarly:false});
}
let getData=(e)=>{
  let myValue={...Value};
  myValue[e.target.name]=e.target.value;
  setValue(myValue);
  console.log(myValue)
}
let[error,setError]=useState("")

  let submitForm= async (e)=>{
e.preventDefault();
let responseValidate=validateUser();
let {data}=await axios.post("https/:route-egypt-api.herokuapp.com/signin",Value)
if(data.message=="success"){
  goToHome()
}else{
setError(data.message)
}
  }
  let navigate=useNavigate()
let goToHome=()=>{
  navigate('/home')
}
  return (
    <>
   <div className='w-75  mb-2 m-auto'>
   <h1> registration form</h1>
   <form onSubmit={submitForm}>
     <label htmlFor="email">email</label>
    <input onChange={getData} type="email" name="email" className='form-control my-2'/>
     <label htmlFor="password">password</label>
    <input onChange={getData} type="text" name=" password" className='form-control my-2'/>
    <button className='btn btn-info ms-2 float-end'>submit</button>
    <div className='clear-fix'></div>
   </form>
   </div>
    </>
  )
}

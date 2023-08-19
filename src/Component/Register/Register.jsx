import React, { useState } from 'react'
import axios from 'axios';
import joi from "joi";
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const[Value,setValue]=useState({
    first_name:"",
    last_name:"",
    age:"",
    email:"",
    password:""
})
let validateUser=()=>{
  let schema=joi.object({
    first_name:joi.string().alphanum().required().min(2).max(10),
    last_name:joi.string().alphanum().required().min(2).max(10),
   age:joi.number().min(20).max(80),
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
let {data}=await axios.post("https/:route-egypt-api.herokuapp.com/signup",Value)
if(data.message=="success"){
  goToLogin()
}else{
setError(data.message)
}
  }
  let navigate=useNavigate()
let goToLogin=()=>{
  navigate('/login')
}
  return (
    <>
   <div className='w-75  mb-2 m-auto'>
   <h1> registration form</h1>
   <form onSubmit={submitForm}>
    <label htmlFor="first name">first_name</label>
    <input onChange={getData} type="text" name="first_name" className='form-control my-2'/>
    <label htmlFor="last name">last_name</label>
    <input onChange={getData} type="text" name="last_name" className='form-control my-2'/>
    <label htmlFor="age">age</label>
    <input onChange={getData} type="number" name="age" className='form-control my-2'/>
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

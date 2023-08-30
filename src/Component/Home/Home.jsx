import React, { useState ,useEffect } from 'react'
import axios from "axios"
import styles from "./Home.scss"
export default function Home() {
  const[getTrend,setGetTrend]=useState([])
  useEffect(()=>{
getTrendingItem();
  },[])
  let getTrendingItem=async()=>{
    let {data}=await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=262a3416c35895e97110287e19c8d5c2")
  console.log(data)
  setGetTrend(data.results)
  }
  return (
    <>
    <div className='container-fluid w-75'>
    <div className='row gy-4 my-3 py-3'>
      <div className='col-md-4'>
<div className='brdr w-25 mb-4'></div>
<h3>trending</h3>
<h3>movie</h3>
<h3>to watch now</h3>
<span>most watched movie in day</span>
<div className='brdr w-75 mt-4'></div>
      </div>
    {
      getTrend.map((item,index)=>(
<div key={index} className='col-md-2'>
<div className='item'>
  <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className='w-100' alt="" />
  <h5>{item.title}{item.name}</h5>
</div>
</div>
      ))
    }
</div>
    </div>
    </>
  )
}

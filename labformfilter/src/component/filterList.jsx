
import React from 'react'
import { useState } from 'react';

export default function FilterList() {
  const array = [
    {
      name: "Handmade Bags",
      category: "handmade",
      img: "https://i.pinimg.com/564x/5e/4b/04/5e4b045bf1def138ca7fd1c0eeafbad9.jpg",
    },
    {
      name: "Classic Bags",
      category: "classic",
      img: "https://i.pinimg.com/564x/27/3b/94/273b94dbb75ae81609fd997846a0ecdd.jpg",
    },
    {
      name: "Modern Bags",
      category: "modern",
      img: "https://i.pinimg.com/564x/01/f8/d8/01f8d83bfb8ec369d3c219fb75492d79.jpg",
    },
    {
      name: "Classic Bags",
      category: "classic",
      img: "https://i.pinimg.com/564x/27/3b/94/273b94dbb75ae81609fd997846a0ecdd.jpg",
    },
    {
      name: "Handmade Bags",
      category: "handmade",
      img: "https://i.pinimg.com/564x/5c/a8/ea/5ca8eafea5e6fdee722a96ab0d05b3d4.jpg",
    },
    {
      name: "Classic Bags",
      category: "classic",
      img: "https://i.pinimg.com/564x/87/3d/84/873d84c677f2a461b3254286e2252ad6.jpg",
    },
    {
      name: "Modern Bags",
      category: "modern",
      img: "https://i.pinimg.com/564x/19/7d/d8/197dd872958ac376c151df805bac8c29.jpg",
    },
    {
      name: "Handmade Bags",
      category: "handmade",
      img: "https://i.pinimg.com/564x/5e/4b/04/5e4b045bf1def138ca7fd1c0eeafbad9.jpg",
    },
  ];
  
const [input,setinput]=useState({
  search:"",
  result:array
});

const takenValue=(e)=>{
  
 setinput({
  ...input,
  [e.target.name]:e.target.value
 })
};
const filter=()=>{
const result=array.filter((item)=>{
  return item.category === input.search;
}
)
return result;
}
const serachbtn=()=>{
 setinput({
  ...input,
  result:filter() 
 })
}
return (
<div>
  <div className='container mt-5'>
    <p className="bg-light text-dark text-center">Search by Category (handmade,classic,modern)</p>
      <div className='row'>
          <input className='form-control col-3 w-50' type="text" name="search" placeholder='Search' onChange={takenValue} />
          <button className='btn btn-dark col-3 mx-2' onClick={serachbtn} >search</button>
      </div>

      <div  className='row mt-5'>
     {input.result.map((item)=>{
      return(
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
          <div className='card p-0 overflow-hidden h-100 shadow'>
            <img src={item.img} className="card-img-top img-fluid" alt="" />
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>{item.category}</p>
            </div>
          </div>
        </div>         
      )
     })}
      </div>
  </div>
</div>
  )
}


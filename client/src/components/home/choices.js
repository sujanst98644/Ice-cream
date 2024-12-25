import React, {useState, useEffect } from 'react'
import {Rate} from 'antd'
// import { getAllProducts } from '../../API'

const Choices = () => {
  const [items, setItems] = useState([])
   useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            // Do something with the data
            setItems(data.products);
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
   },[])
  return (
    <div>
      <h1 className="text-5xl font-medium font-inter pl-5">
        POPULAR CHOICES
      </h1>
      <div className="grid grid-flow-col overflow-x-scroll no-scrollbar">
        {items.map((item) => (
          <div className="bg-[#FCFAFA] flex flex-col h-80 w-60 justify-center items-center rounded-3xl shadow-2xl p-3 text-center m-5 text-black">
            {/* <img src={item.img} alt="img" className="h-1/3 w-1/3"/> */}
            <h1>{item.title}</h1>
            <p>${item.price}</p>
            <div className='flex self-start'><Rate /><p>({item.stock})</p></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Choices
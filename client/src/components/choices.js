import React from 'react'

const Choices = () => {
    const data=[
        {}
    ]
  return (
    <div>
      <h1 className="text-5xl font-medium font-inter pl-5">
        POPULAR CHOICES
      </h1>
      <div className="text-black grid grid-cols-4 font-semibold">
        {data.map((item, index) => (
          <div key={index} className="bg-[#FCFAFA] flex flex-col h-80 w-60 justify-center items-center rounded-3xl shadow-2xl p-3 text-center m-5">
            <img src={item.img} alt="img" className="h-1/3 w-1/3"/>
            <h1>{item.type}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Choices
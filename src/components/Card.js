import React, { useState } from 'react'

const Card = ({id,name,info,image,price,removeTour}) => {

  const [readmore, setReadmore] = useState(false)


  let description = readmore ? info : `${info.substring(0,200)}....`

  function readmoreHandler(){
    setReadmore(!readmore);
  }


  return (
    <div className='card w-[400px] max-h-full m-[1rem] p-[1rem] flex flex-col rounded-md justify-items-center shadow-md'>
      <img src={image} className='image w-[380px] aspect-square object-cover rounded-sm hover:scale-110 transition-transform' alt='img'></img>

      <div className='tour-info text-left my-5 mx-1'>
          <div className='tour-details'>
            <h4 className='price text-[#1faa59] text-2xl font-bold'>₹{price}</h4>
            <h4 className='name text-2xl font-bold mb-1'>{name}</h4>
          </div>
          <div className='description '>
            {description}
            <span className='readmore text-blue-500 cursor-pointer' onClick={readmoreHandler}>{readmore ? ' show less' : ' read more'}</span>
          </div>
      </div>

      <button className='btn-red border-2 w-40 m-auto py-2 rounded-md bg-[#b4161b21] hover:bg-[#b4161b] hover:text-white border-slate-400' onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  )
}

export default Card;

import React, { useState } from 'react'
import ItemLists from './ItemLists'

const Rescategory = ({data,showItems, setShowIndex}) => {
    // console.log(data)
  const handleClick = () =>{
      setShowIndex();
  }
  
  return (
    <div>
       <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 '>
          <div className='flex justify-between cursor-pointer'
          onClick={handleClick}
          >
          <span className='font-bold'>{data.title} ({data?.itemCards.length})</span>
          <span>⬇️</span>
        </div>
        <div>
          { showItems && <ItemLists items = {data?.itemCards}/>}
       </div>
       </div>
       
    </div>
  )
}

export default Rescategory;
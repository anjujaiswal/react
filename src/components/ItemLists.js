import { ClassNames } from '@emotion/react';
import{ URLL} from "../utils/constants"
import React from 'react'

const ItemLists = ({items}) => {
    // console.log(items);
  return (
    <div>
        {items.map(item => 
        (<div key={item.card.info.id } className='p-2 m-2 border-b-4 text-left flex justify-between'>
           <div className='w-9/12'>
            <div className='py-2'>
                    
                    <span>{item.card.info.name}</span>
                    <span> - Rs {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
             </div> 
        <div className='w-3/12 p-4'>
            <div className="absolute"> 
                <button className='p-1 bg-black text-white rounded-lg shadow-lg'>Add + </button>
            </div>
            <img className="w-full"src={URLL + item.card.info.imageId}/>
           
        </div>
            </div>))}
    </div>
  );
};

export default ItemLists;
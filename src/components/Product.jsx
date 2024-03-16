import React from 'react'
import Button from './Button';

function Product({item, mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl  capitalize font-semibold'>{item.title}</h1>
            <div className='dets w-1/4'>
                <p className='mb-10'>{item.description}</p>
                <div className='flex items-center gap-5'>
                    {
                        item.live && <Button />
                    }
                    {
                        item.case && <Button title='Case Study'/>
                    }
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Product;

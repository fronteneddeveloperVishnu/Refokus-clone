import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
      <div className='max-w-screen-xl py-10 flex gap-32 mx-auto'>
        <div className='basis-1/2'>
            <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {["instagram", "twitter (x?)","LinkedIn"].map( (item, index) => <a className='block mt-2 capitalize text-zinc-600' key={index}>{item}</a> )}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {["instagram", "twitter (x?)","LinkedIn"].map( (item, index) => <a className='block mt-2 capitalize text-zinc-600' key={index}>{item}</a> )}
            </div>
            <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                <img src="" alt="" className='w-32 mt-10'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

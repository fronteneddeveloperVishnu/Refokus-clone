import React, { useState } from 'react'
import Product from './Product';
import {motion} from 'framer-motion'
import v1 from "../assets/v1.webm"
import v2 from '../assets/v2.webm';
import v3 from '../assets/v3.mp4';
import v4 from '../assets/v4.webm';


function Products() {
    var products =[
        
        {title:"arquitel",description:"Arqu Executive and its employees continue to recieve orders for customers that get order for customers that", live:true, case:false},
        {title:"TTR",description:"Arqu Executive and its employees continue to recieve orders for customers that get order for customers that", live:true, case:false},
        {title:"YIR 2022",description:"Arqu Executive and its employees continue to recieve orders for customers that get order for customers that", live:true, case:true},
        {title:"Yahoo!",description:"Arqu Executive and its employees continue to recieve orders for customers that get order for customers that", live:true, case:true},
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val*23);
    }
  return (
    <div className=' mt-32 relative'>
        {
            products.map( (item, index) => (
                <Product item={item} mover={mover} count={index} key={index}/>
            ))
        }
        <div className='absolute top-0 w-full h-full pointer-events-none'>
            <motion.div initial={{y:pos, x:"-50%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76,0,0.24,1], duration:0.5}} className='window absolute w-[32rem] h-[23rem] left-[44%] -translate-x-[50%] overflow-hidden'>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1], duration:0.5}} className=' w-full rounded-2xl h-full  overflow-hidden'>
                    <video className='rounded-lg overflow-hidden' autoPlay loop muted src={v1}></video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1], duration:0.5}} className=' w-full h-full '>
                    <video className='rounded-2xl overflow-hidden' autoPlay loop muted src={v2}></video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1], duration:0.5}} className=' w-full h-full '>
                <video className='rounded-2xl overflow-hidden' autoPlay loop muted src={v3}></video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1], duration:0.5}} className=' w-full h-full'>
                <video className='rounded-2xl overflow-hidden' autoPlay loop muted src={v4}></video>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products;

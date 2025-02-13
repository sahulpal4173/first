import React from 'react'
import { IoIosDocument } from "react-icons/io";

const Secondpage = () => {
  return (
    <div className=' h-80 w-full '>
        <div className='grid grid-cols-3 gap-2 '>
<div className=' h-70 m-5 '>
    <div className='grid grid-cols-2  gap-2'>
        <div className='bg-white m-1 h-32 rounded-sm '>
            <div className='flex'>
<div className='relative'>
    <h1 className='font-normal text-ml pt-2 ml-4'>
        Session
    </h1>
    <p className='text-2xl font-medium pt-3 pl-4'>
        6,975
    </p>
    <p className='text-ml text-green-400 font-medium ml-4 mt-1'>
        15%
    </p>
    <p className='font-light text-sm ml-4 mt-0'>
    vs Previous 30 

    </p>
<div>
    
</div>
</div>
<div className=' text-3xl mt-2 ml-7 mr-3 '>

<IoIosDocument />
</div>
            </div> 
        </div>
        <div className='bg-white m-1 h-32  rounded-sm'>
        <div className='flex'>
<div className='relative'>
    <h1 className='font-normal text-ml pt-2 ml-4'>
        Page view
    </h1>
    <p className='text-2xl font-medium pt-3 pl-4'>
        2,304
    </p>
    <p className='text-ml text-red-400 font-medium ml-4 mt-1'>
        20%
    </p>
    <p className='font-light text-sm ml-4 mt-0'>
    vs Previous 30

    </p>

</div>
<div className='bg-amber-400 size-8 mt-2 ml-7 mr-3 '>
<p>ds</p>
</div>
            </div> 
        </div>
        <div className='bg-white m-1 h-32 rounded-sm'>
        <div className='flex'>
<div className='relative'>
    <h1 className='font-normal text-ml ml-3'>
        Avg. duration
    </h1>
    <p className='text-2xl font-medium pt-1 pl-4'>
        56<span className='text-ml'>s</span>
    </p>
    <p className='text-ml text-green-400 font-medium ml-4 mt-1'>
        22%
    </p>
    <p className='font-light text-sm ml-4 mt-0'>
    vs Previous 30 day

    </p>

</div>
<div className='bg-amber-400 size-8 mt-2 ml-7 mr-3 '>
<p>ds</p>
</div>
            </div> 
        </div>
        <div className='bg-white m-1 h-32 rounded-sm'>
        <div className='flex'>
<div className='relative'>
    <h1 className='font-normal text-ml ml-3'>
    bouncer rate

    </h1>
    <p className='text-2xl font-medium pt-1 pl-4'>
    46<span className='text-ml'>s</span>
    </p>
    <p className='text-ml text-red-400 font-medium ml-4 mt-1'>
        15%
    </p>
    <p className='font-light text-sm ml-4 mt-0'>
    vs Previous 30 day

    </p>

</div>
<div className='bg-amber-400 size-8 mt-2 ml-7 mr-3 '>
<p>ds</p>
</div>
            </div> 
        </div>
        

    </div>
</div>
 

<div  className='bg-white m-5'>
<div>
    <h1 className='text-xl font-medium pt-5 pl-5'>
    New vs Returning Visitors
    </h1>

</div>
</div>
<div className='bg-white m-5'>
    <div>
    <h1 className='text-xl font-medium pt-5 pl-5'>
    Device Breakdown
    </h1>
    </div>
</div>
        </div>
    </div>
  )
}

export default Secondpage
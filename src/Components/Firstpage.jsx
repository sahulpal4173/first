import React from 'react'

const Firstpage = () => {
  return (
    <div className=' '>
        <h1 className='h-20 w-full  pt-6 pl-5 text-4xl font-medium'>
        Analytics dashboard

        </h1>
        <div className='grid grid-cols-3 gap-7  h-[550px] pt-8 m-5 '>
<div className='col-span-2 bg-white rounded-2xl  '>
   <div className=' flex'>
   <div className='relative'>
   <h1 className='pt-5 pl-5 text-2xl font-medium'>
    Reports Snapshot

    </h1>
    <p className='pt-0 font-light pl-5'>Demographic properties of your customer</p>
   </div>
   <div className=' h-12 w-22 ml-[380px] mt-10 '>
    {/* <label for="month">Month</label> */}
<select  className=' border-solid border-2 rounded-sm' id="month">
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
</select>
   </div>
   

    </div>
    <div className='grid grid-cols-4 gap-3  h-22 mt-9 ml-5 mr-5'> 
<div className='bg-blue-200 rounded-sm text-xl  pt-3 pl-5'>All user
    <p>1068</p>
</div>
<div className='bg-amber-200 rounded-sm text-xl  pt-3 pl-5'>event count</div>
<div className='bg-cyan-200 rounded-sm text-xl  pt-3 pl-5'>conversations</div>
<div className='bg-emerald-200 rounded-sm text-xl  pt-3 pl-5'> New User </div> 
    </div>
</div>

            <div className='bg-white rounded-2xl relative'>
                <div className='flex'>
<div className='relative pl-5 pt-5'>
<h1 className='text-2xl font-medium'>
    Users
</h1>
<p className='font-light text-sm'> 
    In last 30 minutes
</p>
<h1 className='font-normal pt-5'>
    User per minutes
</h1>
</div>
<h1 className='font-bold text-blue-500 pl-40 pt-8 text-4xl'>
    63
</h1>
                </div>
       <div className="absolute bottom-0 w-full p-8 font-light text-sm  " >
       <ul className="relative ">
        <li  className='border-1 font-normal text-ml pl-2'> Top Countary <span className='absolute right-2'> Users</span></li>
        <li  className='border-x-1 pl-2'> India <span className='absolute right-2'> 10</span></li>
        <li  className='border-1 pl-2'> America <span className='absolute right-2'> 4</span></li>
        <li  className='border-x-1 pl-2'> Pakistan <span className='absolute right-2'> 7</span></li>
        <li  className='border-1 pl-2'> Australia<span className='absolute right-2'> 3</span></li>
        <li  className='border-x-1 pl-2 '> America<span className='absolute right-2'> 6</span></li>
        <li  className='border-1 pl-2'> America<span className='absolute right-2'> 6</span></li>


    </ul>
       </div>

            </div>
        </div>
    </div>
  )
}

export default Firstpage
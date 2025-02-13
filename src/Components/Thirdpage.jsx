import React from 'react'

const Thirdpage = () => {
  return (
    <div className="h-[500px] w-auto bg-white rounded-sm m-4 " >
        <div className='h-20  pt-3 pl-5 w-auto flex'>
<h1 className='text-2xl font-medium'>User By Country</h1>
<div className='size-26 absolute right-16'>
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
    <div className='grid grid-cols-3 gap-3'>
        <div className=' h-[400px] col-span-2'>1</div>
        <div className=' h-[400px] p-3'>
        <div className='grid grid-cols-3  '>
<div className='col-span-2 bg-white h-[360px] '>
    <ul className=''>
        <li className='font-medium pl-3 border-b-1 pb-2 text-ml'>
          
            Country</li>
            <div className='h-10  '>
                <li className='text-ml font-light pt-2 flex m-3'>
                    <img  className='size-5 rounded-full mr-2' src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo= " alt="" srcset="" />
                    India</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml font-light pt-2 flex m-3'>
                    <img  className='size-5 rounded-full mr-2' src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt="" srcset="" />
                    United State</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml font-light pt-2 flex m-3'>
                    <img  className='size-5 rounded-full mr-2' src="https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg" alt="" srcset="" />
                    
France</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml font-light pt-2 flex m-3'>
                    <img  className='size-5 rounded-full mr-2' src="https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg" alt="" srcset="" />
                    Spain</li>
                          </div>
                          <div className='h-10 '>
                <li className='text-ml font-light pt-2 flex m-3'>
                    <img  className='size-5 rounded-full mr-2' src="https://cdn.britannica.com/67/6267-050-8A26DFEE/Flag-Bangladesh.jpg" alt="" srcset="" />
                    Bangladesh</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml font-light pt-2 flex m-3'>
                    <img  className='size-5 rounded-full mr-2' src="https://media.istockphoto.com/id/967321044/vector/vector-flag-of-brazil-proportion-7-10-brazilian-national-flag.jpg?s=612x612&w=0&k=20&c=lKrHddeZEPnO9yF5lVhZY_j09035BphxRqxnG7JYy7U=" alt="" srcset="" />
                    
Brazil</li>
                          </div>
        
    </ul>
</div>

<div className='bg-white'>
    <div className=''>
        <ul>
            <li className='border-b-1 font-normal pl-12 text-ml text-blue-400 pb-2 border-b-black'>See All</li>
            <div className=''>
                <li className='text-ml text-center  bg-gray-100 font-light pt-2 flex m-3 pl-7 rounded-sm  '>
                    
                    35747</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml text-center  bg-gray-100 font-light pt-2 flex m-3 pl-7 rounded-sm '>
                    
                    75447</li>
                          </div>
                          <div className='h-10 '>
                <li className='text-ml text-center  bg-gray-100 font-light pt-2 flex m-3 pl-7 rounded-sm '>
                    
                    23447</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml text-center  bg-gray-100 font-light pt-2 flex m-3 pl-7 rounded-sm '>
                    
                    40447</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml text-center  bg-gray-100 font-light pt-2 flex m-3 pl-7 rounded-sm '>
                    
                    10447</li>
                          </div>
                          <div className='h-10  '>
                <li className='text-ml text-center  bg-gray-100 font-light pt-2 flex m-3 pl-7 rounded-sm '>
                    
                    53347</li>
                          </div>
        </ul>
    </div>
</div>

        </div>
        </div>
        

    </div>

    </div>
  )
}

export default Thirdpage
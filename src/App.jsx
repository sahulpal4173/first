import React from 'react'
import Firstpage from './Components/Firstpage'
import Secondpage from './Components/Secondpage'
import Thirdpage from './Components/Thirdpage'
import Fourtpage from './Components/Fourtpage'
const App = () => {
  return (
    <div className='bg-blue-50'>
      <Firstpage/>
      <Secondpage></Secondpage>
      <Thirdpage></Thirdpage>
      <Fourtpage></Fourtpage>
    </div>
  )
}

export default App
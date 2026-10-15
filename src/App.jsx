import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Mathematics from './Component/Navbar/Calculus/Mathematics'
import Table from './Component/Table'
import Footer from './Component/Footer'

const App = () => {
  
  return (
    <div  className='overflow-auto max-h-screen [&::-webkit-scrollbar]:hidden h-full w-full scrollbar'>
      <Navbar></Navbar>
      <Mathematics></Mathematics>
      <Table></Table>
      <Footer></Footer>
    </div>
  )
}

export default App
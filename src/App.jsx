import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Mathematics from './Component/Navbar/Calculus/Mathematics'
import Table from './Component/Table'
import Footer from './Component/Footer'

const App = () => {
  
  return (
    <div >
      <Navbar></Navbar>
      <Mathematics></Mathematics>
      <Table></Table>
      <Footer></Footer>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Mathematics from './Component/Navbar/Calculus/Mathematics'
import Table from './Component/Table'

const App = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Mathematics></Mathematics>
      <Table></Table>
    </div>
  )
}

export default App
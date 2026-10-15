import React, { useState } from 'react'

const ROW = 1000
const COLUMN = 26
const getcolumnName = (index) => {
 let name = ''
 while(index >= 0){
  name = String.fromCharCode((index % 26)+65) +name
  index = Math.floor(index / 26)-1

 }
 return name
}


const Table = () => {
  const [cell, setcell] = useState({})
  const [selectedCell, setselectedCell] = useState('A1')

   const updatedCell = (address,value)=>{
    setcell((prev)=>({
      ...prev,
      [address] : value
    })
  )
}
return(
 
  <div className="h-[calc(100vh-150px)] overflow-auto border">
    <table className="border-collapse text-sm">
      <thead className="sticky top-0 bg-gray-100">
        <tr>
          <th className="sticky left-0 border bg-gray-100"></th>

          {Array.from({length:COLUMN},(_,col)=>(
            <th
            key = {col}
            className="min-w-30 border px-2"
            >
            {getcolumnName(col)}
            </th>
          ))}
        </tr>
      </thead>

     <tbody>
     { Array.from({ length:ROW},(_, row ) => (
      <tr key = {row}>
        <th className="sticky left-0 border bg-gray-100">{row+1}</th>

        {Array.from({ length:COLUMN},(_,col) => {
          const address = `${getcolumnName(col)}${row+1}`

          return (
            <td 
            key = {address}
            className='border border-gray-200 p-0'
            >
              <input
              aria-label={address}
              value = {cell[address] ?? ''}
              onFocus={()=> setselectedCell(address)}
              onChange={(e) =>
                updatedCell(address,e.target.value)
              }
              className='h-7 w-full min-w-30 px-2 outline-none'
              />
            </td>
          )
        })}
      </tr>
     )) }
     </tbody>

    </table>
    </div>)
}




export default Table
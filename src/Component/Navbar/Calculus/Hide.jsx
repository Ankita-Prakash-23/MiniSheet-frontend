import React, { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Hide = () => {
    const [isTrue, setTrue] = useState(false)
    console.log(isTrue);
  return (
    <div>
       <ChevronUp 
       onClick={()=> setTrue(!isTrue)}

       />  
    </div>
  )
}

export default Hide
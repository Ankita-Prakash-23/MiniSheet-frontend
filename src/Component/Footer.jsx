import React from 'react'
import { Plus,TextAlignJustify } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex gap-2 sticky bottom-0 h-8 w-screen border border-gray-500 py-2 px-10 bg-white '>
        <Plus className='size-4' />
        <TextAlignJustify className='size-4'/>
        <h4 className='text-small pb-12'>Sheet1</h4>
    </div>
  )
}

export default Footer

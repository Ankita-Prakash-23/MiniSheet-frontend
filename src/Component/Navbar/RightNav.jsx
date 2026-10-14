import React from 'react'
import { MessageSquareText, Video, ChevronDown, LockKeyhole, User } from 'lucide-react';

const RightNav = () => {
  return (
    <div className='flex justify-center ml-auto gap-4 items-center pr-4 pt-2'>
     <div className='h-12 w-12 rounded-full flex item-center  justify-center hover:bg-gray-200'>
       <MessageSquareText className='size-5 mt-3' />
     </div>
      <div className='flex gap-2 h-10 w-20 items-center justify-center bg-gray-200 rounded-4xl '>
        <Video className='size-5' />
        <ChevronDown className='size-4 ' strokeWidth={3} />
      </div>
      <div className='flex items-center gap-0.5 text-green-600 '>
        <div className='flex h-10 w-24 gap-1.5 bg-green-200 justify-center items-center rounded-l-full pb-1'>
          <LockKeyhole className='size-5  ' />
          <h3>share</h3>
        </div>
        <div className='bg-green-200 flex justify-center pt-3 rounded-r-full h-10 w-9'>
          <ChevronDown className='size-4  ' strokeWidth={2.5} />
        </div>
      </div>
      <div className='flex h-10 w-26 pb-0.5 gap-1.5 bg-blue-200 justify-center items-center rounded-full text-blue-800'>
        <h3>upgrade</h3>
      </div>
      <div className='h-10 w-10  rounded-full hover:border-2 flex justify-center items-center hover:border-blue-800 hover:bg-blue-300' >
        <img  className='h-9 w-8 pb-1  rounded-full ' src='https://img.magnific.com/premium-vector/google-gemini-ai-assistant-logo-icon-artificial-intelligence-colorful-star-symbol-sign_1277382-6597.jpg?semt=ais_hybrid&w=740&q=80'></img>
      </div>
      <div className='h-10 w-10 rounded-full hover:border-2 hover:border-gray-400 flex items-center justify-center'>
        <User className='size-5.5' />
      </div>
    </div>
  )
}

export default RightNav
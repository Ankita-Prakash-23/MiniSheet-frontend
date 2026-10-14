import React from 'react'
import Logo from './Logo'
import { FolderInput, CloudCheck, Edit } from 'lucide-react';
import LeftBottom from './LeftBottom';
import FavStar from './FavStar';





const LeftNav = () => {

  return (
    <div>
      <div className='flex items-center gap-3 pt-0.5 '>

        <div className='text-[20px] no-underline font-normal flex mx-2 text-gray-700 border border-transparent hover:border-gray-600 w-fit items-center'>
          <input
            type="text"
            defaultValue="Untitled_Spreadsheet"
            className='w-57.5 min-w-0 border-none outline-none bg-transparent text-gray-400'
          />
        </div>
        <FavStar></FavStar>
        <div className='flex gap-3.5 items-center shrink-0'>
        
          <FolderInput className='size-4 text-gray-700' />
          <CloudCheck className='size-4.5 text-gray-700' />
        </div>
      </div>
      <div ><LeftBottom></LeftBottom></div>
    </div>
  )
}

export default LeftNav
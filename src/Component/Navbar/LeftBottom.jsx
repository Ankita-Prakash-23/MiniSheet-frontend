import React from 'react'
import File  from './FileComponent/File';
import EditSheet from './FileComponent/EditSheet';
import View from './FileComponent/View';
import Data from './FileComponent/Data';
import Insert from './FileComponent/Insert';
import Format from './FileComponent/Format';
import Tool from './FileComponent/Tool';
import Extension from  './FileComponent/Extension';
import Help from './FileComponent/Help';

const LeftBottom = () => {
  return (
    <div className='flex gap-3 text-gray-600 '>
       <File></File>
       <EditSheet></EditSheet>
       <View></View>
       <Insert></Insert>
       <Format></Format>
       <Data></Data>
       <Tool></Tool>
       <Extension></Extension>
       <Help></Help>
   
       </div>
  )
}

export default LeftBottom
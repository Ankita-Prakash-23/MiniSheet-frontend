import React from 'react'
import {
    Search, Undo2, Redo2, Printer, PaintRoller, PoundSterling, Percent,
    DecimalsArrowLeft, DecimalsArrowRight, Bold, Italic, Strikethrough,
     Baseline, PaintBucket, SquareDashedPlus, TextAlignStart, ChevronDown, 
     ArrowDownToLine, MoveDown, Funnel, Sigma} from 'lucide-react'
import Hide from './Hide'


const Mathematics = () => {
    return (
        <div className='flex bg-gray-200 gap-2 my-5 h-14 px-5 items-center rounded-4xl justify-around mx-2'>
            <Search />
            <Undo2 />
            <Redo2 />
            <Printer />
            <PaintRoller />
            <PoundSterling />
            <Percent />
            <DecimalsArrowLeft />
            <DecimalsArrowRight />

            <Bold />
            <Italic />
            <Strikethrough />
            <Baseline />

            <PaintBucket />
            <SquareDashedPlus />
            <TextAlignStart />
            <ChevronDown />
            <ArrowDownToLine />
            <MoveDown />
            <Funnel />
            <Sigma />
           <Hide></Hide>
        </div>
    )
}

export default Mathematics
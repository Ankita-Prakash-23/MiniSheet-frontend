import React ,{useState}from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'
import Logo from './Logo'

const Navbar = () => {
  const [isHidden, setisHidden] = useState(false)
  return (
    <div className='flex items-start  pt-1'>
      <Logo></Logo>
      {(!isHidden) && <LeftNav></LeftNav>}
      <RightNav></RightNav>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import {FaUserCircle,FaAngleDown, FaAngleUp , FaQuestion} from 'react-icons/fa'

const NavUser = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
    <nav className='w-full bg-blueDark text-white py-5 px-5 flex justify-end relative'>
        <div className="cont-nav flex justify-between items-center w-4/6">
            <h1 className='text-3xl font-bold'>Garden Goal</h1>
            <div className="icons flex">
                <FaUserCircle className='text-4xl'/>
                <FaAngleDown className='text-4xl'/>
            </div>
        </div>
    </nav>

    <div className="menu bg-purple/50 w-1/6 absolute right-0 text-white p-5 text-center rounded-l-lg">
        <div className="profile flex gap-5 justify-center items-center">   
            <h3 className='text-xl font-semibold'>FarmerName</h3>
            <FaUserCircle className='text-3xl'/>
        </div>
        <div className="item">
            <FaQuestion/>
            <span>q</span>
        </div>
        <div className="item">
            <span>w</span>
        </div>
        <div className="item">
            <span>e</span>
        </div>
    </div>
    </>
  )
}

export default NavUser
import React from 'react'
import { FaTimes } from 'react-icons/fa'


function Buttons({typeBtn, value, btnCont, extra}) {
  return (
    <>
    {typeBtn === 'white' ?
    <button className={`${extra}  btn bg-white text-blueDark py-3 px-6 rounded-full hover:bg-blueDark hover:text-white`}>
        <span className='text-lg font-bold sm:text-2xl'>{value}</span>
    </button>
    : typeBtn === 'purpleDark' ?
    <button className={`${extra} btn bg-primary text-white py-3 px-6 rounded-full hover:bg-purple hover:text-blueDark`}>
      <span className='text-lg font-bold sm:text-2xl'>{value}</span>
    </button>
    : typeBtn === 'btnCont' ?
    <button className={`${extra} btn bg-primary text-white py-3 px-6 rounded-full hover:bg-purple hover:text-blueDark`}>
      <span className='text-lg font-bold flex items-center gap-4 sm:text-2xl'>{value}{btnCont}</span>
    </button>
    : typeBtn === 'close' ?
    <button className={`${extra} text-blueDark hover:text-primary`}>
            <span className='text-2xl sm:text-4xl'><FaTimes/></span>
    </button>
    :extra != null ?
    <button className={`${extra} py-3 px-6 rounded-full`}>
        <span className="text-lg font-bold sm:text-2xl">{value}</span>
    </button>
    :
    <button className={`${extra} bg-blueDark text-white py-3 px-6 rounded-full hover:bg-white hover:text-blueDark`}>
        <span className="text-lg font-bold sm:text-2xl">{value}</span>
    </button>
    }
    </>
  )
}

export default Buttons
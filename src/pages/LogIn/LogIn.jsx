import React from 'react'
import planta from '../../assets/plantaLog.svg'
import AuthForm from '../../components/FormLogin/AuthForm'
import GGwhite from '../../assets/GGwhite.svg'
import '../LogIn/LogIn.css'

const LogIn = () => {
    return (
        <div className='Login-container'>
            <div className='nav'>
                <h1>Garden Goal</h1>
                <button>Sing Up</button>
            </div>
            <div className='cuerpo'>
                <img src={planta} alt="" />
                <AuthForm/>
            </div>
            <div className='foot'>
                <h3>© Garden Goal, 2022</h3>
                <img src={GGwhite} alt="" />
            </div>
        </div>
    )
}

export default LogIn
import React from 'react'
import plantaSing from '../../assets/plantaSingin.svg'
import RegisterForm from '../../components/FormRegister/RegisterForm'
import GGdark from '../../assets/GGdark.svg'
import '../SingIn/SingIn.css'

export const SingIn = () => {
    return (
        <div className='Singin-container'>
            <div className='nav'>
                <h1>Garden Goal</h1>
                <button>Log in</button>
            </div>
            <div className='cuerpo'>
                <img src={plantaSing} alt="" />
                <RegisterForm/>
            </div>
            <div className='foot'>
                <h3>© Garden Goal, 2022</h3>
                <img src={GGdark} alt="" />
            </div>
        </div>
    )
}

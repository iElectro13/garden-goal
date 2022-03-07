import React from 'react'
import '../FormRegister/RegisterForm.css'

const RegisterForm = () => {
    return (
        <form className='FormularioRegistro'>
            <h1>Register</h1>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='E-mail'/>
            <input type="text" placeholder='Password'/>
            <input type="text" placeholder='Confirm Password'/>
            <button>Go {`>>`}</button>
            <b>Do you have any account?</b>
        </form>
    )
}

export default RegisterForm
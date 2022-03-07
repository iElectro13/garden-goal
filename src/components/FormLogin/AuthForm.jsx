import React from 'react'
import '../FormLogin/AuthForm.css'

const AuthForm = () => {
    return (
        <form className='Formulario'>
            <h1>Log in</h1>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Password'/>
            <button>Go {`>>`}</button>
            <b>Forgot your password?</b>
        </form>
    )
}

export default AuthForm
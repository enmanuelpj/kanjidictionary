import React from 'react'
import './styles/Register.css'

function Login() {

    return (


        <div className='register-div'>
            <h1 className='app-title'>自分の和辞書</h1>
            <form>
                <div id='login-input-container' className='input-container'>
                    <label id='label-username' className='name-label'>Username</label>
                    <input 
                            type='text' 
                            id='input-field' 
                            className='name-input'
                            ></input>
                    

                    <label id='label-password' className='name-label'>Password</label>
                    <input 
                            type='password' 
                            id='input-field' 
                            className='name-input'
                            ></input>
                        
                    <button id='login-button' className='form-button'>Login</button>

                </div>
                
            </form>
        </div>


    )
}

export default Login;
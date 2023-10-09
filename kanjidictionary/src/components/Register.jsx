import React from 'react'
import './styles/Register.css'

function Register() {
    return(

        <div className='register-div'>
            <h1 className='app-title'>自分の和辞書</h1>
            <form>
                <div className='input-container'>
                    <label id='label-name' className='name-label'>Name</label>
                    <input 
                            type='text' 
                            id='input-field' 
                            className='name-input'
                            ></input>

                    <label id='label-username' className='name-label'>Username</label>
                    <input 
                            type='text' 
                            id='input-field' 
                            className='name-input'
                            ></input>
                    
                    <label id='label-email' className='name-label'>Email</label>
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
                    
                    <label id='label-repeat' className='name-label'>Repeat Password</label>
                    <input 
                            type='password' 
                            id='input-field' 
                            className='name-input'
                            ></input>
                        
                    <button id='register-button' className='form-button'>Register</button>

                </div>
                
            </form>
        </div>

    )
}

export default Register;
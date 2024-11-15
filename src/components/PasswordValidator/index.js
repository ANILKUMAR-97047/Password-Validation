import {useState} from 'react'
import './index.css'
const PasswordValidator = () => {
    const [password,checkpassword] = useState('')
    const inputPassword = (event) =>{
        checkpassword(event.target.value)
        
    }
    const errorMsg = password.length < 8 ? 'Your password must be 8 characters' : "";

    return(
        <div className='bg-container'>
        <div className  ='app-container'>
            <h1 className='heading'>Password Validator</h1>
            <p className='description'>Check how strong and secure your password</p>
            <input type='password' onChange={inputPassword} />
            <p className='error'>{errorMsg}</p>
        </div> 
        </div>
    )

}
export default PasswordValidator


import {useState} from 'react';
import './LoginForm.css'
import {useLocation} from "react-router";

type Login = {
    login: string,
    password: string
}

const myLogin: Login = {
    login: 'aa',
    password: 'aa'
}
export function LoginForm ({onLogin}) {



    const [inputMail, setInputMail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [error, setError] = useState('')
    const checkData = () => {

        if (myLogin.login === inputMail && myLogin.password === inputPassword) {
            onLogin(true)
        } else {
            setError('Неверный логин или пароль')
        }
    }

    return (
        <div className='style'>
            <input  value={inputMail} onChange={(e)=>setInputMail(e.target.value)} className="input" placeholder='login'/>
            <input type='password' value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} className="input" placeholder='password'/>
            <button onClick={()=> checkData()} className='gradient-button'>Зайти</button>
            <span className='span'>{error}</span>
        </div>
    )
};
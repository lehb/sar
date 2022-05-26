import React from 'react'
import './login.css'
import {LoginForm}from '../../components'
import {Header} from '../../containers'
const Login = () => {
  return (
    <div className='login'>
        <Header title='Se connecter'/>
        <LoginForm/>
    </div>
  )
}
export default Login
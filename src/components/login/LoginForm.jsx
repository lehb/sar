import React, { useState,useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from '../../store/userContext'
import "./login.css";
const initialState={
  email:'',
  password:'',
  hasError:false,
  hasSuccess:false,
  isPending:false
}
const LoginForm = () => {
  const {state,dispatch} = useContext(AuthContext)
  const [data, setData] = useState(initialState);
  const {
    email,
    password,
    hasError,
    hasSuccess,
    isPending
  } = data
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  //login 
  const handleLogin = (e)=>{
e.preventDefault()
if(email&&
  password&&
  !hasError) {
    let user = {
    email: email.toLocaleLowerCase(),
    password: password,
  }
  setData({...data,isPending:true})
axiosInstance.post('/auth/login',user)
          .then(res=>{
            if(res.status===200){
              console.log(res.data)
              setData({...initialState,hasSuccess:true})
              localStorage. setItem('tokens',JSON.stringify(res.data.tokens))
              dispatch({type:'LOG_IN', payload:res.data})
              navigate('/ahr')
            }
          })
          .catch((error) => {
            if(error. response && (error. response. status)===400){
               setData({...initialState, hasError:true})
              }})
}
};
  return (
    <div className="login-form">
      <form>
        {data.hasError && <span style={{color:'red'}}>Email / mot de passe invalide</span>}
      <input
          name="email"
          type="email"
          placeholder="Email..."
          id="email"
          value={data.email}
          onChange={handleInputChange}
          onFocus={()=>{
            setData({...data, hasError:false})
          }}
        />
      <input
          name="password"
          type="password"
          placeholder="Mot de passe..."
          id="password"
          value={data.password }
          onChange={handleInputChange}
        />
        <div className="action-connect">
          <button
            onClick={handleLogin}
          >
            Connexion
          </button>
        
          <p>OU</p>
         <Link  to='/register'><p>Créer un compte</p> </Link>
         
        </div>

      </form>
    </div>
  );
};

export default LoginForm;

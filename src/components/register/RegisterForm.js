import React, { useState, useEffect } from "react";
import Error from "../Error/Error";
import {useNavigate} from 'react-router-dom'
import "./register.css";
import axiosInstance from "../../utils/axiosInstance";

const RegisterForm = () => {
  const navigate = useNavigate()
  const initialState={
    nom: "",
    prenoms: "",
    email: "",
    password: "",
    password2: "",
    isPending: false,
    hasSuccess: false,
    hasError: false,
  }
  const [formData, setFormData] = useState(initialState);
  const {
    nom,
    prenoms,
    email,
    password,
    password2,
    isPending,
    hasSuccess,
    hasError,
  } = formData;
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom && prenoms && email && password && password2 && !hasError) {
      let user = {
        name: nom.concat(" ", prenoms),
        email: email.toLocaleLowerCase(),
        password: password,
      }
      setFormData({...formData,isPending:true})
axiosInstance.post('/auth',user)
              .then(res=>{
                if(res.status===201){
                  setFormData({...initialState,hasSuccess:true})
                }
                setTimeout(() => {
                  navigate('/')
                }, 1000);
              })
              .catch((error) => {
                if(error. response && (error. response. status)===400){
                   console.log(error. response. data)
                   setFormData({...initialState,hasError:true})
                  }})
     
    }
  };
  return (
    <div className="register-form">
      <h1>Nouveau compte</h1>
      {hasError ? "Compte existant" : null}
      {hasSuccess ? "Compte créé avec succès" : null}
      <form>
        <input
          type="text"
          placeholder="Nom..."
          name="nom"
          value={formData.nom}
          onChange={onChangeInput}
        />
        <input
          type="text"
          placeholder="Prénoms..."
          name="prenoms"
          value={formData.prenoms}
          onChange={onChangeInput}
        />
        <input
          type="Email"
          placeholder="Email..."
          name="email"
          value={formData.email}
          onChange={onChangeInput}
        />
        {email && !/^[a-zA-Z0-9].[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email) ? 
            <Error text="email invalide" />
       
        : null}

        <input
          type="password"
          placeholder="Mot de passe..."
          name="password"
          value={formData.password}
          onChange={onChangeInput}
        />
        <input
          type="password"
          placeholder="Retaper mot de passe..."
          name="password2"
          value={formData.password2}
          onChange={onChangeInput}
        />
        {password !== password2 ? (
          <Error text="Mots de passe non identiques" />
        ) : null}
        <button
         type="submit" 
         onClick={handleSubmit}>
          {isPending ? "Loading..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;

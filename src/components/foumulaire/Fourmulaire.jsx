import React from 'react'
import check from '../../assets/check.png'
import "./fourmulaire.css"
const Fourmulaire = ({text}) => {
  return (
    <div className='fourmulaire'>
        <p>
            {text}
        </p>
        <hr/>
         <img src={check} alt="checked" />

    </div>
  )
}

export default Fourmulaire
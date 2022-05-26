import React from 'react'
import Title from '../title/Title'
import './textComp.css'
const TextComp = ({title, data, type}) => {
  return (
    <div className='textComp'>
    <Title title={title}/>
      <div className='text-wraper'>
       {
        type==='infos'?
       data?
          <ul>
          <li> <span className='firstSapan'>Encadrant </span> <span className='secondSapan'>{data.encadrant.toUpperCase()}</span></li>
          <li><span className='firstSapan'>HSE </span><span className='secondSapan'>{data.hse.toUpperCase()}</span></li>
          <li><span className='firstSapan'>HSE EE </span><span className='secondSapan'>{data.hse_ee.toUpperCase()}</span></li>
          <li><span className='firstSapan'>EE</span><span className='secondSapan'>{data.ee.toUpperCase()}</span></li>
          <li><span className='firstSapan'>Lieu d'act.</span ><span className='secondSapan'>{data.lieu.toUpperCase()}</span></li>
          <li></li>
          </ul>
          :"Pas d'infos"
:<p>
{data? data:'Pas de données'}</p>}
     
    </div>
    </div>
  
  )
}

export default TextComp
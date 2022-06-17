import React from 'react'
import Title from '../title/Title'
import './textComp.css'
const TextComp = ({title, data, type}) => {
  console.log(data)
  return (
    <div className='textComp'>
    <Title title={title}/>
      <div className='text-wraper'>
       {
        type==='ahr'?
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
:<div>
{data?   <ul>
          <li> <span className='firstSapan'>Organisme </span> <span className='secondSapan'>{data.organisme.toUpperCase()}</span></li>
          <li><span className='firstSapan'>HSE OCP </span><span className='secondSapan'>{data.hse_ocp.toUpperCase()}</span></li>
          
          <li></li>
          </ul>:'Pas de données'}</div>}
     
    </div>
    </div>
  
  )
}

export default TextComp
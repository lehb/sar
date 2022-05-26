import React from 'react'
import './fourmulaires.css'
import { ImgComp, Title } from '../../components'
const ReportFourmulaires = ({fourmulaires}) => {
  return (
    <div className='fourmulaires-container'>
      <Title title="Fourmulaires"/>
    <div className='fourmulaires'>
      {
          fourmulaires ? fourmulaires.map((f,i)=>{
            
              
            
              return<div className="imgReportSize"> <ImgComp key={i} src={f.img} name={f.title}/>  </div>
          }) :'Pas de fourmulaire'
      }
    </div>
    </div>
  
  )
}

export default ReportFourmulaires
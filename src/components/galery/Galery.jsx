import React from 'react'
import './galery.css'
import {ImgComp}  from '../../components'
const Galery = ({pieces}) => {
  return (
    <div className='galery'>
{
pieces?.length?
pieces.map((p, id)=>{
return <div key={id} className="galery__img-wrapper">
    <div className='container-img-galery'>
    <ImgComp src={p.img} name={p.title} />     
  </div>
  </div> 
}
):"Pas d'image téléchargée" 
}
   
</div>)
}

export default Galery
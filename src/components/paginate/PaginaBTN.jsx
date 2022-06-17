import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {TourContext} from '../../store/tourContext'
import './paginat.css'
const PaginaBTN = ({page,setPage,type}) => {
  const {stateTour,dispatchTour} = useContext(TourContext)
  const navigate =  useNavigate()
  const handleClickForward =(e)=>{
    e.preventDefault()
if(page===3){
  if (type=='tour') {
    navigate('/tour-report')
  }else if(type=='ahr'){
    navigate('/ahr-report') 
  }
}
else if(page<3){
  setPage(page+1)
}
  }
  const handleClicBack =(e)=>{
    e.preventDefault()
    if(page>0){
      setPage(page-1)
    } 
      }
  return (
    <div className='paginate_buttons'>
        <button disabled={page==0}  onClick={handleClicBack}>Précedent</button>
        {/* Button suivant/generer rapport */}
        <button onClick={handleClickForward}>{page==3?'Générer rapport':'Suivant'}</button>
    </div>
  )
}
export default PaginaBTN
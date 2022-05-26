import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {ahrContext} from '../../store/ahrContext'
import './paginat.css'
const PaginaBTN = ({page,setPage}) => {
  const {state,dispatch} = useContext(ahrContext)
  const navigate =  useNavigate()
  const handleClickForward =(e)=>{
    e.preventDefault()
if(page===4){
  console.log('state a sauvgereder', state);
 dispatch({
   type:'SAVE_AHR', 
   payload:state
 })

  navigate('/ahr-report')
}
else if(page<4){
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
        <button onClick={handleClickForward}>{page==4?'Générer rapport':'Suivant'}</button>
    </div>
  )
}
export default PaginaBTN
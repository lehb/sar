import React,{useState, useContext} from 'react'
import './ahractions.css'
import {FormAnnexe, Galery,PaginaBTN} from '../../components'
import { ahrContext } from '../../store/ahrContext' 
const AHRAction = ({page,setPage}) => {
  const {state,dispatch} = useContext(ahrContext)
  const [Actions, setActions] = useState([])
  return (
    <div>
        <FormAnnexe type='ahr' action="ADD_ACTIONS"/>
        <Galery pieces={state.actions}/> 
        <PaginaBTN page={page} setPage={setPage} type='ahr'/>
    </div>
  )
}
export default AHRAction
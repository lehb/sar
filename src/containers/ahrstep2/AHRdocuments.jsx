import React,{useState, useContext} from 'react'
import './ahrdocuments.css'
import { ahrContext } from '../../store/ahrContext'
import { FormAnnexe, Galery, PaginaBTN, } from '../../components'

const AHRdocuments = ({page,setPage}) => {
  const {state,dispatch}= useContext(ahrContext)
 
  return (
    <div>
      <FormAnnexe type="Documents" />
      <Galery type="Documents" pieces={state.documents} />
    <PaginaBTN page={page} setPage={setPage}/>
    </div>
  )
}

export default AHRdocuments
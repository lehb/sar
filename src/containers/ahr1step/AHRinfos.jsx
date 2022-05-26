import React from 'react'
import './ahrinfos.css'
import {InfosGenerals, PaginaBTN}from '../../components'

const AHRinfos = ({page,setPage}) => {
  return (
    <div> 
    <InfosGenerals />
    <PaginaBTN page={page} setPage={setPage}/>
    </div>
  )
}
export default AHRinfos
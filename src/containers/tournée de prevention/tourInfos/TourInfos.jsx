import React from 'react'
import { InfosTour, PaginaBTN } from '../../../components'
import './infos.css'
const TourInfos = ({page, setPage}) => {
  const action=["ADD_NATURE_TOUR","ADD_TOUR_INFOS"]
  return (
    <>
     <InfosTour type='tour' action={action[0]} />
    <PaginaBTN page={page} setPage={setPage}/>
    </>
  )
}

export default TourInfos
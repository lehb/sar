import React,{useContext} from 'react'
import './docs_tour.css' 
import { FormAnnexe, Galery , PaginaBTN} from '../../../components'
import { TourContext } from '../../../store/tourContext'
const DocsTour = ({page,setPage}) => {
  const {stateTour} = useContext(TourContext)
  return (
    <div>
       <FormAnnexe type="tour" action='ADD_DOCS_TOUR' ph='Document...' />
       <Galery type="Documents" pieces={stateTour.documents} />
       <PaginaBTN page={page} setPage={setPage}/> 
    </div>
  )
}

export default DocsTour
import React ,{useState,useEffect, useContext}from "react";
import "./thematique.css";
import PaginaBTN from "../paginate/PaginaBTN";
import { ahrContext } from "../../store/ahrContext";

const Thematique = ({page,setPage}) => {
  const { dispatch, state } = useContext(ahrContext);
  
  const [them, setThem] = useState('')
  const [hasError, setHasError] = useState(true)
  useEffect(() => {
    if (them.length) setHasError(false) 
  }, [them])
  useEffect(() => {
    if (!hasError) dispatch({type:'ADD_THEMATIQUE', payload:them})
  }, [them])
  return (
    <>
      <div>
        <h3>Thematique de l'assistance</h3>
          <textarea 
          name="thematique" 
          placeholder="Ecrire les points d’assistance..." 
          id="thema" cols="40" rows="10" autoFocus={true}
          value={them}
          onChange={(e)=>{
            setThem(e.target.value)
          }}
          >
              </textarea>
              <PaginaBTN page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Thematique;

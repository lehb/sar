import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import './ahr.css'
import AHRinfos from '../ahr1step/AHRinfos'
import { ahrContext } from '../../store/ahrContext'
import AHRAction from '../ahrstep4/AHRAction'
import Header  from '../header/Header'
import { Fourmulaires  } from '../../containers'
import { Thematique } from '../../components'
const Ahr = () => {
  const navigate = useNavigate()
  const {dispatch, state}= useContext(ahrContext)
  const [page, setPage] = useState(0);
  const titles = ["Infos générales", "Foumulaires", "Thématique","Actions"];
  const displayPage = () => {
    if (page === 0) {
      return <AHRinfos page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <Fourmulaires page={page} setPage={setPage} />;
    } else if (page === 2) {
      return <Thematique page={page} setPage={setPage}/>;
    } 
   else if (page === 3)  {
      return <AHRAction page={page} setPage={setPage} />;
    }
  };
  return (
    <>
      <Header title={titles[page]} />
      <div className="ahr_frame">
       {displayPage()}
      </div>
    </>
  );
};
export default Ahr
import React,{useState,useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './ahr.css'
import AHRinfos from '../ahr1step/AHRinfos'
import AHRdocuments from '../ahrstep2/AHRdocuments'
import { ahrContext } from '../../store/ahrContext'
// import {AuthContext} from '../../store/userContext'
import AHRAction from '../ahrstep4/AHRAction'
import Header  from '../header/Header'
import { Fourmulaires  } from '../../containers'
import { Thematique } from '../../components'
const Ahr = () => {
  const navigate = useNavigate()
  const {dispatch, state}= useContext(ahrContext)
  // const {user} = useContext(AuthContext)
  const [page, setPage] = useState(0);
//   useEffect(() => {
//    const getAhrs=()=>{
// axiosInstance.get('/ahr/')
// .then(res=>{
//   if(res.status===200){
//   dispatch({type:'POPULATE_AHRS',
//               payload:res.data})
//   }
// })
// .catch(err=>{
//   if(err.response.status===403){
//     navigate('/login')
//   }
// })
//    }
//    getAhrs()
//   console.log(state);
//   }, [])
  const titles = ["Infos générales", "Foumulaires", "Thématique", "Documents","Actions"];
  const displayPage = () => {
    if (page === 0) {
      return <AHRinfos page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <Fourmulaires page={page} setPage={setPage} />;
    } else if (page === 2) {
      return <Thematique page={page} setPage={setPage}/>;
    } else if (page === 3) {
      return <AHRdocuments page={page} setPage={setPage} />;
    }
   else if (page === 4)  {
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
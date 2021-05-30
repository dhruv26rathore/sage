import Axios from 'axios'
import React ,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import FacultyHomeHelper from '../../Components/FacultyHomeHelper' 
const EditNotice=()=> {
   let History = useHistory();
   const {id}=useParams();
   const [Notice,setNotice]=useState({
     txt:""
   })
   const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()

  const {txt} = Notice
  const onInputChange=e=>{
    setNotice({...Notice,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    loadNotice()
  },[]);

  const onSubmit =async e=>{
    e.preventDefault();
    await Axios.put(`https://node.techforcode.xyz/api/faculty/Updatenotice/${id}`,Notice);
    History.push("/faculty/Notice")
  }

  const loadNotice = async () =>{
    const result = await Axios.get(`https://node.techforcode.xyz/api/faculty/getnotice/${id}`)
    setNotice(result.data.notice);
  }
  return (
    <div>
    {store.faculty.isAuthenticated ? <>
      <FacultyHomeHelper />
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Notice</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="txt"
              value={txt}
               onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Notice</button>
        </form>
      </div>
    </div>
    </> : (history.push('/'))}
        </div>
  )
}

export default EditNotice
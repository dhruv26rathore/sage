import Axios from 'axios'
import React ,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import FacultyHomeHelper from '../../Components/FacultyHomeHelper' 
const AddNotice=()=> {
   let History = useHistory();
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
  const onSubmit =async e=>{
    e.preventDefault();
    await Axios.post("https://node.techforcode.xyz/api/faculty/createnotice",Notice);
    History.push("/faculty/Notice")
  }
  return (
    <div>
    {store.faculty.isAuthenticated ? <>
      <FacultyHomeHelper />
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Notice</h2>
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
          <button className="btn btn-primary btn-block">Add Notice</button>
        </form>
      </div>
    </div>
    </> : (history.push('/'))}
        </div>
  )
}

export default AddNotice
import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import Axios from 'axios'
import {NavLink,Link} from 'react-router-dom'
const FacultyAddNotice = ()=> {
    
    const [Notices,setNotice] = useState([])
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        loadNotices();
    }, []);

    const loadNotices = async ()=>{
        const result = await Axios.get("https://node.techforcode.xyz/api/student/notices")
        setNotice(result.data.reverse());
    }
    
    const deleteNotice = async id => {
        await Axios.delete(`https://node.techforcode.xyz/api/faculty/Deletenotice/${id}`);
        loadNotices();
      };
    return (
        <div>
        {store.faculty.isAuthenticated ? <>
            <FacultyHomeHelper />
        <div>            
            <div className="container">
      <div className="py-4">
        <h1>Upload notices from here</h1>
        <Link className="btn btn-outline-info" style={{borderRadius: "35px"}} to="/faculty/AddNotice">➕</Link>
        <pre></pre>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Date</th>
              <th scope="col">Notice</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Notices.map((notice, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{notice.Date}</td>
                <td>{notice.txt}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/faculty/EditNotice/${notice._id}`}
                  >
                    📝
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteNotice(notice._id)}
                  > 🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
        </> : (history.push('/'))}
        </div>
    )
}

export default FacultyAddNotice

import React, {useState,useEffect} from 'react'
import { NavLink,Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
const logo = "https://sageuniversity.in/file/2018/09/Sage-University.png"


const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="#">
                        <img style={{width:"65%"}} src={logo} alt="logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">              
            <>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/faculty">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Edit</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/faculty/updateProfile">Edit Profile</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/faculty/updatePassword">Change Password</NavLink>
                    </div>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/faculty/uploadMarks">Marks</NavLink>
                        
                    </li>
                    <li className="nav-item ">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/attendenceFaculty">Attendance</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/faculty/Notice" >Notice</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/" onClick={logoutHandler}>Logout</NavLink>
                    </li>
                </>
                {/*  */}
              
            </ul>
            </div>
            </nav>
        </div>
    )
}

export default Home

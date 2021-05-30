import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
const logo = "https://sageuniversity.in/file/2018/09/Sage-University.png"

const Home = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid">
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
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/admin">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Edit</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/addFaculty">Add Faculty</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/addStudent">Add Student</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/addSubject">Add Subject</NavLink>
                    </div>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Manage Admins</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/addAdmin">Add Admin</NavLink>
                    </div>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    College</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/allFaculties" >All Faculties</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/allStudents" >All Students</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/admin/allSubject" >Subjects</NavLink>
                    </div>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" onClick={logoutHandler} to="/">Logout</NavLink>
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

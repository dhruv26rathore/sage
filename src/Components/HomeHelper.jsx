import React, {useState, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'
const logo = "https://sageuniversity.in/file/2018/09/Sage-University.png"
 
const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
   var noti = store.student.newerChats.length==0 ?"No new notification":`${store.student.newerChats.length} New Message`
   var popu = store.student.newerChats.length==0 ?"Notification":`${store.student.newerChats.length} Notification`

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
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Edit</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/student/updateProfile">Edit Profile</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/student/updatePassword">Change Password</NavLink>
                    </div>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Academics</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/student/testPerformance">Marks</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/student/attendence">Attendance</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/student/getAllSubjects">Subject List</NavLink>
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/student/notice">Notices/News</NavLink>
                    </div>
                    </li>
                    <li className="nav-item ">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/studentDetails">Chats</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {popu}</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink exact activeClassName="active-page" className="nav-link poin" to="/studentDetails" >{noti}</NavLink>
                    </div>
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

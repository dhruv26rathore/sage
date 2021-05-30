import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'


const FacultyInterface = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    console.log(store.faculty.faculty.faculty.avatar)
    return (
        <>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-5">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.faculty.faculty.faculty.name}</h5>
                                            <h5 className="card-title">{store.faculty.faculty.faculty.registrationNumber}</h5>
                                            <NavLink exact activeClassName="active-page" className="nav-link" to='/faculty/updateProfile'>Edit Profile</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <table className="bg-dark">
                                        <tbody className="table border text-white">
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.faculty.faculty.faculty.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.faculty.faculty.faculty.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.faculty.faculty.faculty.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{store.faculty.faculty.faculty.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Designation</td>
                                                <td>{store.faculty.faculty.faculty.designation}</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Year</td>
                                                <td>{store.faculty.faculty.faculty.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.faculty.faculty.faculty.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

                                                    "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.faculty.faculty.faculty.facultyMobileNumber ?
                                                    store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">

                        </div>

                    </div>
                </div>

            </> : (history.push('/'))}
           
        </>


    )
}

export default FacultyInterface

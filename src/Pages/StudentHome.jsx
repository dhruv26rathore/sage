import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { NavLink,Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'

const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

const chatname =()=>{
    return store.student.student.student.name;
}
    

    return (
            <>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-5">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title">{store.student.student.student.registrationNumber}</h5>
                                            <NavLink exact activeClassName="active-page" className="nav-link" to='/student/updateProfile'>Edit Profile</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <table className="bg-dark ">
                                        <tbody className="table border text-white">
                                        <tr>
                                                <td>Name</td>
                                                <td>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Aadhar Card</td>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
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

export default Home

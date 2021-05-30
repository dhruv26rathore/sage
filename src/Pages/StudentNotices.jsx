import React, {useState,useEffect} from 'react';
import HomeHelper from '../Components/HomeHelper'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import '../App.css'
const Notice = () =>{
    const store = useSelector((store) => store)
    const history = useHistory()
    const [Notices, setNotices] = useState([])
    useEffect(()=>{
        fetch('https://node.techforcode.xyz/api/student/notices')
        .then(res => res.json())
        .then(res => {setNotices(res);
        })
        .catch(error =>{
            console.log(error)
        })
    });
    return (
        <div>
        {store.student.isAuthenticated ? <>
        <HomeHelper />
        <div className="Noticediv"><h1>Notices</h1></div>
            <table id="customers">
            <thead><th>Date</th><th>Notice</th></thead>
            <tbody>
                {Notices.map((p)=>{
                    return <Tr Notice={p}/>
                })}
            </tbody>
            </table>
        </> : (history.push('/'))
    }</div>
    )
        }

const Tr =({Notice})=>{
    return( 
    <tr><td>{Notice.Date}</td><td>{Notice.txt}</td></tr>
        )
}


export default Notice;
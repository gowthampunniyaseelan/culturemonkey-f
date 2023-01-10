import axios from "axios";
import {useState} from "react"
import "../../static/css/user/GetUser.css"
import Navbar from "../nav/Navbar";
import moment from "moment"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function GetUser(){
  const[userId,setUserId] = useState("")
  const[showFirstName,setShowFirstName] = useState([])
  const[showLastName,setShowLastName] = useState([])
  const[showEmail,setShowEmail] = useState([])
  const[showDesignation,setShowDesignation] = useState([])
  const[showDateOfBirth,setShowDateOfBirth] = useState([])
  const[showActive,setShowActive] = useState([])
  function notify(){
    toast("Success")
  }
  function notifyerror(message){
    toast.error(message)
  }
  async function getUserdetails(e){
    e.preventDefault();
    setUserId("")
    try{
     await axios.get(`/user-management/user-details/users/${userId}`).then((result)=>{
      const {data} = result
      console.log(result);
      if(data){
        data.users.map((value)=>(
          storeDetails(value)
        ))   
       notify()
       }
     }).catch((err)=>{
      console.log(err);
      const {response}  = err
      notifyerror(response.data.message)
     })
    }catch(err){
      console.log(err);
    }
  }

  function storeDetails(value){
    setShowFirstName(value.first_name)
    setShowLastName(value.last_name)
    setShowEmail(value.email)
    setShowDesignation(value.designation)
    setShowDateOfBirth(value.date_of_birth)
    setShowActive(value.active)
  }
  return (
    <>
  <Navbar/>
    <div className="get-user-container">
    <form onSubmit={getUserdetails}  className="get-user-form-container">
    <h3>Get user</h3>
    <div className="get-user-email-id">
    <label htmlFor="email">User Email ID </label>
    <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} />
    </div>  
    <div className="get-user-button">
    <input type="submit" value="Submit" />
    </div>
    </form>
    <div className="get-user-show-details">
    <p className="get-user-show-first-name">First Name : <span style={{fontWeight:"bold"}}>{showFirstName}</span></p>
    <p className="get-user-show-last-name">Last Name : <span style={{fontWeight:"bold"}}>{showLastName}</span></p>
    <p className="get-user-show-email">Email : <span style={{fontWeight:"bold"}}>{showEmail}</span></p>
    <p className="get-user-show-designation">Designation : <span style={{fontWeight:"bold"}}>{showDesignation}</span></p>
    <p className="get-user-show-dob">D-O-B : <span style={{fontWeight:"bold"}}>{showDateOfBirth}</span></p>
    <p className="get-user-show-active">Active : <span style={{fontWeight:"bold"}}>{String(showActive)}</span></p>
    </div> 
    <ToastContainer/>
    </div>
    </>
    )
}
export default GetUser;
import axios from "axios";
import {useState} from "react"
import "../../static/css/company/AddUser.css"
import Navbar from "../nav/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddUser(){
  const[company_id,setCompanyId] = useState("")
  const[first_name,setFirstName] = useState("")
  const[last_name,setLastName] = useState("")
  const[email,setEmail] = useState("")
  const[designation,setDesignation] = useState("")
  const[date_of_birth,setDateOfBirth] = useState("")
  const[active,setActive] = useState(true);
  function notify(message){
    toast(message)
  }
  function notifyerror(message){
    toast.error(message)
  }
  async function postUserdetails(e){
    e.preventDefault();
    setCompanyId("")
    setFirstName("")
    setLastName("")
    setEmail("")
    setDesignation("")
    setDateOfBirth("")
    try{
     await axios.put(`/company-management/user-management/users/${company_id}`,{
      first_name:first_name,
      last_name:last_name,
      email:email,
      designation:designation,
      date_of_birth:date_of_birth,
      active:active
      }).then((res)=>{
        const {data} = res
        notify(data.message)
      }).catch((err)=>{
        const {response} = err
        const{data} = response
        notifyerror(data.message)
      })
    }catch(err){
      console.log(err);
    }
  } 
  return (
    <>
<Navbar/>
<div className="add-container">
  <form onSubmit={postUserdetails} className="add-form-container">
    <h3 style={{marginLeft:-170,marginTop:20}}>Add User</h3>
    <div className="add-company-id">
      <label htmlFor="name">Company ID </label>
      <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
    </div>     
    <div className="add-first-name">
      <label htmlFor="name">First Name </label>
      <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} required/>
    </div>      
    <div className="add-last-name">
      <label htmlFor="address">Last Name </label>
      <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)} required/>
    </div>
    <div className="add-email">
      <label htmlFor="coordinates">Email </label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    </div>     
    <div className="add-designation">
      <label htmlFor="coordinates">Designation </label>
      <input type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
    </div>
    <div className="add-dob">
      <label htmlFor="coordinates">Date of birth </label>
      <input type="date" value={date_of_birth} onChange={(e)=>setDateOfBirth(e.target.value)} required/>
    </div>
    <div className="add-button">
      <input type="submit"/>
    </div>
  </form>
  <ToastContainer/>
</div>
</>
    )
}
export default AddUser;

import axios from "axios";
import {useState} from "react"
import "../../static/css/company/RemoveUser.css"
import Navbar from "../nav/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RemoveUser(){
  const[emailId,setEmailId] = useState("")
  function notify(message){
    toast(message)
  }
  function notifyerror(message){
    toast.error(message)
  }
  async function removeUserFromCompany(e){
    e.preventDefault();
    setEmailId("");
    try{
      await axios.delete(`/company-management/user-management/users/${emailId}`).then((result)=>{
        const {data} = result
        notify(data.message) 
      }).catch((err)=>{
        const {response}  = err
        notifyerror(response.data.message)
      })
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="remove-container">
    <form onSubmit={removeUserFromCompany} className="remove-form-container">
    <h3>Remove user</h3>
    <div className="remove-email-id">
    <label htmlFor="email">EmailID </label>
    <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
    </div>
    <div className="remove-button">
      <input type="submit" value="Submit" />
    </div> 
    </form>
    </div>
    <ToastContainer/>
    </>
    )
}
export default RemoveUser;
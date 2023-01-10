import axios from "axios";
import {useState} from "react"
import "../../static/css/company/CreateCompany.css"
import Navbar from "../nav/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateCompany(){
  const[company_id,setCompanyId] = useState("")
  const[company_name,setName] = useState("")
  const[company_address,setAddress] = useState("")
  const[latitude,setLatitude] = useState("")
  const[longitude,setLongitude] = useState("")

function notify(message){
  toast(message)
}
function notifyerror(message){
  toast.error(message)
}
  async function postThedetails(e){
    e.preventDefault();
    setCompanyId("")
    setName("")
    setLatitude("")
    setLongitude("")
    setAddress("")
    try{
     await axios.post("/company-management",{
        company_id:company_id,
        company_name:company_name,
        company_address:company_address,
        coordinates:[latitude,longitude]
      }).then((result)=>{
        const {data} = result
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
    <div className="create-container">
    <form onSubmit={postThedetails} className="create-form-container">
    <h3 style={{marginLeft:-180,marginTop:30,position:"absolute"}}>Create Company</h3>
      <div className="create-company-id">
      <label htmlFor="name">Company ID </label>
      <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
      </div>
      
      <div className="create-company-name">
      <label htmlFor="name">Company Name </label>
      <input type="text" value={company_name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      
      <div className="create-address">
      <label htmlFor="address">Company Address </label>
      <input type="text" value={company_address} onChange={(e)=>setAddress(e.target.value)} required/>
      </div>
      
      {/* <div className="create-coordinates">
      <label htmlFor="coordinates">Coordinates </label>
      </div> */}
      <div className="create-latitude">
      <label htmlFor="latitude">Latitude </label>
      <input type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)} required/>
      </div>
      <div className="create-longitude">
      <label htmlFor="longitude">Longitude </label>
      <input type="text" value={longitude} onChange={(e)=>setLongitude(e.target.value)} required/>
      </div>
      <div className="create-button">
      <input type="submit" value="Submit" />
      </div>
    </form>
    <ToastContainer/>
    </div>
    </>
    )
}
export default CreateCompany;

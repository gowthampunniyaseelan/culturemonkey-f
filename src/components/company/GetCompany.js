import axios from "axios";
import {useState} from "react"
import "../../static/css/company/GetCompany.css"
import Navbar from "../nav/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function GetCompany(){
  const[companyId,setCompanyId] = useState()
  const[showCompanyId,setShowCompanyId] = useState()
  const[showCompanyName,setShowCompanyName] = useState()
  const[showCompanyAddress,setShowCompanyAddress] = useState()
  const[showCompanyLatitude,setShowCompanyLatitude] = useState()
  const[showCompanyLongitude,setShowCompanyLongitude] = useState()
  function notify(message){
    toast(message)
  }
  function notifyerror(message){
    toast.error(message)
  }
  async function getThedetails(e){
    e.preventDefault();
    setCompanyId()
    try{
      await axios.get(`/company-management/company-details/${companyId}`).then((result)=>{
        setShowCompanyId(result.data.company_id)
        setShowCompanyName(result.data.company_name)
        setShowCompanyAddress(result.data.company_address)
        setShowCompanyLatitude(result.data.coordinates[0])
        setShowCompanyLongitude(result.data.coordinates[1])
        notify("Success")
      }).catch((err)=>{
        const {response}  = err
        notifyerror(response.data.message)
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <Navbar/>
    <div className="get-container">
    <form onSubmit={getThedetails} className="get-form-container">
    <h3>Get company</h3>
    <div className="get-company-id">
    <label htmlFor="get-companyName">CompanyID </label>
      <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
    </div>
    <div className="get-button">
      <input type="submit" value="Submit" />
    </div> 
    </form>

    <div className="get-show-details">
    <p className="get-show-company-id">Company ID : <span style={{fontWeight:"bold"}}>{showCompanyId}</span></p>
    <p className="get-show-company-name">Company Name : <span style={{fontWeight:"bold"}}>{showCompanyName}</span> </p>
    <p className="get-show-company-address">Address : <span style={{fontWeight:"bold"}}>{showCompanyAddress}</span></p>
    <p className="get-show-company-latitude">Latitude : <span style={{fontWeight:"bold"}}>{showCompanyLatitude}</span></p> 
    <p className="get-show-company-longitude">Longitude : <span style={{fontWeight:"bold"}}>{showCompanyLongitude} </span></p>
    </div>
    </div>
    <ToastContainer/>
    </>
    )
}
export default GetCompany;
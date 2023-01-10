import {useState} from 'react'
import axios from "axios";
import "../../static/css/company/UpdateCompany.css"
import Navbar from '../nav/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateCompany() {
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
    if(company_name && company_id){
      postCompanyName()
      setCompanyId("")
      setName("")
    }
    if(company_address && company_id){
      postCompanyAddress()
      setCompanyId("")
      setAddress("")
    }
    if(latitude && longitude && company_id){
      postCompanyLatitudeAndLongitude()
      setCompanyId("")
      setLatitude("")
      setLongitude("")
    }
   
  }

 async function postCompanyName(){
    try{
      await axios.put(`/company-management/companies/${company_id}`,{
        company_name:company_name
      }).then((result)=>{
        const {data} = result
        notify(data.message)
      }).catch((err)=>{
        const {response}  = err
        notifyerror(response.data.message)
      })
    }catch(err){
     console.log(err);
  }
  }
  async function postCompanyAddress(){
      try{
        await axios.put(`/company-management/companies/${company_id}`,{
          company_address:company_address
        }).then((result)=>{
          const {data} = result
          notify(data.message)
        }).catch((err)=>{
          const {response}  = err
          notifyerror(response.data.message)
        })
      }catch(err){
        const {response}  = err
        notifyerror(response.data.message)
    }
 
  }
  async function postCompanyLatitudeAndLongitude(){
      try{
        await axios.put(`/company-management/companies/${company_id}`,{
          coordinates:[latitude,longitude]
        }).then((result)=>{
          const {data} = result
          notify(data.message)
        }).catch((err)=>{
          const {response}  = err
          notifyerror(response.data.message)
        })
      }catch(err){
        const {response}  = err
        notifyerror(response.data.message)
    }
  }
  return (
<>
<Navbar/>
<div className="update-container">
  <form onSubmit={postThedetails} className="update-form-container">
  <h3>Update company details</h3>
  <div className="update-company-id">
    <label htmlFor="name">Company ID </label>
    <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
  </div>
  <div className="update-company-name">
    <label htmlFor="name">Company Name </label>
    <input type="text" value={company_name} onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="update-address">
   <label htmlFor="address">Company Address </label>
   <input type="text" value={company_address} onChange={(e)=>setAddress(e.target.value)} />
  </div>
  {/* <div className="update-coordinates">
    <label htmlFor="coordinates">Coordinates </label>
  </div> */}
  <div className="update-latitude">
    <label htmlFor="latitude">Latitude </label>
    <input type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)}/>
  </div>
  <div className="update-longitude">
    <label htmlFor="longitude">Longitude </label>
    <input type="text" value={longitude} onChange={(e)=>setLongitude(e.target.value)}/>
  </div>
  <div className="update-button">
    <input type="submit" />
    </div>
  </form>
</div>
<ToastContainer/>
 </>
    )
}

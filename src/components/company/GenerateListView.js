import axios from "axios";
import {useState,useEffect} from "react"
import "../../static/css/company/GenerateListView.css"
import Navbar from "../nav/Navbar";
import Map from "../util/Map";

function GenerateListView(){
  const[showCompany,setShowCompany] = useState([]);
  useEffect(()=>{
      getTheCompanydetails()
  },[])
  async function getTheCompanydetails(){
    try{
      const {data} = await axios.get("/company-management/company-details")
      console.log(data);
      setShowCompany(data)
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <Navbar/>
    <div className="container">
    <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Company ID</div>
      <div className="col col-2">Company Name</div>
      <div className="col col-3">Address</div>
    </li>
    {showCompany.map(show=>(
        <li className="table-row" key={show.company_id}>
          <div style={{
            marginLeft:50
          }} data-label="Company ID">{show.company_id}</div>
          <div data-label="Company Name">{show.company_name}</div>
          <div data-label="Address">{<Map value={{lat:Number(show.coordinates[0]),lng:Number(show.coordinates[1]),address:show.company_address}}/>}</div> 
        </li>
    ))}
  </ul>
    </div>
     </>
    )
}
export default GenerateListView;
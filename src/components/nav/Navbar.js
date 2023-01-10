import React from 'react'
import "../../static/css/nav/Navbar.css"
import { useNavigate } from 'react-router-dom'
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import UpdateIcon from '@mui/icons-material/Update';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  const Navigate = useNavigate()
  function logOut(){
    window.localStorage.removeItem("emailId")
    Navigate("/login")
  }
  
  return (
    <div className='nav-container'>
      <nav>
        <p><NavLink title='Create Company' to="/create-company" activeClassName = "active"  ><DomainAddIcon/></NavLink></p>
        <p><NavLink title='Add User' to="/add-user" activeClassName = "active"  ><PersonAddIcon/></NavLink></p>
        <p><NavLink title='Delete Company' to="/delete-company" activeClassName = "active" ><DomainDisabledIcon/></NavLink></p>
        <p><NavLink title='Company Details' to="/list-company" activeClassName = "active"  ><BusinessIcon/></NavLink></p>
        <p><NavLink title='Get Company' to="/get-company" activeClassName = "active" ><ManageSearchIcon/></NavLink></p>
        <p><NavLink title='Migrate User' to="/migrate" activeClassName = "active" ><MoveUpIcon/></NavLink></p>
        <p><NavLink title='Remove User' to="/remove-user" activeClassName = "active" ><PersonRemoveIcon/></NavLink></p>
        <p><NavLink title='Update Company' to="/update-company" activeClassName = "active"  ><UpgradeIcon/></NavLink></p>
        <p><NavLink title='User Details' to="/list-user" activeClassName = "active" ><GroupIcon/></NavLink></p>
        <p><NavLink title='Get User' to="/get-user" activeClassName = "active" ><PersonSearchIcon/></NavLink></p>
        <p><NavLink title="Update User" to="/update-user" activeClassName = "active" ><UpdateIcon/></NavLink></p>
       <p> <a title='Logout' onClick={logOut} ><LogoutIcon/></a></p>
      </nav>
    </div>
  )
}

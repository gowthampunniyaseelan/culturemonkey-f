import CreateCompany from "./components/company/CreateCompany"
import GetCompany from "./components/company/GetCompany";
import GenerateListView from "./components/company/GenerateListView";
import UpdateCompany from "./components/company/UpdateCompany";
import AddUser from "./components/company/AddUser";
import RemoveUser from "./components/company/RemoveUser";
import DeleteCompany from "./components/company/DeleteCompany";
import GenerateUserListView from "./components/user/GenerateUserListView";
import GetUser from "./components/user/GetUser";
import UpdateUser from "./components/user/UpdateUser";
import Migrate from "./components/company/Migrate";
import SignUp from "./components/auth/SignUp"
import Login from "./components/auth/Login"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return(
    <>
    <Router>
    <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/create-company" element={window.localStorage.getItem("emailId") ? <CreateCompany/> : <Navigate to="/"/>}/> 
    <Route path="/get-company" element={window.localStorage.getItem("emailId") ? <GetCompany/> : <Navigate to="/"/>}/>
    <Route path="/update-company" element={window.localStorage.getItem("emailId") ? <UpdateCompany/> : <Navigate to="/"/>}/>
    <Route path="/list-company" element={window.localStorage.getItem("emailId") ? <GenerateListView/>: <Navigate to="/"/>}/>
    <Route path="/add-user" element={window.localStorage.getItem("emailId") ? <AddUser/> : <Navigate to="/"/>}/>
    <Route path="/remove-user" element={window.localStorage.getItem("emailId") ? <RemoveUser/>: <Navigate to="/"/>}/>
    <Route path="/delete-company" element={window.localStorage.getItem("emailId") ?<DeleteCompany/>: <Navigate to="/"/>}/>
    <Route path="/list-user" element={window.localStorage.getItem("emailId") ?<GenerateUserListView/>: <Navigate to="/"/>}/>
    <Route path="/get-user" element={window.localStorage.getItem("emailId") ? <GetUser/>: <Navigate to="/"/>}/>
    <Route path="/update-user" element={window.localStorage.getItem("emailId") ? <UpdateUser/>: <Navigate to="/"/>}/>
    <Route path="/migrate" element={window.localStorage.getItem("emailId") ? <Migrate/>: <Navigate to="/"/> }/>
    </Routes>
    </Router> 
    </>
  );
}

export default App;

import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./components/Employee/Employee";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Employer from "./components/Employer/Employer";
import "./App.css"
import Admin from "./components/Admin/Admin";
// import Gapi from "./components/Gapi";

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact  path="/" element={<Login/>} />
          <Route path="/employee" element={ <Employee />} />
          <Route path="/employer" element={ <Employer/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:id" element={<Admin />} />

      </Routes>
    </BrowserRouter>
    {/* <Gapi /> */}
    
    

    </>
  );
}

export default App;

import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./components/Employee/Employee";
import {BrowserRouter,Switch,Route, Routes} from "react-router-dom"
import Employer from "./components/Employer/Employer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact  path="/" element={<Login/>} />
          <Route path="/employee" element={ <Employee />} />
          <Route path="/employer" element={ <Employer/>} />
      </Routes>
    </BrowserRouter>
    
    

    </>
  );
}

export default App;

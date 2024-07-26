import Menu from "./components/menu";
import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
import VehicleList from "./components/VehicleList";
import AddVehicle from "./components/AddVehicles";
import UpdateVehicle from "./components/UpdateVehicle";


function App(){
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
      <Route path="/AddVehicles" element={<AddVehicle/>}/>
      <Route path="/UpdateVehicle/:id" element = {<UpdateVehicle/>}/>
      
    </Routes>
    <Footer/>
    </>
  )
}
export default App;

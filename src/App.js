import {AuthContext, AuthProvider} from "../src/context/AuthContext";
import Menu from "./components/menu";
import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/Home";
import { Route,Routes, Navigate } from "react-router-dom";
import VehicleList from "./components/VehicleList";
import AddVehicle from "./components/AddVehicles";
import UpdateVehicle from "./components/UpdateVehicle";
import Login from './components/Login';
import Register from './components/Register';


import { useContext } from 'react';
const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? element : <Navigate to="/login" />;

};


function App(){
  return (
    <>
    <AuthProvider>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle-list" element={<VehicleList />} />
        <Route path="/AddVehicles" element={<AddVehicle />} />
        <Route path="/UpdateVehicle/:id" element={<UpdateVehicle />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
      <Footer />
      </AuthProvider>
    </>
  )
}
export default App;

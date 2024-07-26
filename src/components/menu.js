import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
function Menu(){
  const { user, logout } = useContext(AuthContext);
  return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">ABC Automobiles</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-testid="menu-content">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="/about">About Us</Link>
        </li>
        {user &&(
          <>
          <li className="nav-item">
          <Link className="nav-link" to="/Vehicle-List">Vehicles</Link>
          </li>
          </>)}
        {user?.role === 'admin' && (  
          <>
        <li className="nav-item">
          <Link className="nav-link" to="/AddVehicles">AddVehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/UpdateVehicle">UpdateVehicle</Link>
        </li>
        </>
        )}
        {!user && (
        <>
        <li className="nav-item">
        <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
        </li>
        </>
        )}
        {user && (
        <button className="btn btn-outline-light" onClick={logout}>Logout</button>
       )}
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact</Link>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
      </>
    )
  }




export default Menu;

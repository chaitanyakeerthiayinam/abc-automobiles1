import {Link} from 'react-router-dom';
function Menu(){
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ABC Automobiles</a>
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
        <li className="nav-item">
          <Link className="nav-link" to="/Vehicle-List">Vehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AddVehicles">AddVehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/UpdateVehicle">UpdateVehicle</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
      </>
    )
  }




export default Menu;

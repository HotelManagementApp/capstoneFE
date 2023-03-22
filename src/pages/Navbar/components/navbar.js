import React from "react";
import { Link } from "react-router-dom";
import "../../Navbar/style/navbar.css";


const Navbar = () =>{
   return(
    <div className="header">
    <div className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
      <div className="container">
      <div className="logo-div bg-danger p-2 rounded-pill">
         <a href="#" className ="navbar-brand fs-3">CapStone</a>
      </div>
      <button type="button" className ="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className ="navbar-toggler-icon "></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarCollapse">
       <div className ="navbar-nav ms-auto fs-4">
            <Link to ="/" className ="nav-item nav-link ">Home</Link>
            <Link to="/about" className ="nav-item nav-link">About</Link>
            <Link to="/rooms" className ="nav-item nav-link">Rooms</Link>
            <Link to="/contacts" className ="nav-item nav-link">Contacts</Link>
            <Link to="/bookings" className ="nav-item nav-link book bg-danger">Book Online</Link>

       </div>
    </div>
      </div>
      
    </div>

  </div>
   );
}
export default Navbar;
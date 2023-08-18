import React from 'react';
import { NavLink } from 'react-router-dom';


const  Navbar=() =>{
    return (
        <div>
           

                   <section className="Navbar_section ">
                   <nav className="navbar navbar-expand-lg bg-dark  fixed-top">
  <NavLink className="navbar-brand" href="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active  ">
        <NavLink className="nav-link  activeclassName"  href="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link   activeclassName" href="/Service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  activeclassName" href="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  activeclassName" href="/Feature">Feature</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  activeclassName" href="/Review">Review</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  activeclassName" href="/Contact">Contact</NavLink>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
                   </section>

        </div>
    )
}

export default Navbar;



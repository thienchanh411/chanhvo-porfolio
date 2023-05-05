import {  Nav } from 'react-bootstrap'
import { HashLink} from 'react-router-hash-link';
import {BiMenu} from "react-icons/bi" 
import { useState } from 'react';
import $ from 'jquery'

const NavigationBar = () => {

  const [showNavBar, setShowNavBar] = useState(false);

  const displayNavBar = () => {
    if(showNavBar === false){
          $('#customNavbar').hide("slow");
          setShowNavBar(true)
          return
      }else{
        $('#customNavbar').show("slow");;
        setShowNavBar(false);
        return;
      }
  }


  return (
    <div className="row justify-content-end" style={{background: "#423336"}}>
      <div className="navbarContainer">
        <BiMenu className='burgerMenuIcon' style={{color: "whitesmoke"}}
        onClick={displayNavBar}/>
        <Nav
          className="justify-content-end me-auto my-2 my-lg-0 fs-4"
          // style={{ maxHeight: '100px' }}
          navbarScroll id="customNavbar">

          <HashLink className="nav-link text-white" to="/">Home</HashLink>
          <HashLink className="nav-link text-white" to="/#aboutme">About</HashLink>
          <HashLink className="nav-link text-white" to="/#listprojects">Project</HashLink>
          {/* <HashLink className="nav-link text-white" to="testimonial">Testimonial</HashLink> */}
          <HashLink className="nav-link text-white" to="/#contactme">Contact</HashLink>
          
        </Nav>
      </div>
    </div>
     );
}
 
export default NavigationBar;
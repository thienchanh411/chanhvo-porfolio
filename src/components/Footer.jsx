import {FaCopyright} from "react-icons/fa"
const Footer = () => {
    return ( 
        <div style={{background: "#423336"}}>
            <div className="d-flex flex-direction-row justify-content-center pt-3">
                <FaCopyright style={{width: "1.5rem", height: "1.5rem", color: "white"}}/>
                <p style={{ marginLeft: "5px", color: "white"}}>Chanh Vo 2023</p>
                
            </div>
            
        </div>
     );
}
 
export default Footer;
import { HashLink} from 'react-router-hash-link'; 

const GeneralInfomation = () => {
    return (

        <div id="generalInformation" className="row justify-content-center align-items-center" 
        style={{background: "#423336"}}>
            {/* <div className="row justify-content-center align-items-center">*/}
                <div id='generalInfoContainer' className="col col-lg-10 align-items-center"> 
                <p className=" text-white">Hi, my name is</p>
                <h2 className="" style={{color: "#fff3b0"}}>Chanh (Kevin) Vo</h2>
                <h2 className="" style={{color: "#fff3b0"}}>An aspiring web developer, software developer</h2>
                <p className="text-white">I am pursuing the Computer and Information System (Post-Baccalaureate Diploma) and this is my last semester.<br>
                </br>I am excited to embark on my career as a web developer, software developer and to contribute my skills and expertise to exciting projects.</p>
                <HashLink className="nav-link text-white" to="/#contactme">
                    <button id="btnGetInTouch" className="btn btn-lg btn">Get in touch</button>
                </HashLink>

                 </div>
           {/* </div> */}
       </div>
     );
}
 
export default GeneralInfomation;
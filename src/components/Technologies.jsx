import {FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp} from "react-icons/fa"
import{DiMongodb, } from "react-icons/di"
import {GrMysql} from "react-icons/gr"

const Technologies = () => {
    return ( 
        // <div className="col">
            <div className="row row-cols-3 fw-bold">
                <div className="col fs-5 p-0">
                    <div className="techNames"><FaReact className={"techIcons"}/> React</div>
                    <div className="techNames"><FaHtml5 className={"techIcons"}/> HTML</div>
                    <div className="techNames"><FaCss3Alt className={"techIcons"}/> CSS</div>
                    
                </div>
                <div className="col fs-5 p-0">
                    <div className="techNames"><FaNodeJs className={"techIcons"}/> Node.js</div>
                    <div className="techNames"><FaPhp className={"techIcons"}/> PHP</div>
                </div>
                <div className="col fs-5 p-0">
                    <div className="techNames"><DiMongodb className={"techIcons"}/> MongoDB</div>
                    <div className="techNames"><GrMysql className={"techIcons"}/> MySQL</div>
                </div>
                
            </div>
        // </div>
     );
}
 
export default Technologies;
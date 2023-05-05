import Project from "./Project";
import {listProject} from "../data/listProject.js"
import CardProject from "./CardProject";


const ListProjects = () => {

    return ( 

    //     <div className="row justify-content-center align-items-center" 
    //     style={{ minHeight: "90vh", background: "#354f52"}}>
            
    //             <div className="col-9 align-items-center">
    //             <h2 id="projectTitleTxt">What I've built</h2>
    //         {// eslint-disable-next-line
    //         listProject.map((projectElem, index) => {
    //             if((index+1)%2 === 1){
    //                 return <Project key={index} project={projectElem} index={index} classCard="oddProjectCard"/>
    //             }else{
    //                 return <Project key={index} project={projectElem} index={index} classCard="evenProjectCard"/>
    //             }
                
    //         })}
            
    //     </div>
    // </div>

        <div id="listprojects" className="row justify-content-center align-items-center"
            style={{ minHeight: "90vh", background: "#423336" }}>

            <div className="col col-lg-10 align-items-center">
                <h2 id="projectTitleTxt">What I've built</h2>
                <div id="listProjectsContainer"
                className="row justify-content-center align-items-center" >
                {// eslint-disable-next-line
                    listProject.map((projectElem, index) => {
                        if ((index + 1) % 2 === 1) {
                            return <CardProject key={index} project={projectElem} index={index}  />
                        } else {
                            return <CardProject key={index} project={projectElem} index={index} />
                        }

                    })}
                    <div id="cardProjectContainer">
                        <div id="cardCoverGeneral"></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ListProjects;
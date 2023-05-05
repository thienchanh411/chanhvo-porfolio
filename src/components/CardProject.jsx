import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"
import * as DiIcons from "react-icons/di"
import * as SiIcons from "react-icons/si"
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"
import {BsGithub} from "react-icons/bs"

import $ from 'jquery'

const CardProject = ({project, classCard, index}) => {

    const [showModalProjectInfo, setShowModalProjectInfo] = useState(false);

    let modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.3)"
      }

    const showProjectModal = () => {
        setShowModalProjectInfo(true);
    }

    const closeProjectModal = () => {
        setShowModalProjectInfo(false);
    }

    const modalProjectModal = () => {
        return (
        <div className="modal show fade" id="exampleModal" tabIndex="-1"
        style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{project.projectName}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={closeProjectModal}></button>
                    </div>
                    <div id="modalBody" className="modal-body">
                        <div>
                        <img className="img-fluid" src={process.env.PUBLIC_URL + project.imgProject} alt="imgProject"/>
                        </div>

                        <div className="row mt-2">
                            <div className="col-6">{project.projectType}</div>
                            <div className="col-6 text-end">{project.from} {project.to}</div>
                        </div>

                        <div className="row mt-2">
                            <p id="projectDescription">{project.description}</p>
                        </div>
                        <div className="row mt-2">
                            <div className="col">Technologies:</div>
                        </div>
                        <div className="row mt-2 row-cols-3 align-self-bottom text-center">
                            {// eslint-disable-next-line
                            project.technologies.map((technology, index) => {

                                if (technology.substring(0, 2).toLowerCase() === "fa") {
                                    return <div key={index}>{React.createElement(FaIcons[technology], { className: "iconProjectCardModal" })}</div>
                                }
                                if (technology.substring(0, 2).toLowerCase() === "di") {
                                    return <div key={index}>{React.createElement(DiIcons[technology], { className: "iconProjectCardModal" })}</div>
                                }
                                if (technology.substring(0, 2).toLowerCase() === "si") {
                                    return <div key={index}>{React.createElement(SiIcons[technology], { className: "iconProjectCardModal" })}</div>
                                }
                            })}
                        </div>
                       
                        </div>
                    <div className="modal-footer row"> 
                        <div className="col-6">
                            <a href={project.linkProject} className="text-decoration-none" target="_blank" rel="noreferrer">
                                <BsGithub style={{ width: "1.7rem", height: "1.7rem", color: "rgb(21, 39, 27)" }} />
                            </a>
                        </div>
                        <div className="col-5 text-end">
                            <button type="button" className="btn btn-secondary " data-bs-dismiss="modal"
                                onClick={closeProjectModal}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    $(function () {

    
        $(`#cardCover${index}`).hover(function () {
            var header04 = $(`#cardCover${index} > div> h4`).text();
            var header01 = $(`#cardCover${index} > div> h1`).text();

            $(`#cardCover${index} > div > h4`).css({fontSize: "0px", color: "#943d2c"});
            $(`#cardCover${index} > div > h1`).css({fontSize: "0px", color: "#2d0c2c"});

            $(`#cardCover${index}`).css({
                border: "2px",
                borderStyle: "solid",
                borderColor: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
                backgroundColor: "#d8cecd", 
                transition: "0.2s"});

            $(".iconProjectCard").css({color: "#423336", transition: "0.2s"})
            $(`#borderProjectNumber${index}`).css({backgroundColor: "#bf9943",transition: "0.2s"})
            $(`#projectNumber${index}`).css({backgroundColor: "whitesmoke", color: "#423336", transition: "0.2s"})
            $(`#iconProjectType${index}`).css({color: "white", transition: "0.2s"})
            // .animate({background: "#587e76"})
            // .animate({backgroundColor: "#FFFFFF"}, 300)

            var doAnimateHeader1 = function () {
                $(`.hover${index}`).each(function () {
                    var that = $(this);
                    setTimeout(function () {
                        that.animate({ fontSize: "1.9rem" }, 800)
                            // .animate({ fontSize: "50px" }, 1500);
                    }, that.index() * 100);
                });
            }
            var doAnimateHeader4 = function () {
                $(`.hoverh4${index}`).each(function () {
                    var that = $(this);
                    setTimeout(function () {
                        that.animate({ fontSize: "1.2rem" }, 800)
                            // .animate({ fontSize: "50px" }, 1500);
                    }, that.index() * 100);
                });
            }

            $(`#cardCover${index} > div > h1`).html('');
            $(`#cardCover${index} > div > h4`).html('');

            for (let i = 0; i < header04.length; i++) {
                $(`#cardCover${index} > div > h4`).append(`<span class="hoverh4${index}">${header04[i]}</span>`);
                if (i === header04.length - 1) {
                    doAnimateHeader4();
                }
            }

            for (let i = 0; i < header01.length; i++) {
                $(`#cardCover${index} > div > h1`).append(`<span class="hover${index}">${header01[i]}</span>`);
                if (i === header01.length - 1){
                    doAnimateHeader1();
                } 
            }
        }, function(){
            $(`#cardCover${index}`).css({backgroundColor: "#F0F0F0", transition: "0.2s",});
            $(`#cardCover${index} > div > h4`).css({color: "#2d0c2c"});
            $(`#cardCover${index} > div > h1`).css({color: "#bf9943"});
            $(".iconProjectCard").css({color: "#383d2e", transition: "0.2s"});
            $(".borderProjectNumber").css({backgroundColor: "#d9b561"})
            $(".projectNumber").css({backgroundColor: "#bf9943"})
            $(`#iconProjectType${index}`).css({color: "black"})
        })
    })
    return ( 
        <div id="cardProjectContainer" className="col justify-content-center ">
        <div className="cardCoverGeneral" id={`cardCover${index}`}
            onClick={showProjectModal}
            >
            <div className={`slidecardCover${index}`} style={{height: "30%"}}>
                <div className="borderProjectNumber" id={`borderProjectNumber${index}`}>

                    {/* <p className="projectNumber" id={`projectNumber${index}`}>{index+1}</p> */}
                    {// eslint-disable-next-line
                    project.projectTypeIcon.map((icon) => {
                        if(icon.substring(0,2).toLowerCase() === "fa"){
                            return <div key={index}>{React.createElement(FaIcons[icon], 
                                {id: `iconProjectType${index}`, className:"projectTypeIcon"})}</div>
                        }
                        if(icon.substring(0,2).toLowerCase() === "di"){
                            return <div key={index}>{React.createElement(DiIcons[icon], 
                                {id: `iconProjectType${index}`, className:"projectTypeIcon"})}</div>
                        }
                        if(icon.substring(0,2).toLowerCase() === "si"){
                            return <div key={index}>{React.createElement(SiIcons[icon], 
                                {id: `iconProjectType${index}`, className:"projectTypeIcon"})}</div>
                        }
                        if(icon.substring(0,2).toLowerCase() === "bs"){
                            return <div key={index}>{React.createElement(BsIcons[icon], 
                                {id: `iconProjectType${index}`, className:"projectTypeIcon"})}</div>
                        }
                        if(icon.substring(0,2).toLowerCase() === "md"){
                            return <div key={index}>{React.createElement(MdIcons[icon], 
                                {id: `iconProjectType${index}`, className:"projectTypeIcon"})}</div>
                        }
                    })}
                </div>
            </div>
            <div className={`slidecardCover${index}`} style={{height: "30%"}}
            // className="col h-33 text-white text-center align-self-center"
            >
                
                <h1 style={{ color: "#bf9943" }}>{project.projectName}</h1>
                <h4 style={{color: "#2d0c2c"}}>{project.from} - {project.to}</h4>
            </div>
            <div className={`slidecardCover${index}` } style={{height: "15%"}}>
                <div className="row justify-content-center align-items-center">
                <button className="btn col-4" id="btnShowModalProject" onClick={showProjectModal}>Read more</button>

                </div>
            </div>
            <div className={`slidecardCover${index}` } style={{height: "25%"}}>
                <div className="row row-cols-3 align-self-bottom text-center">
                {// eslint-disable-next-line
                project.technologies.map((technology, index) => {

                    if(technology.substring(0,2).toLowerCase() === "fa"){
                        return <div key={index}>{React.createElement(FaIcons[technology], {className:"iconProjectCard"})}</div>
                    }
                    if(technology.substring(0,2).toLowerCase() === "di"){
                        return <div key={index}>{React.createElement(DiIcons[technology], {className:"iconProjectCard"})}</div>
                    }
                    if(technology.substring(0,2).toLowerCase() === "si"){
                        return <div key={index}>{React.createElement(SiIcons[technology], {className:"iconProjectCard"})}</div>
                    }
                })}
                </div>
            </div>

        </div>

                {showModalProjectInfo === true ? modalProjectModal() : ""}
        </div>
     );
}
 
export default CardProject;
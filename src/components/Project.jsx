import {BsGithub} from "react-icons/bs"
import $ from 'jquery'
import { useEffect, useState, useRef } from "react"

const Project = ({project, classCard, index}) => {
    
    const [cardHeight, setCardHeight] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {

            setCardHeight(elementRef.current.clientHeight);
            setCardWidth(elementRef.current.clientWidth + 15);
          }, 800)
        
        
    },[elementRef])


    $(function () {
        const fullCardProject = $(`#cardFullBackground${index}`);
        const cardCover = $(`#cardCover${index}`)

        // cardCover.width(fullCardProject.outerWidth() + 15)

        // console.log(fullCardProject.position());
        cardCover.css({position: "absolute",top: fullCardProject.position().top,  zIndex: 15})
        fullCardProject.css({position: "relative", zIndex: 3})
        // console.log(cardCover.position({bottom: 0}));

    })

    $(`#cardCover${index}`).hover(function () {
        var header04 = $(`#cardCover${index} > div> h4`).text();
        var header01 = $(`#cardCover${index} > div> h1`).text();
        $(`#cardCover${index} > div > h4`).css({fontSize: "0px"});
        $(`#cardCover${index} > div > h1`).css({fontSize: "0px"});

        var doAnimateHeader1 = function () {
            $(`.hover${index}`).each(function () {
                var that = $(this);
                setTimeout(function () {
                    that.animate({ fontSize: "35px" }, 800)
                        // .animate({ fontSize: "50px" }, 1500);
                }, that.index() * 100);
            });
        }
        var doAnimateHeader4 = function () {
            $(`.hoverh4${index}`).each(function () {
                var that = $(this);
                setTimeout(function () {
                    that.animate({ fontSize: "20px" }, 800)
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
    })

    const showProjectInformation = () => {
        $(`#cardCover${index} > div > h1`).html('');
        $(`#cardCover${index} > div > h4`).html('');
        $(`#cardCover${index}`).animate({
            left: "90%",
            width: 0,
            height: 0,

        }, 500)
    }

    const coverProjectInfo = () => {
        const fullCardProject = $(`#cardFullBackground${index}`);
        $(`#cardCover${index} > div > h1`).html(`<h1>${project.projectName}</h1>`);
        $(`#cardCover${index} > div > h4`).html(`<h4>${project.projectType}</h4>`);
        $(`#cardCover${index}`).animate({
            left: fullCardProject.position().left,
            top: fullCardProject.position().top,
            width: cardWidth,
            height: cardHeight,

        }, 500)
    }

    return ( 
        <>
        <div ref={elementRef} id={`cardFullBackground${index}`} style={{ marginBottom: "5px" }}
        onClick={coverProjectInfo}>

            {/* MAIN CARD PROJECT */}

            <div id="cardProject" className={classCard}
                style={{ background: "#F3F3F3", height: "55vh" }}>
                <div id="divImgProject" className="col-6">
                    <img className="img-fluid" src={project.imgProject} alt="imgProject"
                        style={{ maxWidth: "35vw" }} />
                </div>
                <div id="divInfoProject" className="col-6">
                    <div >
                        <h4>{project.projectName}</h4>
                    </div>
                    <div className="">
                        <div className="projectDescription">
                            <p >{project.description}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="container p-0">
                            <div id="listLanguage" className="row row-cols-5">
                                {// eslint-disable-next-line
                                    project.technologies.map((technology, index) => {
                                        return (
                                            <div key={index} className="col">
                                                <p >{technology}</p>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div>
                            <a href={project.linkProject} className="text-decoration-none" target="_blank" rel="noreferrer">
                                <BsGithub style={{ width: "1.5rem", height: "1.5rem", color: "rgb(21, 39, 27)" }} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
        {/* COVER CARD PROJECT */}
        {/* <div className="row justify-content-center align-items-center" id={`cardCover${index}`}
        onClick={showProjectInformation}
        style={{
            backgroundColor: "#587e76",
            borderRadius: "5px",
            height: cardHeight,
            width:cardWidth
        }}>
            <div className="text-white text-center align-self-center">
                <h4 >{project.projectType}</h4>
                <h1 style={{color: "#e3eaa7"}}>{project.projectName}</h1>
            </div>

        </div> */}
        <div className="cardCoverGeneral" id={`cardCover${index}`}
            onClick={showProjectInformation}>
            <div className={`slidecardCover${index}`} style={{height: "33%"}}></div>
            <div className={`slidecardCover${index}`} style={{height: "33%"}}
            // className="col h-33 text-white text-center align-self-center"
            >
                <h4 >{project.projectType}</h4>
                <h1 style={{ color: "#e3eaa7" }}>{project.projectName}</h1>
            </div>
            <div className={`slidecardCover${index}` } style={{height: "34%"}}></div>

        </div>
        </>
     );
}
 
export default Project;
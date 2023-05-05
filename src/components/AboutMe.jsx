import Technologies from "./Technologies";


const AboutMe = () => {
    return (
        <div id="aboutme">
            <div id="aboutmeContainer" className="row justify-content-center align-items-center" 
            style={{ background: "#d8cecd" }}>
                <div className="col col-lg-10 align-items-center ">
                    <div className="col w-100" >
                        <div className="row">
                            <h2 id="aboutMeTxt" className="col-md-4 my-3"> About me</h2>
                        </div>
                        <div className="row mt-1 mt-md-4 justify-content-center">
                        <div className="col col-lg-8 order-4 order-lg-1 ">

                            <p className="textAboutMe">Hello! my name is Chanh (Kevin) Vo, a passionate and motivated developer in my final semester of Computer Science. 
                                {/* I have a solid foundation in web development, including proficiency
                                in front-end technologies like HTML, CSS, JavaScript, and React.
                                I've also gained experience in back-end development with Node.js and Express. */}
                                During my academic journey, I've worked on various projects
                                that have honed my problem-solving skills and attention to detail.
                                I'm passionate about staying up-to-date with the latest web development practices and frameworks.
                                I'm excited to start my career as a developer and leverage my skills to create cutting-edge websites that meet user needs 
                                and deliver exceptional experiences.</p>
                                <p className="textAboutMe">Here are some technologies I have been working with:</p>
                                {/* <div id="technologiesAbout" className="row"> */}
                                    <Technologies/>
                                {/* </div> */}

                        </div>
                        <div className="d-flex justify-content-center col-lg-4 order-1 order-lg-4 ">
                            {/* <div className="row justify-content-center"> */}
                            <img id="imgAboutMe" src={process.env.PUBLIC_URL + '/Chanh_Hinhthe_JPEG.jpg'}
                            alt="avatar" className="rounded"
                                style={{ maxHeight: "50vh" }} />
                            {/* </div> */}
                        </div>
                        </div>
                    </div>

                </div>
            </div>

         </div>
    );
}
 
export default AboutMe;
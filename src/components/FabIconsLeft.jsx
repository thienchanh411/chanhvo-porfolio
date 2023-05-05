import {BsGithub, BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs"
import $ from 'jquery';

const FabIconsLeftConner = () => {

    $(function () {
        $(".borderFabIcons").each(function(){

            $(this).hover(function(){
                $(this).css({background: '#bf9943', transition: '0.3s'});
                }, function(){
                $(this).css({background: '#2d0c2c', transition: '0.3s'});
              });
        })
    })

    return ( 
        <div id="fabSocialIcons" className="position-fixed top-0 start-0 sticky-start col-1 h-100"
        style={{background: ""}}>
            <div className="d-flex flex-column ps-1 h-100 justify-content-center">
                <div className="borderFabIcons " 
                // style={{height: "3rem", width: "3rem"}}
                >
                <a href="https://github.com/thienchanh411" className="text-decoration-none" target="_blank" rel="noreferrer">
                    <BsGithub className="fabIcons "/>
                </a>
                </div>
                <div className="borderFabIcons ">
                <a href="https://www.facebook.com/kevin.vo.589100/" className="text-decoration-none" target="_blank" rel="noreferrer">
                    <BsFacebook className="fabIcons "/>
                </a>
                </div>
                <div className="borderFabIcons ">
                <a href="https://www.instagram.com/kevin.vo.bc/" className="text-decoration-none" target="_blank" rel="noreferrer">
                    <BsInstagram className="fabIcons " />
                </a>
                </div>
                <div className="borderFabIcons">
                <a href="https://www.linkedin.com/in/chanh-vo/" className="text-decoration-none" target="_blank" rel="noreferrer">
                    <BsLinkedin className="fabIcons "/>
                </a>
                </div>
                
            </div>

        </div>
     );
}
 
export default FabIconsLeftConner;
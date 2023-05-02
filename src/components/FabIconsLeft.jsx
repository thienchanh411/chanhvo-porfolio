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
                    <BsGithub className="fabIcons " 
                    // style={{ minHeight: "3rem", minWidth: "3rem"}}
                    />
                </div>
                <div className="borderFabIcons ">
                    <BsFacebook className="fabIcons " 
                    // style={{ minHeight: "3rem", minWidth: "3rem"}}
                    />
                </div>
                <div className="borderFabIcons ">
                    <BsInstagram className="fabIcons " />
                </div>
                <div className="borderFabIcons">
                    <BsLinkedin className="fabIcons "/>
                </div>
                
            </div>

        </div>
     );
}
 
export default FabIconsLeftConner;
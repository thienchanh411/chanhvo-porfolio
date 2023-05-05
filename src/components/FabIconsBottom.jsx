import {BsGithub, BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs"
import $ from 'jquery';

const FabIconsBottom = () => {

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
        <div id="fabSocialIconsBottom" className="row"
        style={{background: ""}}>
            <div className="d-flex justify-content-center">
                <div className="borderFabIconsBottom " 
                // style={{height: "3rem", width: "3rem"}}
                >
                    <BsGithub className="fabIconsBottom" 
                    // style={{ minHeight: "3rem", minWidth: "3rem"}}
                    />
                </div>
                <div className="borderFabIconsBottom">
                    <BsFacebook className="fabIconsBottom" 
                    // style={{ minHeight: "3rem", minWidth: "3rem"}}
                    />
                </div>
                <div className="borderFabIconsBottom">
                    <BsInstagram className="fabIconsBottom" />
                </div>
                <div className="borderFabIconsBottom">
                    <BsLinkedin className="fabIconsBottom"/>
                </div>
                
            </div>

        </div>
     );
}
 
export default FabIconsBottom;
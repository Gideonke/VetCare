import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="bg-green-200 h-[20vh] flex items-center font-medium justify-between">
<img className="w-[200px] decoration-white" src="src/assets/images/Blue_Abstract_Animal_Vet_Clinic_Logo-removebg-preview.png"/>
            <div className="flex gap-[30em]">
                <ul>
                   <Link to="/"> <li className="mb-2 mt-3">Home</li></Link>
                  <Link to="/register">  <li className="mb-2">Sighn up</li></Link>
                  <Link to ="/login">  <li className="mb-2">Log in</li></Link>
                </ul>
                <ul  >
                    <h1 className="mb-2" >contact</h1>
                    <div className="flex  items-center mb-2 gap-3 ">
                <FaPhoneAlt />
                    <li>254-700-333-333</li>
                    </div  >
                    <h1>FOLOW US</h1>
                    <div className="flex items-center gap-6">
                    <FaFacebook  size={30}/>
                    <RiInstagramFill size={30}
                    />
                    <FaXTwitter size={30} />
                    </div>
                </ul>
                <ul className="gap[2em]">
                    <h1 className="mb-2">Help</h1>
                    <li className="mb-2"> client Support</li>
<li className="mb-2">Terms& Conditions</li>
<li className="mb-2">Privacy Policy</li>
                </ul>
                            </div>
        </div>
    )
}
export default Footer;








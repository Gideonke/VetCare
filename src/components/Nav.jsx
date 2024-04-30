import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
function Nav(){
    return(
      <div className="fixed w-full top-0  bg-white shadow-2xl py-3 ">

        <div className="container  mx-auto z-[-4]" >
            <div className="flex justify-around mt-4 items-center h-[5em] ">
                <div>
                    <img src="src/assets/images/Blue_Abstract_Animal_Vet_Clinic_Logo-removebg-preview.png" className="w-[150px]"/>
                </div>
                <div>
                    <ul className="flex gap-8  text-blue-600 cursor-pointer">
                    <Link to="/">        <li>Home</li></Link> 
                      <Link to="/register">   <li>Sign Up</li></Link> 
                      <Link to="/login"> <li>Login</li></Link> 
                      <Link to="/services" > <li>Services</li></Link>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <button className="flex items-center   text-blue-600  py-2 border-2 border-green-300 rounded-full px-3 hover:border-blue-600 transition duration-700 ease-in"><IoIosCall size={30}/>
+254-705764291</button>
<Link to="/booknow" >    <button className="bg-blue-600 rounded-full py-3 px-4 text-white hover:bg-green-400  transition duration-700 ease-in">Book Now</button></Link>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Nav;

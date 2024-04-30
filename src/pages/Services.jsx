import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
function Services(){
    return(
        <div>
             <div className="bg-green-50 h-[35vh] mt-40">
                <div className="flex items-center justify-evenly">
             <h2 className="text-blue-600 text-4xl mt-20">OUR QUALIFIED TEAM
             </h2>
             <h2 className=" flex gap-4 text-blue-600 mt-20">
             <FaArrowLeft size={40} />
             <FaArrowRight  size={40}/>
             </h2>
             </div>
 <div className=" flex gap-12 justify-center bg-green-50 ">
    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-4 rounded-2xl group">
        <div>
            <img src="src/assets/images/pexels-tima-miroshnichenko-6235666-removebg-preview.png" width={150}/>
        </div>
        <div>
            <h1 className="text-blue-600 text-3xl">Dog Veterinary</h1>
        </div>
        <div><Link to="/booknow"><button className="hidden group-hover:block bg-blue-600 rounded-full py-1 px-2 text-white hover:bg-green-400  transition duration-700 ease-in">Book Now</button></Link></div>
        <div><p className="w-[300px] text-center leading-[1.5rem]">We know that the unexpected happens, and we promise to do our best to accommodate the needs of our patients and clients</p></div>
        <div>  <button className="flex items-center   text-blue-600  py-1 border-2 border-green-300 rounded-full px-3 hover:border-blue-600 transition duration-700 ease-in mb-12"><IoIosCall size={30}/>+254-705764291</button></div>
    </div>
    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-4 rounded-2xl group">
      <div>
          <img src="src/assets/images/pexels-dhruv-khichi-27563587-15248649-removebg-preview.png" width={300}/>
      </div>
      <div>
          <h1 className="text-blue-600 text-3xl">Pigs Veterinarians</h1>
      </div>
      <div><Link to="/booknow"><button className="hidden group-hover:block bg-blue-600 rounded-full py-1 px-2 text-white hover:bg-green-400  transition duration-700 ease-in">Book Now</button></Link></div>
      <div><p className="w-[300px] text-center leading-[1.5rem]">We’re more than just your veterinary team! We’re your friends, neighbors, and family, and we’re proud to be a part of the Morgantown community.</p></div>
      <div>  <button className="flex items-center   text-blue-600  py-2 border-2 border-green-300 rounded-full px-3 hover:border-blue-600 transition duration-700 ease-in"><IoIosCall size={30}/>+254-705764291</button></div>
  </div>
  <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-4 rounded-2xl group">
        <div>
            <img src="src/assets/images/pexels-peng-louis-587527-1643456-removebg-preview.png" width={250}/>
        </div>
        <div>
            <h1 className="text-blue-600 text-3xl">Cat Doctor<br/>
Available</h1>
        </div>
        <div><Link to="/booknow"><button className="hidden group-hover:block bg-blue-600 rounded-full py-1 px-2 text-white hover:bg-green-400  transition duration-700 ease-in">Book Now</button></Link></div>
        <div><p className="w-[300px] text-center leading-[1.5rem]">Though we hope you never need it, we’re available to provide urgent care during our open hours, and we have an on-call veterinarian for after-hours emergencies.</p></div>
        <div>  <button className="flex items-center   text-blue-600  py-2 border-2 border-green-300 rounded-full px-3 hover:border-blue-600 transition duration-700 ease-in mb-8"><IoIosCall size={30}/>+254-705764291</button></div>
    </div>
 </div>
             </div>
      <div className="bg-green-200 h-[40vh]"></div>
        </div>
    )
}
export default Services;
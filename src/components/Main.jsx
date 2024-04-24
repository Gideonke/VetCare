import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Main(){
    return(
        <div className="">

             <div className="bg-green-50 h-[35vh]">
                <div className="flex items-center justify-evenly">
             <h2 className="text-blue-600 text-4xl mt-20">What Sets Us Apart
             </h2>
             <h2 className=" flex gap-4 text-blue-600 mt-20">
             <FaArrowLeft size={40} />
             <FaArrowRight  size={40}/>
             </h2>
             </div>

 <div className=" flex gap-12 justify-center bg-green-50">
    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-6 rounded-2xl">
      
        <div>
            <img src="src/assets/images/pexels-tima-miroshnichenko-6235666-removebg-preview.png" width={150}/>
        </div>
        <div>
            <h1 className="text-blue-600 text-3xl">Same-Day<br/>
Appointments</h1>
        </div>
        <div><p className="w-[300px] text-center leading-[2rem]">We know that the unexpected happens, and we promise to do our best to accommodate the needs of our patients and clients</p></div>
        
    </div>
    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-6 rounded-2xl">
      
      <div>
          <img src="src/assets/images/pexels-dhruv-khichi-27563587-15248649-removebg-preview.png" width={300}/>
      </div>
      <div>
          <h1 className="text-blue-600 text-3xl">Local Favorite<br/>
Veterinarians</h1>
      </div>
      <div><p className="w-[300px] text-center leading-[2rem]">We’re more than just your veterinary team! We’re your friends, neighbors, and family, and we’re proud to be a part of the Morgantown community.</p></div>
      
  </div>
  <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-6 rounded-2xl">
      
        <div>
            <img src="src/assets/images/pexels-peng-louis-587527-1643456-removebg-preview.png" width={300}/>
        </div>
        <div>
            <h1 className="text-blue-600 text-3xl">Urgent Care<br/>
Available</h1>
        </div>
        <div><p className="w-[300px] text-center leading-[2rem]">Though we hope you never need it, we’re available to provide urgent care during our open hours, and we have an on-call veterinarian for after-hours emergencies.</p></div>
        
    </div>

 </div>
             </div>
      <div className="bg-green-200 h-[40vh]"></div>

      <div className="flex justify-center">
        <div className="w-[800px] flex flex-col items-center justify-center m-20 gap-4">
        <p className="text-blue-600 bg-green-200 px-4 py-3">OUR SERVICES</p>
        <h2 className="text-blue-600 text-4xl text-center">Morgantown's Trusted Home For Compassionate Veterinary Services
</h2> 
<button className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl">ALL SERVICES</button>

        </div>
      </div>

      <div className="flex justify-center">
        <div className="h-[60vh] w-[80vw] bg-green-200 left-80 flex items-center rounded-full justify-around ">
<div className="flex flex-col  gap-4">
<p className="text-blue-600 bg-green-50 px-4 py-3 w-[200px]">MEET YOUR DOCTOR
</p> 
<h2 className="text-blue-600 text-4xl">We’re All About Smiling Faces & Wagging Tails
</h2> 
<Link to="booking"><button className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl w-[300px]">Book Now</button></Link>

</div>
<div>
    <img src="src/assets/images/pexels-bin-ziegler-588438-1364756-removebg-preview.png" width={350}/>
</div>


        </div>
      </div>
     
        </div>
    )
}
export default Main;
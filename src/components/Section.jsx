import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

function Section(){
    return(
        <div className="m-20 ">

             <div className="bg-green-50 h-[35vh]">
                <div className="flex items-center justify-evenly">
             <h2 className="text-blue-600 text-4xl mt-20">Why People Love Us

             </h2>
             <h2 className=" flex gap-4 text-blue-600 mt-20">
             <FaArrowLeft size={40} />
             <FaArrowRight  size={40}/>
             </h2>
             </div>

 <div className=" flex gap-6 justify-center">
    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-12 rounded-2xl">
      
        <div className="flex gap-3 text-yellow-700">
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>

        </div>
        <div>
            <h1 className="text-blue-600 text-2xl text-center">Trustworthy Veterinary<br/> Services</h1>
        </div>
        <div><p className="w-[300px] text-center leading-[2rem]">Professional pet care, trustworthy veterinary services, clean facility, & very friendly staff.</p></div>
        <div>            <h1 className="text-blue-600 text-2xl">Steven Mwas
</h1>
</div>
    </div>
    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-12 rounded-2xl">
      
      <div className="flex gap-3 text-yellow-700">
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>

      </div>
      <div>
          <h1 className="text-blue-600 text-2xl text-center">Polite And Professional
</h1>
      </div>
      <div><p className="w-[300px] text-center leading-[2rem]">I always get the best care for my fur babies. You're all polite and professional. I really appreciate all of you.</p></div>
      <div><h1 className="text-blue-600 text-2xl">Gideon KE</h1>
</div>
  </div>
  <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-12 rounded-2xl">
      
        <div className="flex gap-3 text-yellow-700">
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>
        <IoMdStar size={30}/>

        </div>
        <div>
            <h1 className="text-blue-600 text-2xl text-center">They Saved Our Dog Porter's<br/> Life</h1>
        </div>
        <div><p className="w-[300px] text-center leading-[2rem]">They saved our dog Porter’s life. Great staff. Thank you so much for taking such good care of him!</p></div>
        <div><h1 className="text-blue-600 text-2xl">Aspen Gie</h1>
</div>
    </div>

    <div className="w-[400px] h-[50vh] bg-white mt-20 flex flex-col items-center justify-center gap-12 rounded-2xl">
      
      <div className="flex gap-3 text-yellow-700">
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>
      <IoMdStar size={30}/>

      </div>
      <div>
          <h1 className="text-blue-600 text-2xl text-center">They Have Been A Godsend</h1>
      </div>
      <div><p className="w-[300px] text-center leading-[2rem]">They have been a Godsend to our Newfie. We drive an hour and a half round trip to see Dr. Hampton and his staff and it’s worth every minute. They are invested in the health of your animal.</p></div>
      <div> <h1 className="text-blue-600 text-2xl">Brad Whitlow</h1>
</div>
  </div>

 </div>
             </div>
      <div className="bg-green-200 h-[40vh]"></div>

      
      <div className="m-10">
        <h1 className="text-blue-600 text-center text-3xl m-4">IN PARTINERSHIP WITH:</h1>
        <img src="src/assets/images/Screenshot from 2024-04-22 11-47-06.png" className="w-[100%] h-[20vh]"/>
      </div>
</div>
    )
}
export default Section;
import { FcGoogle } from "react-icons/fc";
function Signup(){
    return(
<div className="flex  justify-center mt-14  ">
    <div className="flex items-center flex-col gap-10">
        <div className="flex gap-4 " >
            <input type="text" placeholder="First Name" className="text-1xl border border-gray-400 py-5 px-10  flex1 rounded-full"/>
            <input type="text" placeholder="Last name"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-full"/>
        </div>
        <div>
        <input type="email" placeholder="Email Address"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"/>
        </div>
        <div>
        <input type="number" placeholder="Mobile Number"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"/>
        </div>
        <div>
        <input type="password" placeholder="Password"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"/>
        </div>
        <div>
        <input type="password" placeholder="Confirm Password"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"/>
        </div>
     
        <input  type=" Create Account" placeholder="Email Address"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"/>
            
          
        <div className="flex items-center">
                <input type="checkbox"/>
                <p>Remember Me</p>
            </div>
        <div className="flex gap-3 items-center">
                <div className="border-b-2 border-gray-700 w-[300px]"></div>
<div>or</div>
<div className="border-b-2 border-gray-700 w-[300px]"></div>
            </div>
    <div className="text-2xl border border-gray-400 py-4 px-20  rounded-full flex items-center gap-6 text-blue-800 justify-center">
    <FcGoogle size={40}/>
        <p>Sign Up With Google</p>
    </div>
    <div className="flex items-center cursor-pointer justify-center">Already have An Account? <span className="text-green-600">Login</span></div>
    </div>
    
</div>
    )
}
export default Signup;
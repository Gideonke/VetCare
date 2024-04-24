function services(){
    return(
   <div>
   
   <div className="flex gap-4 " >
            <input type="text" placeholder="First Name" className="text-1xl border border-gray-400 py-5 px-10  flex1 rounded-xl"/>
            <input type="text" placeholder="Last name"className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl"/>
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
   
       
       
   </div>
    )   
   }
   export default services;
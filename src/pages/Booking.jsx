function Booking(){
    return(
        <div className="mt-8 bg-green-50 flex justify-center gap-8">
    <div>
            <div className="text-center flex flex-col gap-4 m-4">
            <p className="text-2xl">Trusted and Amazing Pet Care</p>
            <h1 className="text-blue-600 text-3xl border-4 border-blue-600/100 ">VETCARE PLUS ANIMAL HOSPITAL</h1>
            </div>
{/* card */}
<div className="w-[800px] h-[auto] bg-white rounded-2xl flex flex-col gap-4 items-center border border-blue-600">
<h1 className="text-blue-600 text-3xl text-center m-6 border-8 border-b-blue-600/100 ">Request a Service</h1>
<input type="text" placeholder="Full Name" className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"/>
<input type="email" placeholder="Email Address" className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"/>
<input type="text" placeholder="Cell Phone" className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"/>
<input type="text" placeholder="Pets Name" className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"/>
<select className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600">
    
    <option>Cart</option>
    <option>Bird</option>
    <option>Dog</option>
    <option>Rabbit</option>
    <option>Other</option>


</select>
<input type="text" placeholder="Breed" className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"/>

<input type="text" placeholder="Reason for Appointment" className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"/>
<button className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl mb-4">REQUEST</button>

</div>

            </div>

            <div>
                <img src="src/assets/images/pexels-flowerstofox-1870302-removebg-preview.png" width={500} className="mt-[-15%]"/>
            </div>
        </div>
    )
}
export default Booking;
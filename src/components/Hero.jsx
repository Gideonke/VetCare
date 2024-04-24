function Hero() {
    return (
      <div>
        <div className=" bg-green-50  w-[100%] mt-40">
          <div className="flex justify-between items-center h-[70vh]">
            <div className="flex flex-col gap-10 items-center flex-1">
              <p className="text-blue-600 bg-green-200 px-4 py-3">
                SO GLAD YOU'RE HERE
              </p>
              <h1 className="text-blue-600 text-5xl leading-[4rem]">
                We’re building a<br></br> clinic experience as<br></br> unique as
                the pets<br></br> we care for.
              </h1>
              <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl">
                OUR MISSION
              </button>
            </div>
            <div className="flex-1 h-full text-center">
              <img
                src="src/assets/images/pexels-tima-miroshnichenko-6234607.jpg"
                className="w-full h-full rounded-l-[48%] object-cover"
              />
            </div>
          </div>
        </div>
  <div className="flex justify-center m-9">
        <div className="mt-12 w-[800px] flex flex-col gap-5 items-center justify-center text-center left-[30%]" >
          <p className="text-blue-600 bg-green-200 px-4 py-3">OUR MISSION</p>
          <h2 className="text-blue-600 text-4xl">Premier Pet Care With A Personal Touch
  </h2>
  <p className="leading-[2rem]">Our team is a family of passionate, dedicated animal lovers known for our excellent service to the pets and people of Morgantown and the surrounding areas. Our goal is to partner with you to see that your pet has as many happy, healthy years as possible. We do that by focusing on preventive care, providing comprehensive services, and using a customized approach.
  </p>
  <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl">Book Now</button>
        </div>
        </div>
      </div>
    );
  }
  export default Hero;
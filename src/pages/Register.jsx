"use client"

import React,{useState} from "react";

import { FcGoogle } from "react-icons/fc";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate= useState()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: ""
  });

const [errorMessage, setErrorMessage]=useState("")
  
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  const handleRegister = async (e) => {
    
    if(formData.firstName===""){
        setErrorMessage("Kindly fill in the first name")
      }
      else if(formData.lastName===""){
        setErrorMessage("Kindly fill in the last name")
      }
      else if(formData.mobileNumber===""){
        setErrorMessage("Kindly fill in the phone number")
      }
      else if(formData.email===""){
        setErrorMessage("Kindly fill in the email adress")
      }
      else if(formData.password===""){
        setErrorMessage("Kindly fill in the password")
      }
      else if(formData.password!==formData.confirmPassword){
        setErrorMessage("password doesn't match")
      }


    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        console.log(user)
        alert("Succesfully Registered")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="container  mx-auto bg-gray-20 mt-[10%] ">
      <div className="flex  justify-between items-center    ">
        <div>
          <img
            src="src/assets/images/pexels-arina-krasnikova-7726103.jpg"
            className="w-[800px] h-[90vh]"
          />
        </div>
        <div className="flex items-center flex-col gap-10 mt-9">
          <div className="flex gap-4 ">
            <input 
            onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="text-1xl border border-gray-400 py-5 px-10  flex1 rounded-xl"
            />
            <input
             onChange={handleChange}
              type="text"
              placeholder="Last name"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>
          <div>
            <input
             onChange={handleChange}
              type="number"
              placeholder="Mobile Number"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <div>
            <input
             onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>

          <input
            type=" Create Account"
            placeholder="Email Address"
            className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
          />
          <h2 className="text-2xl">Register as a?</h2>
          <div className="flex gap-[10em]">
            <div className="flex items-center gap-3  ">
              <input type="radio" name="type" className="cursor-pointer" />
              <p>Registar as client</p>
            </div>

            <div className="flex items-center gap-3 ">
              <input type="radio" name="type" className="cursor-pointer" />
              <p>Registar as Veterinary</p>
            </div>
          </div>

          <button
            onClick={(e) => handleRegister(e)}
            className="bg-blue-600 py-4 px-[6em] rounded-full text-white"
          >
            Submit
          </button>
          <div className="flex gap-3 items-center">
            <div className="border-b-2 border-gray-700 w-[300px]"></div>
            <div>or</div>
            <div className="border-b-2 border-gray-700 w-[300px]"></div>
          </div>

          <div className="text-2xl border cursor-pointer border-gray-400 py-4 px-20  rounded-full flex items-center gap-6 text-blue-800 justify-center">
            <FcGoogle size={40} />
            <p>Sign Up With Google</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center mb-3">
            Already have An Account?{" "}
            <span className="text-green-600">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;

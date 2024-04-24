import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { Link } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    userType: "client", // Default value for user type
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.firstName === "") {
      setErrorMessage("Kindly fill in the first name");
      return;
    } else if (formData.lastName === "") {
      setErrorMessage("Kindly fill in the last name");
      return;
    } else if (formData.mobileNumber === "") {
      setErrorMessage("Kindly fill in the phone number");
      return;
    } else if (formData.email === "") {
      setErrorMessage("Kindly fill in the email address");
      return;
    } else if (formData.password === "") {
      setErrorMessage("Kindly fill in the password");
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log(user);
      alert("Successfully Registered");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };
  return (
    <div className="container mx-auto bg-gray-20 mt-[10%]">
      <div className="flex justify-between items-center">
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
              name="firstName"
              className="text-1xl border border-gray-400 py-5 px-10  flex1 rounded-xl"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Last name"
              name="lastName"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              name="email"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="number"
              placeholder="Mobile Number"
              name="mobileNumber"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className="text-1xl border border-gray-400 py-4 px-10 flex1 rounded-xl w-[600px]"
            />
          </div>
          <h2 className="text-2xl">Register as a?</h2>
          <div className="flex gap-[10em]">
            <div className="flex items-center gap-3  ">
              <input
                type="radio"
                name="userType"
                value="client"
                onChange={handleChange}
                className="cursor-pointer"
              />
              <p>Register as client</p>
            </div>
            <div className="flex items-center gap-3 ">
              <input
                type="radio"
                name="userType"
                value="veterinary"
                onChange={handleChange}
                className="cursor-pointer"
              />
              <p>Register as Veterinary</p>
            </div>
          </div>
          <button
            onClick={handleRegister}
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
            Already have An Account? <Link to="/login"><span className="text-green-600">Login</span></Link>
          </div>
          {errorMessage && <p className="text-red-500" >{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}
export default Signup;
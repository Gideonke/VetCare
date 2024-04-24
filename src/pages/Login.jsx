import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'validEmail' && password === 'validPassword') {
      console.log('Logged in successfully');
    } else {
      setError('Invalid email or password');
    }
  };
  return (
    <div className="flex gap-10 justify-center mt-14">
      <div>
        <img src="src/assets/images/pexels-sam-lion-5733423 (1).jpg" className="w-[800px] h-[90vh]" />
      </div>
      <div className="flex flex-col gap-14">
        <div>
          <h1 className="text-3xl">Login to your Account</h1>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="text-1xl border border-gray-400 py-5 px-5 rounded-2xl w-[600px] flex-1 shadow-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border border-gray-400 w-[600px] flex justify-between items-center rounded-2xl">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="text-1xl py-5 px-5 flex-1 bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pr-3 cursor-pointer" onClick={handleShowPassword}>
            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <div>
            <p className="text-[#45C9A1]">Forgot Password ?</p>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="text-2xl border border-gray-400 py-4 px-30 rounded-full flex items-center gap-6 text-white bg-blue-600 justify-center"
        >
          Log In
        </button>
        <div className="flex gap-3 items-center">
          <div className="border-b-2 border-gray-700 w-[300px]"></div>
          <div>or</div>
          <div className="border-b-2 border-gray-700 w-[300px]"></div>
        </div>
        <div className="text-2xl border border-green-300 bg-green-300 deco py-4 px-30 rounded-full flex items-center gap-6 text-blue justify-center">
          <FcGoogle size={40} />
          <p>Continue With Google</p>
        </div>
        <div className="flex items-center gap-10">
          Don't Have An Account Yet? <span className="text-green-600"> Sign Up Free</span>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
export default Login;



